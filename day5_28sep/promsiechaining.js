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
        return new Promise((resolve,reject)=>{
            if(email!=undefined){
                resolve(obj)
            }
            else reject("please login first")
        })
}

//promise chaining 
userlogin("abc@gmail.com",12345).then((user)=>{
    console.log(user)
    return profilePage().then((data)=>{ //we can use outside catch - has to put return keyword before promise calling
        console.log(data)
    })
}).catch(err=>console.log(err)
)