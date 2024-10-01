import Per from "./Person.js";
class Employee extends Per{
    constructor(fn,ln,a,id,sal){
        super(fn,ln,a)
        this.empid = id;this.salary = sal
    }
    display(){//function overriding
        console.log(super.display())
        return `Empid =  ${this.empid} and salary = ${this.salary}`
    }
}

// let emp = new Employee("jimit","jain",30,1001,400000)
// console.log(emp.display())

export default Employee