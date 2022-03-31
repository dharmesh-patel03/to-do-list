import React from 'react'
import { NavLink } from 'react-router-dom';
import { orange } from '@mui/material/colors';
import "../style/navbar.css"


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: orange[500]}}>
        <div className="container-fluid">
            <NavLink className="navbar-brand h1" to="/">Logo</NavLink>
          <button className="navbar-toggler me-2 border border-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <div className='bg-dark menu'></div>
            <div className='bg-dark menu'></div>
            <div className='bg-dark menu'></div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/todolist">To Do List</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar