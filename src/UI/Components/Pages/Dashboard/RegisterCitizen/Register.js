import React from 'react'
import './Register.css'

function Register() {
  return (
    <div className='form-register'>
        
        <h1>New Citizen Registration Form</h1>
        <form className='form-content'>
        

                <div className='leftside'>
                    <label>Full Name:</label>
                    <label>National ID:</label>
                    <label>Phone Number:</label>
                    <label>Gender:</label>
                    <label>Male</label>
                    <label>Female</label>
                    <label>Your Address:</label>
                    <label>Meter Number:</label>
                    <label>House Number:</label>
                    <buttonn>Register</buttonn>
                </div>

            <div className='rightside'>
                <input type='text' />                
                <input type='number' />
                <input type='text' />           
                <div className='radiobtn'><input type='radio' value='Male'/>
                <input type='radio' value='Female'/></div>
                <input type='text' /> 
                <input type='text' /> 
                <input type='number' />
                <input type='text' />

            </div>
        </form>
    </div>
  )
}

export default Register