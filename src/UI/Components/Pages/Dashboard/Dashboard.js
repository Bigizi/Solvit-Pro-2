import React from 'react'
import './Dashboard.css'
import Bill1 from '../../Resources/Icons/bill1.png'
import Report from '../../Resources/Icons/report.png'
import Profile from '../../Resources/Icons/profile.png'
import Bill from './Bill/Bill'


function Dashboard() { 
  return (
    <div className='main'>
        <div className='logo'>
        </div>
        <div className='leftside'>
            <ul className='list'>
                <li className='list1'>
                    <img src={Bill1} id='img' alt=''/>
                    Bill
                </li>
                <li className='list2'>
                    <img src={Report} id='img' alt=''/>
                    Report
                </li>
                <li className='list2'>
                    <img src={Profile} id='img' alt=''/>
                    Profile
                </li>
            </ul>
        </div>
        <div className='rightside'> 
            <Bill/>
        </div>
        
    
    </div>
  )
}

export default Dashboard