import React from 'react'

const ForwardRefDemo = React.forwardRef((props,ref) => {
  return (
    <div>
         <input type="text" className='form-control' ref={ref} />
         <button type="button" class="btn btn-primary" 
         onClick={()=>alert(ref.current.value)}
         >   
            Fetch Data
        </button>
    </div>
  )
})

export default ForwardRefDemo
