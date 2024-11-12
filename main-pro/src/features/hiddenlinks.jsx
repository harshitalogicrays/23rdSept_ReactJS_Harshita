export const ShowOnLogin = ({children})=>{
    if(sessionStorage.getItem('23rdsept') != null){
        return children
    }
    else return null
}

export const ShowOnLogout = ({children})=>{
    if(sessionStorage.getItem('23rdsept') == null){
        return children
    }
    else return null
}