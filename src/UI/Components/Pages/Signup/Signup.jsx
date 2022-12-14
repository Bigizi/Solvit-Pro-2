import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import Vector from '../../Resources/Images/Vector.png';

export default function Signup() {
  return (
    <div className='container-3'>
        <Link to='/'><img src={Vector} alt="" id='Back'/></Link>
        <div className='app-wrapper'>
            <div>
            <h2 className='title-signup'>Fill The Following Form</h2>
            </div>
        
        <form className='form-wrapper'>
            
            <div className='name-1'>
                <input className='input-field' type='text' placeholder='Full Name'/>
            </div>
            <div className='field-1'>
                <input className='input-field' type='text' placeholder='National ID'/> 
            </div>
            <div className='field-2'>
                <input className='input-field' type='text' placeholder='Phone Number'/> 
            </div>
            <div className='field-3'>
                <input className='input-field' type='email' placeholder='Email'/> 
            </div>
            <div className='password'>
                <input className='input-field' type='password' placeholder='Password'/> 
            </div>
            <div className='password'>
                <input className='input-field' type='password' placeholder='Confirm Password'/> 
            </div>
            <div>
                <button className='submit1'>Register</button>
            </div><br/>
            <p className='paragraph2'>Already have account? <Link to='/login'>Login</Link></p>
        </form>
     </div>
    </div>
  )
}
