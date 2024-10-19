import React, { useState } from 'react'
import FormImage from '../../assets/images/register.png'
const Form1 = () => {
    let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})

    const handleChange = (e)=>{
        console.log(e) //user = {username:'',email:'',password:'',cpassword:''}
        setUser({...user,[e.target.name]:e.target.value}) //user = {username:'ww',email:'aa',password:'',cpassword:''}
    }

    const handleSubmit=(e)=>{
        e.preventDefault() // prevent from by default nature of form submission 
        alert(JSON.stringify(user))
        
    }
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-4">
                <img src={FormImage} className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="" className="form-label">Username</label>
                        <input type="text" name="username"  className="form-control" value={user.username}
                        onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Email</label>
                        <input type="text" name="email"  className="form-control"  value={user.email}
                        onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input type="password" name="password"  className="form-control"  value={user.password}
                        onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Confirm Password</label>
                        <input type="password" name="cpassword"  className="form-control" value={user.cpassword}
                        onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary" >  Submit  </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form1
