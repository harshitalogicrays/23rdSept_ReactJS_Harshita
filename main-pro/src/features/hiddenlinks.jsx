import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { selectIsLoggedIn, selectRole } from "../redux/userSlice"

// export const ShowOnLogin = ({children})=>{
//     if(sessionStorage.getItem('23rdsept') != null){
//         return children
//     }
//     else return null
// }

// export const ShowOnLogout = ({children})=>{
//     if(sessionStorage.getItem('23rdsept') == null){
//         return children
//     }
//     else return null
// }

// export const ProtectedAdmin = ({children})=>{
//     if(sessionStorage.getItem('23rdsept') != null){
//         let obj = JSON.parse(sessionStorage.getItem('23rdsept'))
//         if(obj.role=="0") {
//             return children
//         }
//         else return <Navigate to='/' replace={true}/>
//     }
//     else return <Navigate to='/login' replace={true}/>
// }

// export const Protected = ({children})=>{
//     if(sessionStorage.getItem('23rdsept') != null){
//         let obj = JSON.parse(sessionStorage.getItem('23rdsept'))
//         if(obj.role=="1") {
//             return children
//         }
//         else return <Navigate to='/login' replace={true}/>
//     }
//     else return <Navigate to='/login' replace={true}/>
// }



export const ShowOnLogin = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(isLoggedIn){
        return children
    }
    else return null
}

export const ShowOnLogout = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if(!isLoggedIn){
        return children
    }
    else return null
}

export const ProtectedAdmin = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(selectRole)
    if(isLoggedIn && role=="0"){
                   return children
        }
        else return <Navigate to='/login' replace={true}/>
}

export const Protected = ({children})=>{
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const role = useSelector(selectRole)
    if(isLoggedIn && role=="1"){
                   return children
        }
        else return <Navigate to='/login' replace={true}/>
}