let add = (a,b)=>a+b

export let fact = (n)=>{
    if(n==1) return 1
    else return n*fact(n-1)
}

export let str = "hello"

let mul = (a,b)=>a*b

export default add

// export {fact,str} //named export 