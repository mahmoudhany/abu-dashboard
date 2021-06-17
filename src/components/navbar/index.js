import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">
          <img src='https://abuerdan.com/wp-content/uploads/2018/04/ABELogo.png' width="100" height="40" className="d-inline-block align-top" alt="" />
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link"
                to="/notifications">Notifications</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/messages">Messages</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
