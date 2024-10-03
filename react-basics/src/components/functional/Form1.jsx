import React from 'react'
import FormImage from '../../assets/images/register.png'
const Form1 = () => {
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className="col-4">
                <img src={FormImage} className='img-fluid'/>
            </div>
            <div className="col">
                <form>
                    <div className="mb-3">
                        <label for="" className="form-label">Username</label>
                        <input type="text" name="username"  className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Email</label>
                        <input type="text" name="email"  className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input type="password" name="password"  className="form-control"  />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Confirm Password</label>
                        <input type="password" name="cpassword"  className="form-control"  />
                    </div>
                    <button type="submit" className="btn btn-primary" >  Submit  </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form1
