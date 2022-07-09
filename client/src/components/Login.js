import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-6">
            <div className="card bg-light text-dark">
              <div className="card-body ">
            
                <h3 className="card-title text-center">Sign In</h3>
                
                <div className="mb-3">
                    <label htmlFor="log-email" className="form-label text-left">Email address</label>
                    <input type="email" className="form-control" id="log-email" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="log-password" className="form-label text-left">Password</label>
                    <input type="password" className="form-control" id="log-password" />
                </div>

                <div className="mb-3 mt-3 text-center">
                    <button style={{borderRadius: "30px", boxShadow: "1px 1px #888888"}} className='btn btn-success btn-lg'>Sign in <i class="bi bi-box-arrow-in-right"></i></button>
                </div>

              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Login
