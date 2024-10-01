// async function fun(){ //always returns a promise 
//     return "hello" //Promise.resolve("hello")
//  }

//  console.log(fun())

// let fun = async ()=>"hello" //Promise.resolve("hello")
 
// let fun = async ()=>Promise.resolve("hello")

let fun = async ()=>Promise.reject("error")

fun().then(data=>console.log(data)).catch(err=>console.log(err))