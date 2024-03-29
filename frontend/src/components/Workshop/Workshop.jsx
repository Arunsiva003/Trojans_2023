import React from "react";
import "./workshop.css";
import { useNavigate } from "react-router-dom";
import {FaConnectdevelop,FaDatabase, FaWifi} from 'react-icons/fa';
import { GiRobotAntennas } from 'react-icons/gi';


function  Workshop() {
  const navigate = useNavigate();

  let workshopdata = [
    {
      eventname: "Fullstack Development",
      iconsrc:<FaDatabase className="work_card__icon"/>,
      // imageSrc: p5,
      duration: "1:30 hrs",
      timing: "10:30am - 12:00pm",
      description: 
      `Topics :
      •	Modern HTML and CSS
      •	Javascript and DOM manipulation
      •	Front-End Vue.Js
      •	Back-End Basics and APIs
      •	Web performance and Security
      •	Q & A
`,
      coordinators: `
      Shalini S - 6381703623,
      Samyuktha  - 7358425326
      `,
      
      buttonText: "View More",
    },
    {
      eventname: "Advanced Networking ",
      // imageSrc: p5,
      iconsrc:<FaWifi className="work_card__icon"/>,
      duration: "1:30 hrs",
      description: `  1)Introduction To Networking
                      1.1 what is networking & how it began
                      1.2 Networking Topologies
                      2) Network Protocols
                      2.1 TCP/IP (Transmission Control Protocol/Internet Protocol)
                      2.2 DNS (Domain Name System)
                      3)Network Devices
                      3.1 Sockets and ports
                      3.2 Switches
                      3.3 Hubs
                      3.4 Modems
                      4)Routing Protocols: 
                      4.1 OSPF (Open Shortest Path First) 
                      4.2 BGP (Border Gateway Protocol) 
                      4.3 MPLS (Multiprotocol Label Switching) 
                      4.4 Network Access Control (NAC) 
                      5) Network Security: 
                      5.1 Types of network threats (e.g., malware, viruses, phishing) 
                      5.2 Firewall and its role 
                      5.3 Encryption and VPNs (Virtual Private Networks) 
                      5.4 Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS) 
                      6) Troubleshooting Network Issues: 
                      6.1 Common network problems 
                      6.2 Network diagnostic tools (e.g., ping, trace-route) 
                      6.3 Advanced persistent threats (APTs) and mitigation strategies`,
      coordinators: `
      SRINITHI.S - 7603807975,
      DEVISRI S - 9384258137`,
      timing: "10:30am - 12:00pm",
      buttonText: "View More",
    },
    {
      eventname: "Machine Learning and Deep Learning",
      iconsrc:<FaConnectdevelop className="work_card__icon"/>,
      duration: "1:30 hrs",
      description: `*Title: Data Science, Machine Learning, and Deep Learning Workshop*
      *Description:*
      Immerse yourself in the world of Data Science, Machine Learning, and Deep Learning. This workshop offers a comprehensive exploration of these cutting-edge fields, catering to beginners and intermediate practitioners. Led by industry experts, you'll gain hands-on experience, theoretical insights, and ethical perspectives, all vital for leveraging data-driven decision-making.
      Key Points:
      •	Data Science Foundations: Grasp data manipulation, exploration, and visualization essentials for a solid data-driven workflow.
      •	Machine Learning Essentials: Learn core concepts like supervised/unsupervised learning, model evaluation.
      •	Deep Learning Insights: Unveil neural network architecture, training, and applications in diverse domains.
      •	Hands-on Coding: Gain practical skills through interactive sessions using industry tools and libraries.
      •	Advanced Techniques: Dive into  machine learning, and deep learning.
      •	Project Collaboration: Work on data projects.

      *Who Should Attend:*
      - Aspiring Data Scientists, Analysts
      - Machine Learning Enthusiasts
      - Software Engineers seeking to diversify
      - Professionals interested in AI's industry applications
`,
      coordinators: "Madhan Kumar - 9655364633",
      timing: "12:30pm - 2:00pm",
      buttonText: "View More",
    },
    {
      eventname: "AI Integration with ChatGPT",
      iconsrc: <GiRobotAntennas className="work_card__icon"/>,
      duration: "1:30 hrs",
      description: `
      Description
      •	Students will get the knowledge on advanced topics like Large Language Model, Natural Language Processing and Generative AI
      •	Students will learn about OpenAI, different APIs of OpenAI.
      •	Students will develop voicebots, chatbots which work on Artificial Intelligence.
      Rules
      •	Every student must have laptop and suggested to bring their phone hotspots internet connection.
      •	It would be better if students have basic idea of Python Programming. 
      •	Even though OpenAI API key will be provided, it is advised to create a new OpenAI account with a phone number which is not registered in OpenAI, so that students can access the free trail.
`,
      coordinators: ` ARUN PRANAV A T - 8838310004,
       Adhithya S - +918940944340`,
      timing: "12:30pm -2:00pm",
      buttonText: "View More",
    },
  ];

  const shareData = (event) => {
    navigate("/workdetail", {
      state: {
        eventname: event.eventname || "",
        duration: event.duration || "",
        description: event.description || "",
        coordinators: event.coordinators || "",
        timing: event.timing || "",
        eventtype:"/workshop"
      },
    });
  };

  return (
    <div>
    
      <div class="work_back">
        <div class="work_cont">
        <div class="content">
          <h2 className='h2'>Workshop</h2>
          <h2 className='h2'>Workshop</h2>
        </div>
          <div class="work_card__container">
            {workshopdata.map((event, index) => (
              <article class="work_card__article work_card__purple" key={index}>
                <div class="work_card__scale-1"></div>
                <div class="work_card__scale-2"></div>

                <div class="work_card__shape-1">
                  <div class="work_card__shape-2"></div>
                  <div class="work_card__shape-3">
                    {event.iconsrc}
                  </div>
                </div>
                <div class="work_card__data">
                  
                  <h2 className="work_card__title">{event.eventname}</h2>
                  <p className="work_card_description">{event.eventdescription}</p>
                  <a
                    
                    class="work_card__button"
                    onClick={() => {
                      shareData(event);
                    }}
                  >
                    {event.buttonText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

export default Workshop;
