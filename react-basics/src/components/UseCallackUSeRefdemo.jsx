import React, { useCallback, useEffect, useState } from 'react'
import { Button, Col, Form, Image, InputGroup, Row } from 'react-bootstrap'
import Container  from 'react-bootstrap/Container'
import Image1 from '../assets/images/login.jpg'

const UseCallackUSeRefdemo = () => {
    const [value,setValue]=useState('')
    const [length,setLength]=useState(8)
    const [numAllowed,setNumAllowed]=useState(false)
    const [charAllowed,setCharAllowed]=useState(false)
    const selectRef = React.useRef()

    // const randomGenerator = ()=>{
    //     let str ='abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ' //52
    //     if(numAllowed){str+='0987654321'}
    //     if(charAllowed){str+='!@#$%^&*()-_+=./'}
    //     let data=''
    //     for(let i=1;i<=length;i++){
    //         data += str.charAt(Math.floor(Math.random()*str.length)) // 0 to 51 => 19 (index)=>str.charAt(19) //a=a+1
    //     }
    //     setValue(data)}

const randomGenerator =  useCallback( ()=>{//cache 
    let str ='abcdefghijklmnopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWXYZ' 
    if(numAllowed){str+='0987654321'}
    if(charAllowed){str+='!@#$%^&*()-_+=./'}
    let data=''
    for(let i=1;i<=length;i++){
        data += str.charAt(Math.floor(Math.random()*str.length)) 
    }
    setValue(data)
},[length,numAllowed,charAllowed])

    useEffect(()=>{randomGenerator()
    },[length,numAllowed,charAllowed])

    useEffect(()=>{ selectRef.current.focus()
        selectRef.current.style.color='brown'
     },[])

    const handleCopy=()=>{
        window.navigator.clipboard.writeText(value)
        // document.getElementById('select').select()
        // document.getElementById('select').style.fontSize='20px'

        selectRef.current.select()
        selectRef.current.style.fontSize='20px'
        // alert(selectRef.current.value)
    }
   
  return (
    <Container>
        <h1>useCallback and useRef Demo</h1>
        <Row>
            <Col xs={4}><Image src={Image1} fluid roundedCircle /></Col>
            <Col xs={{ span: 5, offset: 1}}>
            <InputGroup>
                <Form.Control value={value} ref={selectRef} id="select"></Form.Control>
                <Button onClick={handleCopy}>Copy</Button>
            </InputGroup>
            <Row>
                <Col><input type="range" min={5} max={100} value={length} onChange={(e)=>setLength(e.target.value)} /> </Col>
                <Col>Length: ({length})</Col>
                <Col><Form.Check type="checkbox" inline onChange={(e)=>setNumAllowed(!numAllowed)}/> Numbers</Col>

                <Col><Form.Check type="checkbox" inline onChange={(e)=>setCharAllowed(!charAllowed)}/> Special </Col>
            </Row>
            
            </Col>
        </Row>
    </Container>
  )
}

export default UseCallackUSeRefdemo
