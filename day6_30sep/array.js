let arr = [3,45,76,8,0,2,4,5,6,8]

// for(let i=0;i<arr.lengthi++){console.log(arr[i])}

// for(let a of arr){console.log(a)}

// arr.forEach((val,i)=>console.log(`index-${i} and value=${val}`))
// let arr1 = arr.map((item,index)=>{return item+5}) // transform array values 
// let arr1 = arr.map(item=>Math.sqrt(item))
// let arr1 = arr.map(item=>item+2)

// let arr1 = arr.filter(item=>item>5) //filter array 
// console.log(arr)
// console.log(arr1)

// console.log(arr.find(val=>val==31)) // if available return value otherwise undefined
// console.log(arr.findIndex(val=>val==31)) //if available return index of value otherwise -1 

let total = arr.reduce((prev,next)=>{return prev+next},0)
console.log(total)
//3,45,76,8,0,2,4,5,6,8
// prev = 0 , next = 3 = 3
// prev= 3 , next = 45 = 48
// prev=48 , next = 76 = 124
// prev=124, next=8 = 132
// prev=132 , next =2 = 134
// prev=134 ,next=4 = 138 
// prev=138,next=5  = 143
// prev= 143 , next=6 =149
// prev=149 ,next=8 = 157
