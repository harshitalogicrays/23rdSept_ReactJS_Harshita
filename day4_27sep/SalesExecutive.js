import Employee from './Employee.js'

class Sales extends Employee{
    constructor(fn,ln,a,id,sal,target){
        super(fn,ln,a,id,sal)
        this.target = target
    }
}

let sal1 = new Sales("jimit","jain",30,1001,400000,100)
console.log(sal1.display())