import React from 'react'
import './Footer.css'
import un from '../../Resources/Images/UN.png'
import wasac from '../../Resources/Images/WASAC.png'
import rema from '../../Resources/Images/REMA.png'
import rura from '../../Resources/Images/rura.png'

function Footer() {
  return (
    <div className="footer">
    <div className='partners'>
      <h2>Our Parteners</h2>
      <div className='un' ><img src={un} alt="" /> </div>
      <div><img src={wasac} alt="" /> </div>
      <div><img src={rema} alt="" /> </div>
      <div><img src={rura} alt="" /> </div>
     </div>
    
    <div className='stay'>
      {/* <h2>Stay Updated</h2> */}
      {/* <input> Enter Email Adress</input>
      <button>Submit</button> */}

    </div>
    </div>
  )
}

export default Footer;