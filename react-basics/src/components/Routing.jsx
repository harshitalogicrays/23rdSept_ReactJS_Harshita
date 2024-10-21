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
import Products from './functional/Products'
import Reacthookformdemo from './functional/Reacthookformdemo'
import UseCallackUSeRefdemo from './UseCallackUSeRefdemo'
import UseMemoHook from './functional/UseMemoHook'
import Liftingthestateup from './functional/Liftingthestateup'
import CustomCompUses from './functional/CustomCompUses'
import ClassLayout from './classcomp/ClassLayout'
import Propsinclass from './classcomp/Propsinclass'
import StateandEventinclass from './classcomp/StateandEventinclass'
import ClassForm from './classcomp/ClassForm'
import Refdemoinclass from './classcomp/Refdemoinclass'
import PureCompDemo from './classcomp/PureCompDemo'
import LifeCycleMethods from './classcomp/LifeCycleMethods'

const Routing = () => {
    // base url - ('/')=> localhost:2000
  return (
  <>
    <Routes>
        <Route path='/' element={<App/>}>
            <Route path='' element={<Home/>}></Route>
            <Route path='about' element={<About/>}/>
            <Route path='fun/first' element={<Firstfuncomp/>}/>
            <Route path='fun/list' element={<ListRendering/>}/>
            <Route path='fun/event' element={<EventsDemo/>}/>
            <Route path='fun/prop' element={<Propsdemoinfun/>}/>
            <Route path='fun/state' element={<Statedemo/>}/>
            <Route path='fun/counter' element={<Counter/>}/>
            <Route path='fun/form' element={<Form1/>}/>    
            <Route path='fun/form/validation' element={<FormValidations/>}/> 
            <Route path='fun/rhf/validation' element={<Reacthookformdemo/>}/> 
            <Route path='/fun/products' element={<Products/>}/>   
            <Route path='/fun/callback' element={<UseCallackUSeRefdemo/>}/> 
            <Route path='/fun/memo' element={<UseMemoHook/>}/>  
            <Route path='/fun/lifting' element={<Liftingthestateup/>}/>
            <Route path='customcomp' element={<CustomCompUses/>}/>

            <Route path='class' element={<ClassLayout/>}>
                   <Route path='' element={<Firstclasscomp/>}/>
                  <Route path='props' element={<Propsinclass username="Ram"><h1>Children of props demo in class</h1></Propsinclass>}/>
                  <Route path='stateevent' element={<StateandEventinclass/>}/>
                  <Route path='form' element={<ClassForm/>}/>
                  <Route path='ref' element={<Refdemoinclass/>}/>
                  <Route path='pure' element={<PureCompDemo/>}/>
                  <Route path='lifecycle' element={<LifeCycleMethods/>}/>
            </Route>
        </Route>
    </Routes>
  </>
  )
}

//App====> Outlet (class - ClassLayout) ==> Outlet
export default Routing
