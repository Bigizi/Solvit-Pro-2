import React from 'react'
import './Bill.css'
import Visa from '../../../Resources/Icons/visa.png'
import Momo from '../../../Resources/Icons/momo.png'
import Airtel from '../../../Resources/Icons/airtel.png'

function Bill() {
  return (
    <div className='container'>
        <div className='sub-container'>
            <div className='header'>
                <h>Bill</h>
            </div>
            <form className='form-3'>
                <div className='content'>
                    <h2>Fill the following form</h2><br/>
                    <label>Meter Number: </label>
                    <input type='text' /><br/><br/>
                    <label>Meter Reading:  </label>
                    <input type='text' /><br/><br/>
                    <label>Amount to pay: </label>
                    <input type='text' /><br/><br/>
                    <button>Confirm Payment</button>
                </div>
                <div id='payment'>
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