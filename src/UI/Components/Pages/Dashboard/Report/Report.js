import React from 'react'
import './Report.css'

function Report() {
  return (
   
   <div className="container-4">
    <div className='sub-container-4'>
    <h2>Fill The Information Bellow To Report the Issue</h2>
        <form className='form-1'>
       

        <div className="left">
        
            <h1>Your Name </h1>
            <h1>Your Address</h1>
            <h1>What is the issue</h1>
            <h1>Details</h1>

        </div>

        <div className="right">
        <input className='name' type="text" id="name" name="name" placeholder='Full Names'/>
        <div className="address">
        <div className='address1'><input type="text" id="province" name="province" placeholder='Province'/>
        <input type="text" id="sector" name="sector" placeholder='Sector'/></div>
        
        <div className='address2'><input type="text" id="district" name="district" placeholder='District'/>
        <input type="text" id="cell" name="cell" placeholder='Cell'/></div>
        </div>
           <select  name="issue" id="issue">
                <option value="water">Amazi ntarangeraho</option>
                <option value="technical">Itiyo izana amazi yangiritse </option>
                <option value="system">System yo kwishura ntikora</option>
            </select>    
        <input className='detail' type="text" id="detail" name="detail" /> 
                <button>Submit</button>
        </div>
        </form>
    </div>
</div>
  )
}

export default Report