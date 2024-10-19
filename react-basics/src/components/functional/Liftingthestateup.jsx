import React, { useState } from 'react'
import Childrenforstateup from './Childrenforstateup'

const Liftingthestateup = () => {
    let [count,setCount]=useState('')
    let handleClick =(v)=>setCount(parseInt(count+v))
  return (
   <>
    <Childrenforstateup increase={handleClick}/>

    <h1>{count}</h1>
   </>
  )
}

export default Liftingthestateup
//increase is props name 
//increase is holding handleClick function definitation