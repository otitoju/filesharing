import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-6">
            <div className="card bg-light text-dark">
              <div className="card-body ">
            
                <h3 className="card-title text-center">Register here</h3>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label text-left">Your name*</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-left">Email address*</label>
                    <input type="email" className="form-control" id="email" />
                </div>
                
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-left">Password*</label>
                    <input type="password" className="form-control" id="password" />
                </div>

                <div className="mb-3 mt-3 text-center">
                    <button style={{borderRadius: "30px", boxShadow: "1px 1px #888888"}} className='btn btn-success btn-lg'>Register <i class="bi bi-person-plus-fill"></i></button>
                </div>

              </div>
            </div>
          </div>
          </div>
    </div>
  )
}

export default Register
