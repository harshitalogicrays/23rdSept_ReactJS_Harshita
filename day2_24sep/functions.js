/*console.log(fun())  //hoisting 

function fun(){
    return "hello from fun"
}

console.log(fun()) //hello from fun
*/

/////////////////////////////////////////////////
let n=10
//function expression - never hoist
// console.log(a()) //error 
let a = function(){ //without name function - anonymous function
    return "hello"
}
// console.log(a()) //hello 

////arrow function
let b = ()=>"hello"


// let add = (a,b)=>console.log(a+b)
// console.log(add)


// let add1 = (a,b)=>a+b //add1 is holding fun definition 
// let result =add1(4,5)
// console.log(result)
// console.log(add1(5,6))

// let add2 = (a,b)=>{
//     console.log("erthewjt")
//     console.log("etkhewt")
//     return a+b 
// }
// console.log(add2(4,6))


// let add1 = (a,b)=>a+b //add1 is holding fun definition  //a=undefined , b=undefined
// console.log(add1(4,5)) //9
// console.log(add1(14)) //a=14,b=undefined =NaN (not a number)
// console.log(add1()) //a=undefined , b=undefined = NaN


// let add1 = (a=1,b=0)=>a+b  //default parameter
// console.log(add1(4,5)) //9
// console.log(add1(14)) //a=14,b=0 =14
// console.log(add1()) //a=1 , b=0 = 1


// ===================================

//... - rest parameter - indi. -> group (array or object)
// let add1 = (a,b,...c)=>{ //c=[9,8,3,1,2] //A rest parameter must be last in a parameter list
// console.log(c)
// }

// add1(4,5,9,8,3,1,2) 
/////////////////////////////////////////////////////////////////////////////

//... - spread operator - array or object ---> indi. 
let arr = [4,65,7]
// let arr1 = [6,2,arr,9,2] 
// console.log(arr1) // [6,2,[4,65,7],9,2]
let arr1 = [6,2,...arr,9,2] 
console.log(arr1) // [6,2,4,65,7,9,2]
