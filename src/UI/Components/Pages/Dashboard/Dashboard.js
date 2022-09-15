import React from 'react'
import './Dashboard.css'
import Bill1 from '../../Resources/Icons/bill1.png'
import Repo from '../../Resources/Icons/repo.png'
import Prof from '../../Resources/Icons/prof.png'
import Report from './Report/Report'
import Bill from './Bill/Bill'
import { Link, useParams } from 'react-router-dom'
import Profile from './Profile/Profile'
import LogoutIcon from '@mui/icons-material/Logout';

function Dashboard() { 
    const pages = {
        report: <Report />,
        bill: <Bill />,
        profile: <Profile/>
    }
    
    let  {page} = useParams();
    const currentPage = pages[page] ?? <Bill />
    

  return (
    <div className='main'>
        <div className='logo'>
        </div>
        <div className='leftside'>
            <ul className='list'>
                <Link className='list1' to="/dash/bill">
                    <img src={Bill1} id='img1' alt=''/>
                    Bill
                </Link>
                <Link className='list2' to="/dash/report" >
                    <img src={Repo} id='img' alt=''/>
                    Report
                </Link>
                <Link className='list2' to="/dash/profile">
                    <img src={Prof} id='img' alt=''/>
                    Profile
                </Link>
                <Link className='list2' to="/">
                    <LogoutIcon id='imglogout'/>
                    Logout
                </Link>
            </ul>
        </div>
        <div className='rightside'> 
           {currentPage}
        </div>
    </div>
  )
}

export default Dashboard