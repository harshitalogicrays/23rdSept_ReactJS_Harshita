let userlogin=(email,password)=>{ //(user)=>{console.log(user)}
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(email != undefined && password != undefined){
                resolve({email,password}) 
            }
            else 
                reject("invalid credentials")
        },2000)
    })
}
let profilePage = (email)=>{
    let obj = {name:"aaa","mobile":8898,id:"wsd22",email:"abc@gmail.com",password:12345}
            if(email!=undefined){
                return Promise.resolve(obj)
            }
            else return Promise.reject("please login first")
}
let changePassword = (password)=>{
          if(password==12345){
            return {password:"abc@123"} //Promise.resolve({password:"abc@123"})
        }
        else {return Promise.reject("invalid password")}
} 

const fun1 = async()=>{
    try{
        let user =await userlogin("ram@gmail.com",12245)
        console.log(user)
        let data = await profilePage(user.email)
        console.log(data)
        let d = await changePassword(data.password)
        console.log(d)
    }
    catch(err){
        console.log(err)
    }
} 

fun1()