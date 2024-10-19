import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import { MyBtn, Textbox } from '../../styledcomp'

const UseMemoHook = () => {
    let [count,setCount]=useState(0)
    let [show,setShow]=useState(false)

    let handleCount = ()=>setCount(count+1)
    let calculation = (count)=>{
        console.log("calculation called")
        for(let i=1;i<=1000000000;i++){} //expensive calculation
        return count
    }
    // let data =calculation(count) 
    let data =useMemo(()=>{return calculation(count)},[count])
    return (
  <>
    <Button onClick={handleCount}>Counter</Button>
    <h1>{data}</h1>
    <MyBtn onClick={()=>setShow(!show)}>{show? "Show":"Hide"}</MyBtn>
    <Textbox type="password"/>
  </>
  )
}

export default UseMemoHook
