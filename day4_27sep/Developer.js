import Employee from './Employee.js'

class Developer extends Employee{
    constructor(fn,ln,a,id,sal,pro,lang){
        super(fn,ln,a,id,sal)
        this.project = pro;this.lang = lang
    }
    display(){//function overriding
        console.log(super.display())
        return `Project =  ${this.project} and Language = ${this.lang}`
    }
}

let dev1 = new Developer("jimit","jain",30,1001,400000,"chat app","reactjs")
console.log(dev1.display())