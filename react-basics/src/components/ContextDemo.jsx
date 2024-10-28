import React, { useState } from 'react'
export const con  = React.createContext()
const ContextDemo = ({children}) => {
    const [name,setName] =useState("Ram")
    const changeName=(val)=>setName(val)
  return (
    <con.Provider value={{name,changeName}}>
        {children}
    </con.Provider>
  )
}
export default ContextDemo
