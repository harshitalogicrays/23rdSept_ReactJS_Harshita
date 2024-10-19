import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const funlinks = [
    {id:1,text:'First Fun',to:'/fun/first'},
    {id:2,text:'Props in Fun',to:'/fun/prop'},
    {id:3,text:'Event in Fun',to:'/fun/event'},
    {id:4,text:'state in Fun',to:'/fun/state'},
    {id:5,text:'Counter',to:'/fun/counter'},
    {id:6,text:'Form in Fun',to:'/fun/form'},
    {id:7,text:'Form Validations in Fun',to:'/fun/form/validation'},
    {id:8,text:'List rendering',to:'/fun/list'},
    {id:9,text:'List rendering (products)',to:'/fun/products'},
    {id:10,text:'Form Validations using RHF',to:'/fun/rhf/validation'},
    {id:11,text:"useCallback and useRef demo",to:'/fun/callback'},
    {id:12,text:"useMemo demo",to:'/fun/memo'},
    {id:13,text:"lifting the state up demo",to:'/fun/lifting'},
  ]

  return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className={({isActive})=>isActive?"nav-link bg-warning text-danger fw-bold":"nav-link"}  to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=>isActive?"nav-link bg-warning text-danger fw-bold":"nav-link"}  to="/about">About</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Functional components
          </a>
          <ul className="dropdown-menu">
            {funlinks.map((item,index)=>
            <React.Fragment key={index}>
              <li><NavLink className="dropdown-item" to={item.to} end>{item.text}</NavLink></li>
              {index != funlinks.length-1 &&
              <li><hr className="dropdown-divider"/></li> }
            </React.Fragment>
            )}
          </ul>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=>isActive?"nav-link bg-warning text-danger fw-bold":"nav-link"}  to="/class">Class Component</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className={({isActive})=>isActive?"nav-link bg-warning text-danger fw-bold":"nav-link"}  to="/customcomp">Custom Component</NavLink>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <div className="input-group">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit"><i className="bi bi-search"></i></button>
        </div>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Header
