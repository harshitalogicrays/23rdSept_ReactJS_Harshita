class Person{
    constructor(fn,ln,age){
        this._fname = fn
        this.lname  = ln 
        this.age = age
    }
    get fname(){return this._fname.toUpperCase()}
    set fname(fn){this._fname=fn}

    display(){
        return `Name =  ${this.fname} ${this.lname} and age = ${this.age}`
    }
}


class Employee extends Person{
    constructor(fn,ln,a,id,sal){
        super(fn,ln,a)
        this.empid = id;this.salary = sal
    }
    display(){//function overriding
        console.log(super.display())
        return `Empid =  ${this.empid} and salary = ${this.salary}`
    }
}

let emp = new Employee("jimit","jain",30,1001,400000)
console.log(emp.display())