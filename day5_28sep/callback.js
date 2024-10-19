let userlogin=(email,password,cb)=>{ //(user)=>{console.log(user)}
    setTimeout(()=>{
        if(email != undefined && password != undefined){
            console.log("settimeout called")
            cb({email,password}) //callback function {email:"ram@gmail.com",password:12345}
        }
        else 
            throw new Error("invalid credentials")
    },2000)
}


userlogin("ram@gmail.com",12345,(user)=>{
    console.log(user)
})

// let cb =(user)=>{console.log(`User - ${user}`)}
// cb("hello") //calling
