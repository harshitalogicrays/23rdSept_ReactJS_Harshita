// let Employee = {}  //empty object 

let Employee = {fname:"Jimit",lname:"Jain",empid:101,salary:980000,"mobile no":99999} 
// console.log(Employee.fname)
// console.log(Employee['fname'])
// console.log(Employee['mobile no'])

// for in loop
// for(let key in Employee){
//     console.log(`key=${key} and 
//         value=${Employee[key]}`)
// }


// console.log(Employee)
let jsonstr = JSON.stringify(Employee)
console.log(jsonstr)
let obj = JSON.parse(jsonstr)
console.log(obj['mobile no'])
