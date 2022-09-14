import React from 'react'
import './DashboardAdmin.css'
import Citizen from '../../Resources/Icons/citizen.png'
import Prof from '../../Resources/Icons/prof.png'
import Bill1 from '../../Resources/Icons/bill1.png'
import Repo from '../../Resources/Icons/repo.png'
// import Register from './RegisterCitizen/Register'
import Main from './MainDashboard/Main'

export default function DashboardAdmin() {
  return (
    <div className='main'>
        <div className='logo'>
        </div>
        <div className='leftside1'>
            <ul className='list'>
                <li className='list2'>
                    <img src={Citizen} id='img1' alt=''/>
                    Add A Citizen
                </li>
                <li className='list3'>
                    <img src={Prof} id='img1' alt=''/>
                    View All Users
                </li>
                <li className='list3'>
                    <img src={Repo} id='img1' alt=''/>
                    Reported Issues
                </li>
                <li className='list3'>
                    <img src={Bill1} id='img1' alt=''/>
                    View Payments
                </li>
            </ul>   
        </div>  
        <div className='rightside1'> 
        {/* <Register/> */}
        <Main/>
        </div>  
    </div>   
  )
}
