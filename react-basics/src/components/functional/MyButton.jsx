import React from 'react'

const MyButton = ({attribute="button",variant="primary",
onClick,action,isDisabled=false,children=attribute,
...props
}) => { //props={style:{}} //rest parameter
    // console.log(props)
  return ( <>
  {props.value1 ?  
  <input 
  type={attribute}
  className={`btn btn-${variant} ${props.className}`}
  onClick={onClick}
  onDoubleClick={action}
  disabled={isDisabled}
  value={props.value1 ? props.value1 : attribute} 
  style={props.style}
  />
:
<button 
    type={attribute}
    className={`btn btn-${variant}  ${props.className}`}
    onClick={onClick}
    onDoubleClick={action}
    disabled={isDisabled}
    style={props.style}
    >
    {children}
    </button>
}    
  </>
  )
}

export default MyButton
