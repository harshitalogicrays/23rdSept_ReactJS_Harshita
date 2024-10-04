import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from './Home'
import Firstclasscomp from './classcomp/Firstclasscomp'
import Firstfuncomp from './functional/Firstfuncomp'
import Form1 from './functional/Form1'

const Routing = () => {
    // base url - ('/')=> localhost:2000
  return (
  <>
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}></Route>
            <Route path='class' element={<Firstclasscomp/>}/>
            <Route path='funfirst' element={<Firstfuncomp/>}/>
            <Route path='form' element={<Form1/>}/>    
        </Route>
    </Routes>
  </>
  )
}

export default Routing
