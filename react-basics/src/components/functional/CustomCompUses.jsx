import React from 'react'
import MyButton from './MyButton'

const CustomCompUses = () => {
  return (
  <>
    <MyButton 
    attribute="reset"
    variant="danger" className="me-2"
    onClick={()=>alert("button clicked")}
    isDisabled={true}
    ></MyButton>

    <MyButton 
     action={()=>alert("dbl clicked")} className="me-2"
    attribute="submit"
    style={{fontSize:'30px'}}
    >Click Me</MyButton>


    <MyButton 
        attribute="button"
        variant="info"
        className="me-2"
        onClick={()=>alert("button clicked")}
        style={{fontSize:'30px'}}
        value1="Submit"
    ></MyButton>

    <MyButton  attribute="button"  variant="danger"
    ></MyButton>
  </>
  )
}

export default CustomCompUses
