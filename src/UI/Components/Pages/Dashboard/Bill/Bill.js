import React from 'react'
import './Bill.css'
import Visa from '../../../Resources/Icons/visa.png'
import Momo from '../../../Resources/Icons/momo.png'
import Airtel from '../../../Resources/Icons/airtel.png'
// import Profil from '../../../Resources/Icons/profil.png'
// import Btn from '../../../Resources/Icons/btn.png'

function Bill() {
  return (
    <div className='container'>
        <div className='sub-container'>
            <div className='header'>
                <h>Bill</h>
                {/* <div id='right-h'>
                <p>Crispin || </p>
                <img src={Profil} alt='' id='prof-btn'/>
                <svg width="16" height="7" viewBox="0 0 16 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.990723 0.333332L8.12697 7L15.2632 0.333332H0.990723Z" fill="#0367A6"/>
                </svg>
                </div> */}
                {/* <button><img src={Btn} alt='' id='btn-h'/></button> */}
            </div>
            <form className='form'>
                <div className='content'>
                    <h2>Fill the following form</h2><br/><br/>
                    <label>Meter Number: </label>
                    <input type='text' /><br/><br/>
                    <label>Meter Reading:  </label>
                    <input type='text' /><br/><br/>
                    <label>Amount to pay: </label>
                    <input type='text' /><br/><br/>
                    <button>Confirm Payment</button>
                </div>
                <div className='payment'>
                    <h3>Payment Method</h3><br/>
                    <img src={Visa} alt='' /><br/>
                    <img src={Momo} alt='' /><br/>
                    <img src={Airtel} alt='' />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Bill