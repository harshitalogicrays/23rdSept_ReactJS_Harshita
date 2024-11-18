import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState:{isLoggedIn:false,email:'',name:'',role:'',id:''},
    reducers:{//pure functions
        login_user:(state,action)=>{
            // console.log("login user",action.payload)
            let {isLoggedIn,username,email,role,id} =action.payload
            state.isLoggedIn = isLoggedIn
            state.email = email
            state.name = username
            state.role = role 
            state.id =  id
        },
        logout_user(state,action){
            state.isLoggedIn = false
            state.email = ''
            state.name = ''
            state.role = '' 
            state.id =  ''
        }
    }
})
// console.log(userSlice.actions)
export const {login_user,logout_user} = userSlice.actions
export default userSlice
export const selectName =(state)=>state.user.name
export const selectIsLoggedIn = (state)=>state.user.isLoggedIn
export const selectEmail = (state)=>state.user.email
export const selectRole = (state)=>state.user.role
export const selectId = (state)=>state.user.id
