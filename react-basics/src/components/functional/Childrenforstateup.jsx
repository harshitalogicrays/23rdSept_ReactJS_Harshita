import React from 'react'
import { Button } from 'react-bootstrap'

const Childrenforstateup = ({increase}) => {
  return (
    <>
    <Button className='me-2' onClick={()=>increase(1)}>Increase by 1 </Button>

    <Button onClick={()=>increase(5)}>Increase by 5 </Button>
    </>
  )
}

export default Childrenforstateup
