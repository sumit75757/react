import React from 'react'
import './nav.css'
import { Link, NavLink, useNavigate } from "react-router-dom";


function Navbarr() {

  const naviget = useNavigate();
  function Logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    naviget("/singin")
  }
  {/* <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item ">
       
      </li>
      <li className="nav-item">
        
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */}
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarExample01"
          aria-controls="navbarExample01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarExample01">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/form">Form</NavLink>
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to="/chat">Chat</NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link" to="/redux">redux</NavLink>

            </li>
          </ul>
          <ul className="navbar-nav d-flex flex-row me-1">
            <li className="nav-item me-3 me-lg-0">
              <a className="nav-link" onClick={Logout}  ><i className="fa fa-sign-out"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}

export default Navbarr