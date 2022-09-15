import React from 'react'
import './DashboardAdmin.css'
import Citizen from '../../Resources/Icons/citizen.png'
import Prof from '../../Resources/Icons/prof.png'
import Dashboard from '../../Resources/Icons/Dashboard.png'
import Main from './MainDashboard/Main'
import { Link } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

export default function DashboardAdmin() {
  return (
    <div className='main'>
        <div className='logo'>
        </div>
        <div className='leftside1'>
            <ul className='list'>
                <li className='list2'>
                    <img src={Dashboard} id='img1' alt=''/>
                    Dashboard
                </li>
                <li className='list2'>
                    <img src={Citizen} id='img1' alt=''/>
                    Add A Citizen
                </li>
                <li className='list3'>
                    <img src={Prof} id='img1' alt=''/>
                    Profile
                </li>
                <Link className='list2' to="/">
                    <LogoutIcon id='imglogout'/>
                    Logout
                </Link>
            </ul>   
        </div>  
        <div className='rightside1'> 
        {/* <Register/> */}
        <Main/>
        </div>  
    </div>   
  )
}
