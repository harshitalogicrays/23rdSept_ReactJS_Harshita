import React, { useState } from 'react'

const Statedemo = () => {
    let [num1] = useState(2)
    let [num2]=useState(3)
    let [result,setResult]=React.useState('') //"" , [] , {} etc.
    // const handleAdd=(a,b)=>{
    //     setResult(a+b)  //result = a+b
    //     console.log(result)
    // }
    const handleAdd=()=>{ setResult(num1+num2)  }
  return (
  <>
     {/* <button  type="button" className="btn btn-primary me-2" 
        onClick={()=>handleAdd(2,3)}>Add</button> */}
            <button  type="button" className="btn btn-primary me-2" 
        onClick={handleAdd}>Add</button>
        <h1>{result}</h1>
  </>
  )
}

export default Statedemo
