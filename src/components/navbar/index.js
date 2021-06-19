import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import ABELogo from '../../assets/ABELogo.png'
import './navbar.scss'

export default function Navbar() {
  const location = useLocation()
  console.log(location.pathname);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container">
        <div className="right">
          <Link to='/' className="navbar-brand">
            <img src={ABELogo} width="100" height="40" className="d-inline-block align-top" alt="" />
          </Link>

        </div>
        <div className='navbar_title'>{
          location.pathname === '/' ? 'Dashboard' : location.pathname.slice(1)
        }</div>
        <button className="navbar-toggler"
          type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars />
          {/* <span className="navbar-toggler-icon"></span> */}
        </button>

        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link"
                to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messages">Messages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
