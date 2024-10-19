import React, { useState } from 'react'
import Image1 from '../../assets/images/a.jpg'
const Addition = () => {
    let [num1,setNum1]=useState(2)
    let [num2,setNum2] = useState(3)
    let [total,setTotal]=useState('')
    let handleAdd=()=>{ setTotal(parseInt(num1)+parseInt(num2))}
    let handleNum1=(e)=>{
        console.log(e)
        setNum1(e.target.value)
    }
    let handleNum2=(e)=>{ setNum2(e.target.value)}
  return (
    <div className='container mt-5 col-6'>
        <div className="row">
            <div className="col-4">
            <img src={Image1} className='img-fluid'></img>
            </div>
            <div className="col">
            <div className="mb-3">
            <label htmlFor="" className="form-label">Num1</label>
            <input type="text" name="num1" className="form-control" value={num1} 
            onChange={handleNum1}/>
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Num2</label>
            <input type="text" name="num2" className="form-control" value={num2}
            onChange={handleNum2}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAdd}>Add</button>
        <br/>
        <h1>{total}</h1>
            </div>
        </div>
     
    </div>
  )
}

export default Addition
