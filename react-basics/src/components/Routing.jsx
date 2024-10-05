import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import Home from './Home'
import Firstclasscomp from './classcomp/Firstclasscomp'
import Firstfuncomp from './functional/Firstfuncomp'
import Form1 from './functional/Form1'
import About from './About'
import ListRendering from './functional/ListRendering'
import Propsdemoinfun from './functional/Propsdemoinfun'
import Statedemo from './functional/Statedemo'
import Counter from './functional/Counter'
import EventsDemo from './functional/EventsDemo'
import FormValidations from './functional/FormValidations'

const Routing = () => {
    // base url - ('/')=> localhost:2000
  return (
  <>
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}></Route>
            <Route path='about' element={<About/>}/>
            <Route path='class' element={<Firstclasscomp/>}/>
            <Route path='fun/first' element={<Firstfuncomp/>}/>
            <Route path='fun/list' element={<ListRendering/>}/>
            <Route path='fun/event' element={<EventsDemo/>}/>
            <Route path='fun/prop' element={<Propsdemoinfun/>}/>
            <Route path='fun/state' element={<Statedemo/>}/>
            <Route path='fun/counter' element={<Counter/>}/>
            <Route path='fun/form' element={<Form1/>}/>    
            <Route path='fun/form/validation' element={<FormValidations/>}/>    
        </Route>
    </Routes>
  </>
  )
}

export default Routing
