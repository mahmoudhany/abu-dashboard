import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import ABELogo from '../../assets/ABELogo.png'
import './navbar.scss'

export default function Navbar() {
  const [showNav, setShowNav] = useState(false)
  const location = useLocation()
  return (
    <nav className={`navbar navbar-collapse navbar-expand-lg navbar-light bg-light sticky-top`}>
      <div className="container">
        <div className="right">
          <Link to='/' className="navbar-brand"
            onClick={() => setShowNav(false)}
          >
            <img src={ABELogo} width="100" height="40" className="d-inline-block align-top" alt="" />
          </Link>

        </div>
        <div className='navbar_title'>{
          location.pathname === '/' ? 'Dashboard' : location.pathname.slice(1)
        }</div>
        <button
          className={`navbar-toggler ${showNav ? '' : 'collapsed'}`}
          type="button"
          onClick={() => setShowNav(prev => !prev)}
        >
          <FaBars />
        </button>

        <div className={`navbar-collapse collapse text-center  ${showNav ? 'show' : 'hide'}`}>
          <ul className="navbar-nav">
            <li className="nav-item active" >
              <Link className="nav-link"
                onClick={() => setShowNav(false)}
                to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"
                onClick={() => setShowNav(false)}
                to="/messages">Messages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link"
                onClick={() => setShowNav(false)}
                to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
