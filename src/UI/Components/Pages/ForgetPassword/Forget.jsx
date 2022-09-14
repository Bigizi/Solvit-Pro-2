import React, { useState } from 'react'
import './Forget.css'
import Vector from '../../Resources/Images/Vector.png';
import Tick from '../../Resources/Images/tick.png';
import { Link } from 'react-router-dom'


function Forget() {

    let [popUpVisible, setPopUpVisible] = useState(false);

    function openPopup(){
        setPopUpVisible(true);
    }

    function closePopup(){
        setPopUpVisible(false);
    }
    function _resetFunction(evt){
        evt.preventDefault();
        openPopup();
    }

  return (
    <div>
        <div className='container-3'>
        <Link to='/'><img src={Vector} alt="" id='Back'/></Link>
            <div className={`popup ${popUpVisible === true ? "open-popup" : ""}`} id='popup'>
                <img src={Tick} alt="" id='img'/>
                <h2>Thank You!</h2><br/>
                <p>Your password has been reset successfully.</p>
                <Link to='/login'><button type='button' onClick={closePopup} id='btn-login'>Login Now </button></Link>
            </div>
            <div className='app-wrapper-2'>
                <form className='form-wrapper' onSubmit={_resetFunction}>
                    <div>
                    <h2 className='title1'>Reset Password</h2>
                    </div>
                    <div className='password'>
                    <input className='input-field' type='password' placeholder='Enter New Password'/>
                    </div>
                    <div className='password'>
                    <input className='input-field' type='password' placeholder='Confirm Password'/>
                    </div><br/>
                    <div>
                    <button className='submit1' onClick={openPopup}>Reset</button>
                    </div>
                </form> 
            </div>
        </div>
            
    </div>
  )
}

export default Forget