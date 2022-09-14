import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
return (
<nav className='nav'>

<div className='logo1'>
<h1 id="logo-app">The Source</h1>
<img src="" alt="" />
</div>
<div className='Tablinks'>
<ul className='list-nav'>
<li><Link to="/">Home</Link></li>
{/* <li><b href="#mission">Mission</b></li>
<li><b href="#cards_body_orgy">Progress Report</b></li>
<li><b href="#map">Rwanda map</b></li> */}
<li><Link to="/login">Login</Link></li>
<li><Link to="/signup" id="registration">Register</Link></li>
</ul>
</div>
</nav>
)
}

export default Navigation
