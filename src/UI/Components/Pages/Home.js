
import React from 'react'
import Navigation from './Navigation/Navigation'
import './Home.css';
import photoright from '../Resources/Images/amazi.png';
import photoleft from '../Resources/Images/amazi2.png'
import group1 from '../Resources/Images/Group47.png'
import group2 from '../Resources/Images/Group48.png'
import group3 from '../Resources/Images/Group49.png';
import phone from '../Resources/Images/phone.png'
import ipad from '../Resources/Images/ipad.png'
import Footer from './Footer/Footer';

function Home() {
return (
<div className='home'>

<Navigation/>

<div className='Body_Home'>

<h1 id='h1'>Source</h1>
<p id='p1'>Facilitating Community Water Supply</p>
<button>Learn More</button>
</div>

<div className='Body_center'>

<p>ABOUT US</p>
<h1 id='what'>WHAT WE DO</h1>

<div className="body1">
<div className="body1-text">
<h id='mission'>OUR MISSION</h>
<p id='p2'>
Access to water, sanitation and hygiene is a<br/>
human right. In Rwanda, only 57 per cent of <br/>
the population access safe drinking water that <br/>
is within 30 minutes of their home. <br/>
<br/>UN has undertaken the project to ensure <br/>
availability and sustainable management of<br/>
water and sanitation for all.
</p>
</div>
<img src={photoright} alt="" />
<div className="rectangle"></div>
</div>

<div className="body2">

<img id='img2' src={photoleft} alt="" />
<div className="rectangle2"></div>
<div className="body2-text">
<p id='p3'>
and it is in that line that we seek to<br/>
develop a system that will facilitate the<br/>
follow up on the progress made in <br/>
ensuring all homes are provided with <br/>
water, as well as help citizens keep up<br/>
with the water bill in a more flexible<br/>
manner and communicate their <br/>
concerns.
</p>
</div>
</div>

<div className="cards_body" id='cards_body_orgy'>
<div>
<p>PROGRESS<br/></p>
<h2 id='progre'>PROVINCIAL WATER SUPPLIES</h2>
</div>

<div className='cards'>
<div className="card1">
<img id='img3' src={group1} alt="" />
<h3>Northern Province</h3>

</div>
<div className="card2">
<img id='img3' src={group2} alt="" />
<h3>Eastern Province</h3>
</div>
<div className="card3">
<img id='img3' src={group3} alt="" />
<h3>Western Province</h3>
</div>
{/* <ProgressComp percentage={95} /> */}

</div>
</div>
</div>

<div className="body3">
<h4>GET THE APP</h4>
<div className="body2-text">
<h5>DOWNLOAD</h5>
<p id='p3'>
Get the application now and you can<br/>
follow up on your tasks offline from<br/>
anywhere and anytime<br/>
</p><br/>
<button id='download'>Download the App</button>
</div>
<div className="pics">
<img id='ipad' src={ipad} alt="" />
<img id='phone' src={phone} alt="" />
</div>
</div>

<Footer/>
</div>
)
}

export default Home;
