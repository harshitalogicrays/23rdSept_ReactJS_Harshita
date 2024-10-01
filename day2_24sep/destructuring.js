let arr = new Array(5,8,2,1)
// console.log(arr instanceof Array)
// let a =  arr[0]
// let b = arr[1]
// let c = arr[2]
// let d = arr[3]

// let [a,b,c,d]=arr //a=5,b=8,c=2,d=1
// let [a,b,c,d,e]=arr //a=5,b=8,c=2,d=1 .e=undefined
// let [a,b,c,d,e=2]=arr  //a=5,b=8,c=2,d=1 .e=2

// let [x,,y,z]=arr //x=5,y=2,z=1
// let [x,,y,,z]=arr //x=5,y=2,z=undefined

// let [p,...r]=arr //p=5 ,r =[8,2,1]

////////////////////////////////////////////////////////

let Employee = {fname:"Jimit",lname:"Jain",empid:101,salary:980000}

// let {fname,empid,salary} = Employee
// console.log(fname)
// console.log(Employee.lname)

// let {fname,empid:id,salary} = Employee
// console.log(id)

// let {empid:id,salary,...getFullName} = Employee  //getFullName ={fname:"Jimit",lname:"Jain"}


// let Student = Employee //reference 
// let Student = {...Employee,course:"ReactJS"} //spread - empty object and spread Employee properties
// Student.fname="Ram"
// console.log(Employee)
// console.log(Student)

let arr1 = [4,5,6]
let arr2 = [...arr1] //spread 