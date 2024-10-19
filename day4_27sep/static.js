export default class Person{
    static count=0
    constructor(fn,ln,age){
        this._fname = fn
        this.lname  = ln 
        this.age = age
        Person.count++
    }
    display(){
        return `Name =  ${this.fname} ${this.lname} and age = ${this.age}`
    }
    static getCount(){
        console.log(Person.count)
    }
}

Person.getCount()
let p1=new Person("ede","Ert",22)
let p2=new Person("nn","mm",32)
let p3=new Person("bb","nn",98)
Person.getCount()
