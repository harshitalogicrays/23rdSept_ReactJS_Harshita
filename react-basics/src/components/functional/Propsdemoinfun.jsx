/*import React from 'react'

const Propsdemoinfun = (props) => {
    // console.log(props)
    // props.username = "Ram" //Cannot assign to read only property 'username' 
  return (
    <>
        <h1>Username : {props.username}</h1>
        {props.address}
        <br/>
        {props.isActive ? <h2>User is Active</h2> : "User is not active"}
        <hr/>
        {props.isActive ? <h2>User is Active</h2> : ""}
        <hr/>
        {props.isActive && <h2>User is Active</h2> }
    </>  
    )
} 
export default Propsdemoinfun    
*/



 import React from 'react'
import EventsDemo from './EventsDemo'
 
 const Propsdemoinfun = ({username="Happy",address,isActive,children}) => {
   return (
     <>
      <h1 className='text-danger'>Username : {username}</h1>
      {address}
      {isActive && <h2>User is Active</h2> }
      <hr/>
      {/* {children} */}
      {/* {children[2]} */}
      <EventsDemo/>
     </>
   )
 }
 
 export default Propsdemoinfun
    


