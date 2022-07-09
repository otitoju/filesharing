import React from 'react'
import { Link } from 'react-router-dom';
import TeamModal from './TeamModal';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark py-1 scrolling-navbar">
      <div className="container">
        <Link to='/' className="navbar-brand">OJTransfer</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#learn" className="nav-link">About Us</a>
            </li>
            <li className="nav-item">
              <a href="#questions" className="nav-link">Help</a>
            </li>
            <li className="nav-item">
              <a href="#instructors" className="nav-link" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Our Team</a>
            </li>
            <li className="nav-item">
              <Link to='/share' className="btn btn-success nav-link">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link to='/share' className="btn btn-info nav-link">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <TeamModal />
    </div>
  )
}

export default Navbar
