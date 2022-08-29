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
                    <a href="#mission">Mission</a>
                    <a href="#mission">Progress Report</a>
                    <a href="#map">Rwanda map</a>
                    <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Register</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation