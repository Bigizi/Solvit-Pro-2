import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import Vector from '../../Resources/Images/Vector.png';

function Login() {
  return (
    <div>
      <div className='container-3'>
       <Link to='/'><p><img src={Vector} alt="" id='Back'/></p></Link>
        <div className='app-wrapper-2'>
            
        <form className='form-wrapper'>
            <div>
            <h2 className='title1'>Login</h2>
            </div>
            
            <div className='name-1'>
                {/* <label className='label'>Full Name</label> */}
                <input className='input-field' type='text' placeholder='Username/Email/Phone Number'/>
            </div>
            <div className='email'>
                {/* <label className='label'>National ID</label> */}
                <input className='input-field' type='password' placeholder='Password'/> 
            </div>
            <div>
               <Link to='/dash'><button className='submit1'>Login</button></Link> 
            </div><br/><br/>
            <p className='paragraph'>Don't have account? <Link to='/signup'>Signup</Link></p><br/>
            <p className='paragraph'>Forget Password? <Link to='/forget'>Reset</Link></p>
        </form>
          </div>
        </div>
    </div>
  )
}

export default Login