let userlogin=(email,password)=>{
    setTimeout(()=>{
        if(email != undefined && password != undefined){
            console.log("settimeout called")
            return {email,password}
        }
        
        else 
            throw new Error("invalid credentials")
    },2000)
}


let user = userlogin("ram@gmail.com",12345)
console.log(`User - ${user}`)