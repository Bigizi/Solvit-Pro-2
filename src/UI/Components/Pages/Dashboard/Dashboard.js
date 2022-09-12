import React from 'react'
import './Dashboard.css'
import Bill1 from '../../Resources/Icons/bill1.png'
import Repo from '../../Resources/Icons/repo.png'
import Prof from '../../Resources/Icons/prof.png'
// import Profile from './Profile/Profile.js'
// import Report from './Report/Report'
import Bill from './Bill/Bill'


function Dashboard() { 
  return (
    <div className='main'>
        <div className='logo'>
        </div>
        <div className='leftside'>
            <ul className='list'>
                <li className='list1'>
                    <img src={Bill1} id='img1' alt=''/>
                    Bill
                </li>
                <li className='list2'>
                    <img src={Repo} id='img' alt=''/>
                    Report
                </li>
                <li className='list2'>
                    <img src={Prof} id='img' alt=''/>
                    Profile
                </li>
            </ul>
        </div>
        <div className='rightside'> 
            {/* <Report/> */}
            <Bill/>
        </div>
    </div>
  )
}

export default Dashboard