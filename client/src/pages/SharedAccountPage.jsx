import React, { useState } from 'react'
import './SharedAccountPage.css';
import Login from '../components/Login';
import Register from '../components/Register';
import Transfer from '../components/Transfer';

const SharedAccountPage = () => {
    const [toggleBtns, setToggleBtns] = useState(false);

    const handleLoginToggle = (e) => {
        e.preventDefault();
        setToggleBtns(false);
    }

    const handleRegisterToggle = (e) => {
        e.preventDefault();
        setToggleBtns(true);
    }

  return (
    <div className='wrapper row mt-5'>
      <div className='share_div col-md'>
        <Transfer />
      </div>

      <div className='account_div col-md text-dark'>
        {/* <h1 className='text-center pt-5' style={{fontFamily: "Algerian", fontSize: "3rem",  letterSpacing: "0.1rem", color: 'white'}}>OJTransfer</h1> */}
        <div className='text-center'>
            <button style={{boxShadow: "1px 1px #888888", marginRight: "5px"}} className='btn btn-primary btn-lg' onClick={handleLoginToggle}>Sign in</button>
            <button style={{boxShadow: "1px 1px #888888"}} className='btn btn-secondary btn-lg' onClick={handleRegisterToggle }>Create Account</button>
        </div>

        <div className='p-3 auth'>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className='acct_auth mb-3'>
                    <h5 style={{color: 'white'}}><i className="bi bi-google text-dark"></i> Continue with Google </h5>
                </div>
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className='acct_auth mb-3 bg-default'>
                    <h5 style={{color: 'white'}}><i style={{color: 'black'}} className="bi bi-apple"></i>Continue with Apple </h5>
                </div>
            </div>
            
        </div>

        <div className='text-center'>
            <h3 style={{color: 'white'}}>Or</h3>
        </div>

        <div className='container justify-content-center'>
            {!toggleBtns ? <Login/> : <Register />}
        </div>
      </div>
    </div>
  )
}

export default SharedAccountPage
