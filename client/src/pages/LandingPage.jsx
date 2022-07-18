import React from 'react'
import './LandingPage.css';
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div className='bg_color mt-5'>
        <div className='container p-5 mt-3'>
            <h1 className='heading-info text-center'>You've got what to share, we've got the platform.</h1>
            <p className='d-flex justify-content-center text-align-center text-center'>Whether you're sending large files or small files for fun, delivering work for clients-keep creative projects moving around the world with OJTransfer.</p>
            <div className='wrapper row pt-2'>
                {/* Free package */}
                <div className='col-md free'>
                    <Link to="/share" className='nav-link'>
                    <h2 className='mt-3 mb-3'>Free</h2>
                    <hr className='container'/>
                    <div className='free-content'>
                        <h3>For regular file senders</h3>
                        <ul className='mt-3'>
                            <li>Send up to 2GB</li>
                            <li>No need to verify transfer</li>
                            <li>Just send your file</li>
                        </ul>
                        <div className='mt-5'>
                        <h1>$0<sub>/month</sub></h1>
                            <p className=''>no money, no issue we've got you</p>
                        </div>
                    </div>
                    </Link>
                </div>
                {/* Professional package */}
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
                        <div className='mt-5'>
                        <h1>$10<sub>/month</sub></h1>
                            <p className=''>per person, billed yearly</p>
                        </div>
                    </div>
                </div>
                {/* Premium package */}
                <div className='col-md premium'>
                    <h2 className='mt-3 mb-3'>Premium</h2>
                    <hr className='container'/>

                    <div className='free-content'>
                        <h3>Share work with no limits</h3>
                        <ul>
                            <li>Enjoy unlimited transfers</li>
                            <li>Unlimited storage</li>
                            <li>Unlimited portals and review</li>
                        </ul>
                        <div className='mt-5'>
                            <h1>$19<sub>/month</sub></h1>
                            <p className=''>per person, billed yearly</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='container  p-5'>
                <h4 style={{textDecoration: "underline", cursor: "pointer"}} className='text-center'>I just want to send a file</h4>
            </div> */}
        </div>
    </div>
  )
}
