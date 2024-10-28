import React, { useContext } from 'react'
import { con } from './ContextDemo'

const Home = () => {
  const data = useContext(con)
  console.log(data)
  return (
    <div>
      <h1>Home Page</h1>
      <h1>{data.name}</h1>
      <button
        type="button"
        class="btn btn-primary"
        onClick={()=>data.changeName("Meera")}
      >
        Change
      </button>
      
    </div>
  )
}

export default Home
