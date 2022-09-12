import React from 'react'
import './Profile.css'
import Profil from '../../../Resources/Icons/profil.png'
export default function Profile() {
  return (
    <div className='container-2'>
        <div className='sub-container-2'>
            <div className='header'>
                <h>Profile</h>
            </div>
            <form className='form'>
                <div className='header-profile'>
                    <div>
                    <img src={Profil} alt='' id='photo'/>
                    </div>
                    <div>
                    <h1 id='pro'>Profile</h1>
                    <p id='para'>Update your photo and personal details</p>
                    <input type="file" id='in-put'/> 
                    <button type='reset' id='btn-header'>remove</button>
                    </div>
                </div>
                <div className='content'>
                    <h2>Personal Information</h2><br/>
                    <label>Full Name: </label>
                    <input type='text' /><br/><br/>
                    <label>National Id:  </label>
                    <input type='text' /><br/><br/>
                    <label>Phone Number: </label>
                    <input type='text' /><br/><br/>
                    <label>Your Address: </label>
                    <input type='text' placeholder='kigali city'/>
                    <input type='text' placeholder='kicukiro'/>
                    <input type='text' placeholder='Niboyi'/>
                    <input type='text' placeholder='Nyakabanda'/>
                    <label>Email: </label>
                    <input type='email' /><br/><br/>
                    <button>Save changes</button>
                </div>
            </form>
        </div>
    </div>
  )
}
