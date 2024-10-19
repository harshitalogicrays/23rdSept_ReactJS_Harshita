//fname , lname,age
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

let p1 = new Person("jimit","jain",30) 
let p2 = new Person("ram","sharma",20) 
// this - points to the current object 

console.log(p1.fname)
p1.fname="Happy"
console.log(p1.fname)
