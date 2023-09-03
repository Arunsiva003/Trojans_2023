import React from 'react'
import './home.css'
import Timer from '../../components/timer';
import Scroller from '../../components/scroller';

import ContactUs from "../../components/ContactUs/ContactUs";
import Footer from '../../components/Footer/Footer';

import { useNavigate } from 'react-router-dom';
import Logo from '../../images/Trojans/trojansLogo.png';
import Logo2 from '../../images/Trojans/OnlyLogo_White.webp';
import citLogo from "../../images/Trojans/cit_white_logo.webp";
import { useState } from 'react';
import stop from "../../images/Online/SHUTTER STOP (1).png";
import valo from "../../images/Online/valo.png";
import pubg from "../../images/Online/pubgedited.jpg";

//event images
import event4 from '../../images/Trojans/event1.svg';
import event3 from '../../images/Trojans/event2.svg';
import event2 from '../../images/Trojans/event3.svg';
import event1 from '../../images/Trojans/event4.svg';

//non tech images
import shot from "../../images/NonTech/One_Shot.jpeg";
import brain from "../../images/NonTech/Brainaholic.jpeg";
import Craft from "../../images/NonTech/Crafter_tactics.jpeg";
import impact from "../../images/NonTech/ImpactX.jpeg";
//tech images
import  Beyond from "../../images/Tech/BeyondTheVisual.jpg"
import  CodeBeat from "../../images/Tech/CodeBeats1.jpg"
import  Code from "../../images/Tech/CodersChemistry.jpg"
import  Quiz from "../../images/Tech/QuizTopher.jpg"
import Navbar from '../../components/Navbar/Navbar.jsx';
//workshop images

export default function Home() {

  //  const navigate = useNavigate();

  const cit ="Chennai Institute of Technology (CIT Chennai) is an Industry Connected Institute, affiliated to Anna University and is a co-educational engineering college located at Kundrathur, Chennai, Tamil Nadu, India. It was established in 2010 and was established with an objective of providing quality technical education with adequate industrial exposure than any other college in Chennai."
  const eventType = ["Technical", "FunTech","Online","Workshop"]
  const Nontechdatas = [
    {eventname:"One-Shot",
      imageSrc: shot,
      duration:"10",
      description:`A dynamic campus tapestry unfolds: laughter in the quad, focused minds in libraries, and diverse unity over shared meals.
      Athletes' determination, artists' passion, and captivating performances reveal a vibrant Trojan journey.
      In one frame, emotions and time unite, chronicling a pulsating college narrative.
      Rules
      •	Individual participation only.
      •	The captured moments should be in reel format
      •	Shoot should be within the campus
      •	Participants should bring their own properties (DSLR , mobile , anything as per your convenience)
      •	 Reel must be within 1 min 
      •	The capture moments should be in appropriate manner.
      •	Plagiarism is strictly prohibited`,
      coordinators:"S Sameerul Hak, Vinay Saran JJ,Krishna G,Roshika,Pavi,Rithika",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Crafter Tactics",
      imageSrc: Craft,
      duration:"10",
      description:`Rules:
      •	1.Group or individual participation allowed
      •	2.Each group should consists of 2-3 members only 
      •	3.The individual member have 2-3 minutes time for their presentation(timings may be change)
      •	4.Groups have 5 minutes duration for their presentation(timings may be changes)
      •	5.The topic will be given on the spot.
      •	6.The participant should be present according to their topic 
      •	7.Teams will be evaluated based on creativity, feasibility, clarity of presentation, 
      •	and their way of marketing with the given topic.
      •	8.The decision of the judging panel will be final and binding.
      •	9.Prizes will be awarded to the teams with the most outstanding marketing strategies and presentations.
      •	10.All participating teams will receive a certificate of participation.
      .`,
      coordinators:"S Sameerul Hak ,Suriya , Sharvesh",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Brainaholic",
      imageSrc: brain,
      duration:"10",
      description:`
      Dive into the world of brain teasers and trickers by participating in Brainaholic! Test your knowledge and revel in the joy of face-to-face competition. Join us for a quiz extravanganza.
      
      RULES:
      •	The game consists of three rounds.
      •	Each team can have maximum of three members.
      •	Each round has a time limit of 20mins.
      •	Mobile phone usage is strictly prohibited.
      •	No additional opportunities will be provided .
      •	Participants are requested to respond within the designated time limit .
      
      `,
      coordinators:"B. Kishore,Evelyn Beatrice A,Hariharan",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"ImpactX",
      imageSrc: impact,
      duration:"10",
      description:`Description:
      Bring life to your ideas through this ecstatic event ImpactX - Unfold brilliance and elevate your ideas through a paper presentation event.
      Rules:
      •	The participants have to submit their abstract in the form of PPT through Google Form
      •	Maximum team members allowed will be 3
      •	Presentations must be completed within 5 minutes.
      •	Be Clear and Concise
      •	3 mins of time will be allotted to answer the questions posed by the judges
      •	Keep your content professional and relevant to the topic.
      •	Uniqueness of ideas, innovative approaches, or fresh perspectives in addressing the subject matter
      `,
      coordinators:"Vinay Saran JJ,Amrize,Padmavarshini B",
      timing:"1hrs",
      buttonText: "View More",
    },

  ];
  const Techdata=[
    {eventname:"Coders Chemistry",
      imageSrc: Code,
      duration:"10",
      description:`GENERAL RULES:
      ●	EACH TEAM SHOULD CONSIST OF 2 MEMBERS.
      ●	THERE WILL BE 3 ROUNDS.
      ●	TEAM MEMBERS ARE NOT ALLOWED TO COMMUNICATE WITH EACH OTHER IN THE 1ST AND 2ND ROUNDS.
      ●	THE PROGRAMMING LANGUAGES: JAVA, C, C++, PYTHON
      ROUND 1:
      ●	ONE MEMBER SHOULD CODE THE ANSWERS FOR THE QUESTIONS, WHILE THE OTHER SHOULD IMPLEMENT THE LOGIC USING THE PAPER-AND-PEN METHOD.
      ●	THE MEMBERS WILL SWAP ROLES EVERY 3 MINUTES AND PROCEED WITH THE REMAINING PART OF THE CODE.
      ●	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
      ROUND 2:
      ●	BOTH TEAM MEMBERS HAVE TO CODE SIMULTANEOUSLY ON DIFFERENT PROBLEMS.
      ●	THE POSITIONS OF THE TEAMMATES ARE SWAPPED EVERY 4 MINUTES.
      ●	THE AVERAGE SCORE OF THE TEAM IS CONSIDERED FOR ELIMINATION.
      ●	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
      ROUND 3:
      ●	THE TEAM WILL BE GIVEN A SET OF PROBLEMS TO SOLVE.
      ●	BOTH TEAM MEMBERS CAN DISCUSS AND SOLVE THE PROBLEMS.
      ●	PROBLEMS WILL BE BASED ON DATA STRUCTURES & ALGORITHMS.
      ●	THE TIME DURATION FOR THIS ROUND IS 20 MINUTES.
      `,
      coordinators:`
      •	HARI PRASAD R - 7550160349,
      •	SARUMATHI - 
      •	SHANMUGA PRIYA -  
      •	SOWMIYA -`,
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Quiztopher",
      imageSrc: Quiz,
      duration:"10",
      description:`GENERAL RULES:
      •	EACH TEAM SHOULD CONSISTS A MAXIMUM OF 3 MEMBERS.
      •	THERE WILL BE 3 ROUNDS.
      •	ALL THE 3 ROUNDS WILL BE TIMER BASED.
      ROUND 1:
      •	IT WILL BE A MCQ ROUND.
      •	QUESTIONS WILL BE BASED ON PYTHON, C, C++, JAVA.
      •	THE TIME DURATION FOR EACH QUESTION WILL BE 20 SECONDS.
      ROUND 2:
      •	IT WILL BE A MEME BASED MCQ ROUND.
      •	QUESTIONS WILL BE BASED ON ALGORITHMS AND TECHNICAL TERMS.
      •	THE TIME DURATION FOR ANSWERING THE QUIZ AFTER THE MEME IS DISPLAYED WILL BE 10 SECONDS.
      ROUND 3:
      •	IT WILL BE SPOT THE ERROR ROUND.
      •	PARTICIPANTS NEED TO SPOT THE ERRORS IN THE GIVEN CODE AND NEED TO SAY THE NUMBER OF ERRORS.
      •	PAPER AND PEN WILL BE PROVIDED FOR DEBUGGING.
      •	EACH CODE WILL BE DISPLAYED FOR 40 SECONDS.
      `,
      coordinators:`
      •	VISHAL RK – 9956189750  
      •	ABHISHEK DAS - 
      •	SUBITHA S - 
      •	PRANAVI RETHIKA VS - 
      •	SYED NADEEM G - 
`,
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Code Beats",
      imageSrc: CodeBeat,
      duration:"10",
      description:`GENERAL RULES:
      •	EACH TEAM SHOULD CONSIST OF 2 MEMBERS.
      •	THERE WILL BE 3 ROUNDS.
      •	TEAM MEMBERS ARE NOT ALLOWED TO COMMUNICATE WITH EACH OTHER IN THE 1ST ROUND.
      •	THE PROGRAMMING LANGUAGES: JAVA, C, C++, PYTHON
      •	NO MALPRACTICE
      •	ROUGH PAPER WILL BE PROVIDED FOR ATTENDIES TO USE
      ROUND 1:
      •	ONE MEMBER SHOULD CODE THE ANSWERS FOR THE QUESTIONS, WHILE THE OTHER CAN PARTICIPATE IN THE GUESSING GAME
      •	ONE MEMBER LISTENS TO MUSIC AND HAVE TO FIND THE CORRESPONDING MOVIE(HEADPHONES WOULD BE PROVIDED)
      •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
      ROUND 2:
      •	ROUND 2 IS COMMON TO ALL TEAMS
      •	BOTH MEMBERS CAN PARTICIPATE.
      •	HAVE TO GUESS THE REVERSED SONG, IF FOUND, THEN THEY CAN PROCEED TO CODE.BOTH CAN DISCUSS AND SOLVE THE PROBLEM.
      •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
      ROUND 3:
      •	GUESS THE SONG FROM THE BEAT, THE EARLIER YOU FIND THE EASIER YOU CAN WIN.
      •	PLAYERS WILL BE PROVIDED WITH QUESTIONS BASED ON A TIME CONSTRAINT, IF YOU GUESS IT EARLY, YOU GET AN EASY CHALLENGE TO SOLVE.
      •	FOR EXAMPLE:
      •	IF FOUND WITHIN 2 MINUTES- EASY,
      •	IF FOUND WITHIN 3 MINUTES-MEDIUM
      •	IF FOUND WITHIN 5 MINUTES (MINIMUM)-HARD.
      •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
      `,
      coordinators:"	B PAWAN KALYAN ,E DHARSHINI ,KAVIYASRI V ,KAVI T ,R S RAGHAVEE ",
      timing:"1hrs",
      buttonText: "View More",
    },
    {eventname:"Beyond Your Visuals",
      imageSrc: Beyond,
      duration:"10",
      description:`GENERAL RULES:
      •	EACH TEAM SHOULD CONSIST OF 1 MEMBERS.
      •	THERE WILL BE 3 ROUNDS.
      •	THE PROGRAMMING LANGUAGES: JAVA, C/C++, PYTHON
      •	NO MALPRACTICE
      •	ROUGH PAPER WILL BE PROVIDED FOR ATTENDIES TO USE
      ROUND 1:
      •	QUESTIONS WILL BE VIEWED FOR ONE MINUTE , MONITOR WILL BE TURNED OFF AFTER THAT  
      •	FOR EACH DURATION OF TWO MINUTES , THE CODER CAN VIEW THE MONITOR ONCE FOR 10 SECONDS
      •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
      ROUND 2:
      •	YOUR PAIR WILL BE SELECTED BASED ON PAPER BOWL METHOD
      •	BOTH MEMBERS CAN PARTICIPATE.
      •	THE PERSON WHO COMPLETES THE CODE FIRST WINS.
      •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.
      ROUND 3:
      •	CONSTRAINTS WILL BE GIVEN BASED ON THE PROBLEM 
      •	NO FOR LOOP SHOULD BE USED
      •	NO BUILT IN FUNCTION SHOULD BE USED 
      •	THE CODE SHOULD BE COMPLETED WITHIN A STIPULATED LINES 
      •	THE TIME DURATION FOR THIS ROUND IS 15 MINUTES.        
      `,
      coordinators:"R NAVEEN ,KANISHKA BHARATHI A ,ILAKKIYA S M ,KRISHNA G",
      timing:"1hrs",
      buttonText: "View More",
    },

   
  ];
      const OnlineDatas = [
      {eventname:"Valorant(Online)",
        imageSrc: valo,
        duration:"10",
        description:`GENERAL RULES:
        ●	Team Head(Captain) must register with a unique Team Name,5 members and no substitutes.
        ●	Team must be ready with Entry Fee Rs.150/ Team to participate on the day of Event.
        ●	Event is conducted in Online mode.
        ●	Interaction among the Players and Hacking would lead to immediate disqualification of the Team. 
        ●	MAP TOOL : BIND,HAVEN,SPLIT,ASCENT,ICEBOX,BREEZE.
        ●	Tournament Admin will make decision based upon Regional latency.
        `,
        coordinators:`VS Kanna `,
        timing:"1hrs",
        buttonText: "View More",
      },
      {eventname:"Shutter Stop(Online)",
        imageSrc: stop,
        duration:"10",
        description:`GENERAL RULES:
        •	EACH TEAM SHOULD CONSISTS A MAXIMUM OF 3 MEMBERS.
        •	THERE WILL BE 3 ROUNDS.
        •	ALL THE 3 ROUNDS WILL BE TIMER BASED.
        ROUND 1:
        •	IT WILL BE A MCQ ROUND.
        •	QUESTIONS WILL BE BASED ON PYTHON, C, C++, JAVA.
        •	THE TIME DURATION FOR EACH QUESTION WILL BE 20 SECONDS.
        ROUND 2:
        •	IT WILL BE A MEME BASED MCQ ROUND.
        •	QUESTIONS WILL BE BASED ON ALGORITHMS AND TECHNICAL TERMS.
        •	THE TIME DURATION FOR ANSWERING THE QUIZ AFTER THE MEME IS DISPLAYED WILL BE 10 SECONDS.
        ROUND 3:
        •	IT WILL BE SPOT THE ERROR ROUND.
        •	PARTICIPANTS NEED TO SPOT THE ERRORS IN THE GIVEN CODE AND NEED TO SAY THE NUMBER OF ERRORS.
        •	PAPER AND PEN WILL BE PROVIDED FOR DEBUGGING.
        •	EACH CODE WILL BE DISPLAYED FOR 40 SECONDS.
        `,
        coordinators:"VISHAL RK ,	ABHISHEK DAS ,	SUBITHA S ,	PRANAVI RETHIKA VS ,	SYED NADEEM G ",
        timing:"1hrs",
        buttonText: "View More"
      },
      {eventname:"BGMI (Offline)",
        imageSrc: pubg,
        duration:"10",
        description:`GENERAL RULES:
         ●	Team Head(Captain) must register with a unique Team Name,4 members and no substitutes.
        ●	Team must be ready with Entry Fee Rs.150/ Team to participate on the day of Event.
        ●	Event is conducted in Offline mode.
        ●	Interaction among the Players and Hacking would lead to immediate disqualification of the Team. 
        ●	Tournament Admin will make decision based upon Regional latency.
        `,
        coordinators:`V S Kanna `,
        timing:"1hrs",
        buttonText: "View More",
      }
    ];


  const navigate = useNavigate();


  const tech=()=>{
    navigate('/events/Techical', { state: { eventData: Techdata } });
    
  }
  const nontech = () => {
    navigate('/events/FunTech', { state: { eventData: Nontechdatas } });
  }
  const online = () => {
    navigate('/events/Online', { state: { eventData: OnlineDatas } });
  }
  
  
  const workshop=()=>{
    navigate("/workshop")
  }

  return (
    <div className='homePage'>
      <Navbar/>
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
          {/* <div className="registerBox">
              <div className="registerButton">REGISTER</div>
          </div> */}
        
          <Scroller/>
        </div>


        <div className='homeAbout'>
          <div className='aboutHead'><div className='aboutHead2'>About Us</div></div>
           <div className='aboutContainer'>
              <div className='firstAbout'>
                  <div className='leftAbout'>
                    <img src={citLogo} alt="cit" className='aboutLogo'/>
                  </div>
                  <div className='rightAbout'>
                    <p>{cit}</p>
                  </div>
              </div>
              <div className='firstAbout2'>
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
          <div className='eventHead' id="events">
            <div className='eventHead2'  >Events</div>
          </div>
          <div className='eventContainer'>
            <div className="eventBox" onClick={tech}>
              <img src={event1} alt="img" className="eventImage" />
              Technical
            </div>
            <div className="eventBox" onClick={nontech}>
              <img src={event2} alt="img" className="eventImage" />
              Funtech
            </div>
            <div className="eventBox" onClick={online}>
              <img src={event3} alt="img" className="eventImage" />
              Online Events
            </div>
            <div className="eventBox" onClick={workshop} >
              <img src={event4} alt="img" className="eventImage" />
              Workshops
            </div>  
          </div>
        </div>





        <ContactUs/>
        <Footer/>
    </div>
  )
}
