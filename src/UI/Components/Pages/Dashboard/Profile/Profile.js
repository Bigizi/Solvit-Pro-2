import React from 'react'
import './Profile.css'
// import profile from '../../../../Resources/Images/profi.png'
import Profile1 from '../../../Resources/Icons/profil.png'

function Profile() {

  return (
  
    <div className="container-profile">
        
   <div className="profile">
   <div className="img"><img src={Profile1} alt="" /> </div>
   <div className="titles"><h id='hh' >Profile</h>
    <h id='hhh' >Update your photo and personal details</h>
    <div className='profileBtn'>
      <label className='labelprofile' for="upload_input">
        Upload
      </label>
    <button type='reset' id='remove'>Remove</button> 
    <input id="upload_input" className='name' type="file" name="name" placeholder=' '/>
    </div> 
    </div>
    </div>
     
        
        <form className='main-form'>
        
        
        <div className="left2">
        
        <h11 >Full Name </h11>
        <h11>National Id:</h11>
        <h11>Phone Number</h11>
        <h11>Your Address</h11><br/><br/>
        <div className="labels"><h11>Bio</h11><br/>
        <h11>Job Title</h11>
        <h11>Email</h11></div>

        </div>

        <div className="right2">

        <div className="input1"><input className='name' type="text" id="name" name="name" placeholder=' '/>
        <input className='name' type="text" id="id" name="id" placeholder=''/>
        <input className='name' type="text" id="phone" name="phone" placeholder=''/>
        </div>

        <div className="address">
        <div className='address1'><input type="text" id="province" name="province" placeholder='Province'/>
        <input type="text" id="sector" name="sector" placeholder='Sector'/></div>
        
        <div className='address2'><input type="text" id="district" name="district" placeholder='District'/>
        <input type="text" id="cell" name="cell" placeholder='Cell'/></div>
        </div>

        <textarea className='Bio' id="w3review" name="w3review" rows="4" cols="50" placeholder='Type Your Bio'/>
        {/* <input className='Bio' type="text a" id="Bio" name="Bio" />  */}

        <div className="input1"><input className='name' type="text" id="name" name="name" placeholder=' '/>
        <input className='name' type="text" id="id" name="id" placeholder=''/>
        </div>
          
        
                <button id='buttonnn'>Save changes</button>

               
        </div>
        </form>
</div>

  )
}

export default Profile
