export default class Person{
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

// export default Person