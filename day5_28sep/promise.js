/*let count=22
let p = new Promise((resolve,reject)=>{
    if(count<=10){
        resolve()
    }
    else {
        reject()
    }
})

p.then(()=>{console.log("promise resolved") }) //promise resolved
 .catch(()=>{console.log("promise rejected") }) //promise rejected
 */

/* let count=41
let p = new Promise((resolve,reject)=>{
    if(count<=10){
        resolve(count)
    }
    else {
        reject("Something went wrong")
    }
})

p.then((d)=>{console.log("promise resolved",d) }) //promise resolved
 .catch((err)=>{console.log("promise rejected",err) })  */

 /*let count=41
 let p = new Promise((resolve,reject)=>{
     if(count<=10){
         resolve(count)
     }
     else {
         reject("Something went wrong")
     }
 })
 
 p.then((d)=>{console.log("promise resolved",d) }) //promise resolved
  .catch((err)=>{console.log("promise rejected",err) }) 
  .finally(()=>{console.log("finally block")}) */

/*  let count=24,str="harshita"
  let p = new Promise((resolve,reject)=>{
      if(count<=10){
          resolve({count,name:str}) //only one argument 
      }
      else {
          reject({message:"Something went wrong",status:400})
      }
  })
  
  p.then((d)=>{console.log("promise resolved",d) }) //promise resolved
   .catch((err)=>{console.log("promise rejected",err) }) 
   .finally(()=>{console.log("finally block")}) */

 /*  let count=2,str="harshita"
   let p = new Promise((resolve,reject)=>{
       if(count<=10){
           resolve({count,name:str}) //only one time  
           resolve({count,name:str}) 
           resolve({count,name:str}) 
       }
       else {
           reject({message:"Something went wrong",status:400})
       }
   })
   
   p.then((d)=>{console.log("promise resolved",d) }) //promise resolved
    .catch((err)=>{console.log("promise rejected",err) }) 
    .finally(()=>{console.log("finally block")}) */


    function fun(count){ //returning a promise
        return new Promise((resolve,reject)=>{
            if(count<=10){
                resolve(count) 
            }
            else {
                reject({message:"Something went wrong",status:400})
            }
        })
    }
// console.log(fun(3)) //pending state
    fun(31).then((d)=>{console.log("promise resolved",d) }) 
    .catch((err)=>{console.log("promise rejected",err) }) 