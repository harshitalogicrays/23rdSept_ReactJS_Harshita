import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const redirect = useNavigate()
  const [user,setUser]=useState({email:'',password:''})
  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!user.email || !user.password){toast.error("Please fill fields");return }
    try{
      const res  = await fetch(`https://67331a7f2a1b1a4ae1120b27.mockapi.io/users?email=${user.email}`)
      const data = await res.json()
     if(data.length==0){toast.error("Invalid credentials")}
     else if(data[0].password == user.password){
      let obj = {isLoggedIn:true,username:data[0].username,email:data[0].email}
       sessionStorage.setItem("23rdsept",JSON.stringify(obj))
        toast.success("loggedIn Successfully")
        redirect('/')
     }
     else toast.error("Invalid credentials")
    }
    catch(err){toast.error(err.message)}
  }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-3 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Sign in with your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form method="POST" className="space-y-2" onSubmit={handleSubmit}>

      <div>
          <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input name="email" type="text"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input name="password" type="password"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
              value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}
            />
          </div>
        </div>
            <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
