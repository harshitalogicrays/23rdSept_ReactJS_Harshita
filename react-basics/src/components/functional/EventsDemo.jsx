import React from 'react'

const EventsDemo = () => {
    const handleClick=()=>{
        alert("handleclick called")
    }
const handleAdd=(a,b)=>alert(a+b)
  return (
   <>
        <button  type="button" class="btn btn-primary me-2" 
        onClick={()=>{
            alert("button clicked");
            handleClick()
        }
        }>Click  Me</button>

        <button  type="button" class="btn btn-primary me-2" 
        onClick={handleClick}>Click  Me</button>

        <button  type="button" class="btn btn-primary me-2" 
        onClick={()=>handleClick()}>Click  Me</button>

        <button  type="button" class="btn btn-primary me-2" 
        onClick={()=>handleAdd(2,3)}>Add</button>
   </>
  )
}

export default EventsDemo
