import React from 'react'
import './DashboardAdmin.css'
import Dash from '../../Resources/Icons/dash.png'
import Citizen from '../../Resources/Icons/citizen.png'
import Prof from '../../Resources/Icons/prof.png'

export default function DashboardAdmin() {
  return (
    <div className='main'>
        <div className='logo'>
        </div>
        <div className='leftside'>
            <ul className='list'>
                <li className='list1'>
                    <img src={Dash} id='img1' alt=''/>
                    Dashboard
                </li>
                <li className='list2'>
                    <img src={Citizen} id='img1' alt=''/>
                    Citizen
                </li>
                <li className='list3'>
                    <img src={Prof} id='img1' alt=''/>
                    Profile
                </li>
            </ul>   
        </div>  

        <div className='rightside'> 
            
        </div>  
    </div>   
  )
}
