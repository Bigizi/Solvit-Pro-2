import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  return (
    <nav className='nav'>
        <div className='logo'>
            <img src="" alt="" />
        </div>
        <div className='links'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/mission">Mission</Link>
                    <Link to="/progress">Progress Report</Link>
                    <Link to="/map">Rwandan Map</Link>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation