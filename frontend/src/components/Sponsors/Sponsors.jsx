import React, { useState } from 'react';
import './sponsors.css';
import myImage from '../../images/Trojans/trojansLogo.png';

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
      name: "Sponsor 1",
      description: "Description of Sponsor 1",
      imageSrc: myImage,
    },
    {
      name: "Sponsor 2",
      description: "Description of Sponsor 2",
      imageSrc: myImage,
    },
    {
      name: "Sponsor 3",
      description: "Description of Sponsor 3",
      imageSrc: myImage,
    },
  ];

  return (
    <div className="sponsors_body">
      
      <div class="content">
          <h2 className='h2'>Sponsors</h2>
          <h2 className='h2'>Sponsors</h2>
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
                <div className="sponsor_body-text">{sponsor.description}</div>
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
