import React, { useState } from 'react'
import FormImage from '../../assets/images/register.png'
const FormValidations = () => {
    let [user,setUser] = useState({username:'',email:'',password:'',cpassword:''})
    let [errors,setErrors]=useState({usernamerr:'',emailerr:'',pwderr:'',cpwderr:''})

    const checkusername = ()=>{
        if(user.username==''){
            setErrors((prevErrors)=>({...prevErrors,usernamerr:"Username is required"}))
            return false }
        else {
            setErrors((prevErrors)=>({...prevErrors,usernamerr:""}))
         return true } }

    const checkemail = ()=>{
        let pattern = /^([\w\.\#\-]+)\@([\w]+)\.([a-zA-Z]{2,3})$/
        if(user.email==''){
            setErrors((prevErrors)=>({...prevErrors,emailerr:"email is required"}))
            return false  }
        else if(!pattern.test(user.email)){
            setErrors((prevErrors)=>({...prevErrors,emailerr:"Invalid Email"}))
            return false
        }
        else {
            setErrors((prevErrors)=>({...prevErrors,emailerr:""}))
         return true  }}

    const checkpwd = ()=>{
        if(user.password==''){
            setErrors((prevErrors)=>({...prevErrors,pwderr:"password is required"}))
            return false}
        else {
            setErrors((prevErrors)=>({...prevErrors,pwderr:""}))
            return true}}

    const checkcpwd = ()=>{
        if(user.cpassword=='' || user.cpassword !=user.password){
            setErrors((prevErrors)=>({...prevErrors,cpwderr:"password not match"}))
            return false}
        else {
            setErrors((prevErrors)=>({...prevErrors,cpwderr:""}))
            return true  }
    }

    const handleSubmit=(e)=>{
        let u = checkusername()
        let e1 = checkemail()
        let p = checkpwd()
        let cp = checkcpwd()
        if(u==false || e1==false || p==false || cp==false ){
            e.preventDefault()  
        }
        else {
            alert(JSON.stringify(user))
        }      
    }
  return (
    <div className='container mt-5'>
        <h1 className='msgsuccess'>Form Validations</h1>
        {/* <h1 className={cssmodule.msgerror}>form validations</h1> */}
        <div className="row">
            <div className="col-4">
                <img src={FormImage} className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="" className="form-label">Username</label>
                        <input type="text" name="username"  className="form-control" value={user.username}
                        onChange={(e)=>setUser({...user,username:e.target.value})} onBlur={checkusername}/>
                        {errors.usernamerr &&  <span className='text-danger'>{errors.usernamerr}</span>}   
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Email</label>
                        <input type="text" name="email"  className="form-control"  value={user.email}
                         onChange={(e)=>setUser({...user,email:e.target.value})} onBlur={checkemail}/>
                          {errors.emailerr &&  <span className='text-danger'>{errors.emailerr}</span>}   
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input type="password" name="password"  className="form-control"  value={user.password}
                       onChange={(e)=>setUser({...user,password:e.target.value})} onBlur={checkpwd} />
                        {errors.pwderr &&  <span className='text-danger'>{errors.pwderr}</span>}   
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Confirm Password</label>
                        <input type="password" name="cpassword"  className="form-control" value={user.cpassword}
                        onChange={(e)=>setUser({...user,cpassword:e.target.value})} onBlur={checkcpwd} />
                         {errors.cpwderr &&  <span className='text-danger'>{errors.cpwderr}</span>}   
                    </div>
                    <button type="submit" className="btn btn-primary" >  Submit  </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default FormValidations
