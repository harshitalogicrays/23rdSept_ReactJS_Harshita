import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ClassLayout = () => {
    let classLinks= [
        {id:1,text:"First Class Comp", path:'/class'},
        {id:2,text:'props demo',path:'/class/props'},
        {id:3,text:"state and event demo",path:"/class/stateevent"},
        {id:4,text:"Form",path:'/class/form'},
        {id:5,text:"ref",path:'/class/ref'},
        {id:6,text:"pure comp",path:'/class/pure'},
        {id:7,text:"comp life cycle ",path:'/class/lifecycle'},
    ]
  return (
    <div className='row'>
        <div className="col-2">
        <nav class="nav flex-column">
            {classLinks.map((link)=><React.Fragment key={link.id}>
                <NavLink  className={({isActive})=>isActive?"nav-link bg-warning text-danger fw-bold":"nav-link"} end to={link.path}>{link.text}</NavLink>
                <hr/>
            </React.Fragment>)}
       
        </nav>
        </div>
        <div className="col"> <Outlet/></div>
    
    </div>
  )
}

export default ClassLayout
