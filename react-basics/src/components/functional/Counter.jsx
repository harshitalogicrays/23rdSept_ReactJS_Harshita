import React, { useState } from 'react'
const Counter = () => {
    let [count,setCount]=useState('')
    let handleCount=()=>{
        // setCount(parseInt(count+1)) //''+1 => '1' , '1'+1='11'
        setCount((prevCount)=>parseInt(prevCount+1))}
  return ( <>
        <button type="button" class="btn btn-primary" onClick={handleCount}>Counter </button>
        <h1>{count}</h1>
    </>
  )
}

export default Counter
