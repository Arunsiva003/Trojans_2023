import React from 'react'
import './home.css'
import Timer from '../../components/timer';
import Scroller from '../../components/scroller';
import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from '../../components/Footer/Footer';

import Logo from '../../images/Trojans/trojansLogo.png';
import Logo2 from '../../images/Trojans/OnlyLogo_White.webp';
import citLogo from "../../images/Trojans/cit_white_logo.webp";

export default function Home() {

  const cit ="Chennai Institute of Technology (CIT Chennai) is an Industry Connected Institute, affiliated to Anna University and is a co-educational engineering college located at Kundrathur, Chennai, Tamil Nadu, India. It was established in 2010 and was established with an objective of providing quality technical education with adequate industrial exposure than any other college in Chennai."
  const eventType = ["Technical", "FunTech","Online","Workshop"]


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
          <Scroller/>
        </div>
        <div className='homeAbout'>
          <div className='aboutHead'><div className='aboutHead2'>About Us</div></div>
           <div className='aboutContainer'>
              <div className='firstAbout'>
                  <div className='leftAbout'>
                    <img src={citLogo} alt="cit"/>
                  </div>
                  <div className='rightAbout'>
                    <p>{cit}</p>
                  </div>
              </div>
              <div className='firstAbout'>
                  <div className='leftAbout'>  
                    <p>{cit}</p>
                  </div>
                  <div className='rightAbout'>
                    <img src={Logo2} alt="cit" className='logo2'/>
                  </div>
              </div>
           </div>
          <div className='line'></div>
        </div>
        <div className='eventsHome'>
          <div className='eventHead'>
            <div className='eventHead2'>Events</div>
          </div>
          <div className='eventContainer'>
          
          </div>
        </div>





        <ContactUs/>
        <Footer/>
    </div>
  )
}
