import React from 'react'
import FormImage from '../../assets/images/register.png'
import { useForm } from 'react-hook-form'
const Reacthookformdemo = () => {
    const {register,handleSubmit,getValues,formState: { errors },trigger} = useForm()
          {/* register your input into the hook by invoking the "register" function */}
    
    const registerUser=(data)=>{ // alert(JSON.stringify(data))
        alert(JSON.stringify(getValues())) }

    const styles = {color:'blue',backgroundColor:"wheat",textAlign:'center'}
  return ( <div className='container mt-5'>
        <h1 style={styles}>React hook form (rhf) demo</h1>
        <div className="row">
            <div className="col-4">
                <img src={FormImage} className='img-fluid'/>
            </div>
            <div className="col">
                <form onSubmit={handleSubmit(registerUser)}>
                    <div className="mb-3">
                        <label for="" className="form-label">Username</label>
                        <input type="text" name="username"  className="form-control" {...register('username', {required:"Username is required",
                         minLength:{value:5,message:"min 5 char"}})} 
                         onBlur={()=>trigger('username')}/>
                        {errors.username && <span className='text-danger'>{errors.username.message}</span>}
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Email</label>
                        <input type="text" name="email"  className="form-control" {...register('email',{
                            required:"email is required",pattern:{value:/^([\w\.\#\-]+)\@([\w]+)\.([a-zA-Z]{2,3})$/,message:"Invalid email"}
                        })}  onBlur={()=>trigger('email')}/>
                          {errors.email && <span className='text-danger'>{errors.email.message}</span>} </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input type="password" name="password"  className="form-control"  {...register('password',{required:"password is required"})} onBlur={()=>trigger('password')}/>
                        {errors.password && <span className='text-danger'>{errors.password.message}</span>}  </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Confirm Password</label>
                        <input type="password" name="cpassword"  className="form-control" {...register('cpassword',{
                            required:"cpassword is required" , validate:(cpwd)=>{  let {password} = getValues() 
                                return password==cpwd || "password not same"  }
                        })} onBlur={()=>trigger('cpassword')}/>
                         {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary" >  Submit  </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Reacthookformdemo
