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

    const options = {
        background: {
            color: "#0d47a1",
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
    }

    return (
        <div>
            <div className='wrapper row mt-5'>
                <div className='share_div col-md'>
                    <Transfer />
                </div>

                <div className='account_div col-md text-dark'>
                    {/* <h1 className='text-center pt-5' style={{fontFamily: "Algerian", fontSize: "3rem",  letterSpacing: "0.1rem", color: 'white'}}>OJTransfer</h1> */}
                    <div className='text-center'>
                        <button style={{ boxShadow: "1px 1px #888888", marginRight: "5px" }} className='btn btn-primary btn-lg' onClick={handleLoginToggle}>Sign in</button>
                        <button style={{ boxShadow: "1px 1px #888888" }} className='btn btn-secondary btn-lg' onClick={handleRegisterToggle}>Create Account</button>
                    </div>

                    <div className='p-3 auth'>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='acct_auth mb-3'>
                                <h5 style={{ color: 'white' }}><i className="bi bi-google text-dark"></i> Continue with Google </h5>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div className='acct_auth mb-3 bg-default'>
                                <h5 style={{ color: 'white' }}><i style={{ color: 'black' }} className="bi bi-apple"></i>Continue with Apple </h5>
                            </div>
                        </div>

                    </div>

                    <div className='text-center'>
                        <h3 style={{ color: 'white' }}>Or</h3>
                    </div>

                    <div className='container justify-content-center'>
                        {!toggleBtns ? <Login /> : <Register />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SharedAccountPage
