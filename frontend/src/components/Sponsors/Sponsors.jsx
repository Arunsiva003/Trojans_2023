import React, { useState } from 'react';
import './sponsors.css';
import co1 from "../../images/sponsors/co1.png";
import co2 from "../../images/sponsors/co2.png";
import title from "../../images/sponsors/title.png"
// import myImage from '../../images/Trojans/trojansLogo.png';

function Sponsors() {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const toggleExpansion = (index) => {
    if (expandedIndex === index) {
      // Clicking the already expanded card should close it
      setExpandedIndex(-1);
    } else {
      // Clicking on a card should expand it, while collapsing the previous one
      setExpandedIndex(index);
    }
  };

  let sponsorData = [
    {
      name: "ANTWAY",
      description: "View More",
      imageSrc: co1,
      link:'https://www.antwayindia.com/'
    },
    {
      name: "MAHA FamilySaloon",
      description: "View More",
      imageSrc: co2,
      link:"https://www.sulekha.com/maha-family-salon-t-nagar-chennai-contact-address?.htm"
    },
   
  ];
  let titlesponsorData = [
    {
      name: "it TRIDENT",
      description: "View More",
      imageSrc: title,
      link:"https://ittrident.com/",
    },
   
   
  ];

  return (
    <div className="sponsors_body">
      
      <div class="content">
          <h2 className='h2'>Title-Sponsors</h2>
          <h2 className='h2'>Title-Sponsors</h2>
        </div>
       {/* <h1 className='title_head'>Title Sponsors</h1> */}
        <div className='sponsors_down'>
            {titlesponsorData.map((sponsor, index) => (
            <div
            className={`sponsor_card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpansion(index)}
            key={index}
            >
            <img
                className="sponsor_image"
                src={sponsor.imageSrc}
                alt={`Sponsor ${index + 1}`}
                width={200}
                height={200}
            />
            <div className="sponsor_text1">
                <div className="sponsor_text-content">
                <h1 className="Sponsors_name">{sponsor.name}</h1>
                <div className="sponsor_body-text"><a href={sponsor.link} target="_blank" rel="noopener noreferrer">{sponsor.description}</a></div>
                </div>
            </div>
            <svg
                className="chevron"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 35"
                width={30}
                style={{ transform: expandedIndex === index ? 'rotate(0deg)' : 'rotate(180deg)' }}
            >
                <path
                d="M5 30L50 5l45 25"
                fill="none"
                stroke="#000"
                strokeWidth={5}
                />
            </svg>
            </div>
            ))}
      </div>
      <div class="content">
          <h2 className='h2'>Co-Sponsors</h2>
          <h2 className='h2'>Co-Sponsors</h2>
        </div>
      <div className='sponsors_down'>
            {sponsorData.map((sponsor, index) => (
            <div
            className={`sponsor_card ${expandedIndex === index ? 'expanded' : ''}`}
            onClick={() => toggleExpansion(index)}
            key={index}
            >
            <img
                className="sponsor_image"
                src={sponsor.imageSrc}
                alt={`Sponsor ${index + 1}`}
                width={200}
                height={200}
            />
            <div className="sponsor_text1">
                <div className="sponsor_text-content">
                <h1 className="Sponsors_name">{sponsor.name}</h1>
                <div className="sponsor_body-text"><a href={sponsor.link} target="_blank" rel="noopener noreferrer">{sponsor.description}</a></div>
                </div>
            </div>
            <svg
                className="chevron"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 35"
                width={30}
                style={{ transform: expandedIndex === index ? 'rotate(0deg)' : 'rotate(180deg)' }}
            >
                <path
                d="M5 30L50 5l45 25"
                fill="none"
                stroke="#000"
                strokeWidth={5}
                />
            </svg>
            </div>
            ))}
      </div>
    </div>
  );
}

export default Sponsors;
