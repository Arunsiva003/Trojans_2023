import React , {useState} from "react";   
// import "../../Background/Background.jsx"; 
import "../ContactUs/contactus.css";
// import {userForm} from "react-hook-form";
// import Background from "../../Background/Background.jsx";
// import Navbar from "../../Navbar/Navbar.jsx";




export default function Contactus(){

    const [formstate , setformstate] = useState({});

    const changehandler = (event) =>{
        setformstate({...formstate , [event.target.name] : event.target.value});
    };

   

    const submit_handler = (event) => {
        event.preventDefault();
        const config= {
            Username : "mail",
            Password : "pass",
            Host : "name",
            Port : 3000,
            To : "trojans@citchennai.net",
            From : formstate.email,
            Subject : "This is the subject",
            Body : `${formstate.name} get connected with us on trojans`,   
            SecureToken : "token update with username and password",
        };

        if(window.Email){
            window.Email.send(config).then(() => alert("Thanks for reaching out will get contact with u soon"));
        }
    };

    return(
        <>
        <div className = "main">
            <div className="left-div_contact">
            <div class="content">
          <h2 className='h2'>Contact Us</h2>
          <h2 className='h2'>Contact Us</h2>
        </div>
                <p className="touch"> Get Contact with us to get the unreal form of enjoyment and entertainment</p>
                <div className="numbers">
                    <span className="name"><span className="title_name">President <span className="namesof">(Mohammed Mujammil)</span>:</span> <a className="a_tag" href="tel:+918681039888">+91 8681039888</a></span>
                    <span className="name"><span className="title_name">Vice-President <span className="namesof">(Asmitha)</span> :</span> <a className="a_tag" href="tel:+917695887130">+91 7695887130</a></span>
                    <span className="name"><span className="title_name">Secretary<span className="namesof"> (Dhoni)</span>: </span> <a className="a_tag" href="tel:+918148542866">+91 8148542866</a></span>
                    <span className="name"><span className="title_name">Staff coordinator<span className="namesof"> (Mr.Ramachandran)</span>:</span><a className="a_tag" href="tel:+917871855064">+91 7871855064</a></span>
                </div>
                
            </div>
            <div className="register">
            <div class="content">
          <h2 className='h2'>Feedback</h2>
          <h2 className='h2'>Feedback</h2>
        </div>
                        <p className="touch2"></p>
                        <form action="https://formspree.io/f/xeqbzjyv"  method="POST" className="form_contactus">
                            <input type="text" name="name" required placeholder="Your Name"/>
                            <input type="text" name="email" required placeholder="Email ID"/>
                            <input type="text" name="message" required placeholder="Message"/>
                            <h2 className='button-89' ><a>Submit</a></h2>
                        </form>
            </div>

        </div>
        </>
    )
}