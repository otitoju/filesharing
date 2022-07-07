import React from 'react'
import './LandingPage.css';

export const LandingPage = () => {
  return (
    <div className='bg_color'>
        <div className='container p-5 mt-3'>
            <h1 className='heading-info text-center'>You've got what to share, we've got the platform.</h1>
            <div className='wrapper row pt-2'>
                <div className='col-md free'>
                    <h2 className='mt-3 mb-3'>Free</h2>
                    <hr className='container'/>
                    <div className='free-content'>
                        <h3>For regular file senders</h3>
                        <ul className='mt-3'>
                            <li>Send up to 2GB</li>
                            <li>No need to verify transfer</li>
                            <li>Just send your file</li>
                        </ul>
                        <div className='text-center mt-5'>
                            <button style={{ borderRadius: "30px", boxShadow: "1px 2px #888888"}} className='btn btn-light btn-lg'>Sign Up</button>
                        </div>
                    </div>
                </div>
                <div className='col-md pro'>
                    <h2 className='mt-3 mb-3'>Pro</h2>
                    <hr className='container'/>

                    <div className='free-content'>
                        <h3>For professional and Teams</h3>
                        <ul>
                            <li>Send and receive up to 500GB</li>
                            <li>1 TB Storage per person</li>
                            <li>Decide when transfer expires</li>
                        </ul>
                        <div className='text-center mt-5'>
                            <button style={{background: "#042646", color: "white", borderRadius: "30px", boxShadow: "1px 1px #888888"}} className='btn btn-light btn-lg'>Join OJTransfer Pro</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container  p-5'>
                <h4 style={{textDecoration: "underline", cursor: "pointer"}} className='text-center'>I just to send a file</h4>
            </div>
        </div>
    </div>
  )
}
