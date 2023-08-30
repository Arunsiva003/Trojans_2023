import React from 'react'
import './home.css'
import Timer from '../../components/timer';

import Logo from '../../images/Trojans/trojansLogo.png';


export default function home() {
  return (
    <div className='homePage'>
        <div className='intro'>
            <p className='trojanshead'>TROJANS</p> 
            <img src={Logo} alt="logo" className='homeLogo'/>
            <div className='line'></div>
        </div>
        <div className='hero'>
        <div className="heroTrojans">TROJANS’23</div>
        <div className="heroDesc">National Level Technical Symposium</div>
        <div className='timer'>
            <Timer/>
        </div>
        <div className="heroDate">September 20, 2023</div>
        <div className="registerBox">
            <div className="registerButton">REGISTER</div>
        </div>
        </div>



    </div>
  )
}
