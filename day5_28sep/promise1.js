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

userlogin("abc@gmail.com").then((user)=>{
    console.log(user)
}).catch(err=>console.log(err)
)