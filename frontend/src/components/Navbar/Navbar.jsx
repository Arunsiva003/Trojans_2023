import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
// import Background from '../Background/Background'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
    <div className="laptop_nav">
      <div className="nav_1">
        <h1>TROJANS</h1>
      </div>
      <div className="nav_2">
        <h2 className="links"><a href="/">Home</a></h2>
        <h2 className="links"><a href="#events">Events</a></h2>
        <h2 className="links"><Link to="/workshop">Workshop</Link></h2>
        <h2 className="links"><Link to="/sponsors">Sponsors</Link></h2>
        <h2 className="links"><a href="https://forms.gle/73pTcgqmeRREtKuR8" target="_blank" rel="noopener noreferrer">Register</a></h2>
      </div>
    </div>
    <div className="mobile_nav">
      <div className="nav_container">
      <input
        className="menu-icon"
        type="checkbox"
        id="menu-icon"
        name="menu-icon"
        checked={menuOpen}
        onChange={handleMenuToggle}
      />
      <label className="nav-ico" htmlFor="menu-icon" />
  
      <nav className={`nav ${menuOpen ? "open" : ""}`}>
        <ul className="pt-5">
      {/* <Background/> */}
          <li className="nav-lst">
            <Link to="/" className="nvg-opt" data-text="Home" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-lst">
            {/* <Link to="#events"  data-text="Events" >
              Events
            </Link> */}
            <a href="#events" className="nvg-opt" onClick={closeMenu}>Events</a>
          </li>
          <li className="nav-lst">
          <a href="#events" className="nvg-opt" onClick={closeMenu}>Online Events</a>

          </li>
          <li className="nav-lst">
            <Link to="/workshop" className="nvg-opt" data-text="Workshop" onClick={closeMenu}>
              Workshop
            </Link>
          </li>
          <li className="nav-lst">
            <Link to="/sponsors" className="nvg-opt" data-text="Sponsors" onClick={closeMenu}>
              Sponsors
            </Link>
          </li>
          <li className="nav-lst">
          <a href="https://forms.gle/73pTcgqmeRREtKuR8" target="_blank" rel="noopener noreferrer" className="nvg-opt" data-text="Register" onClick={closeMenu}>
  Register
</a>
    </li>
        </ul>
      </nav>
    </div>
    </div>
    </div>
    
  );
}

export default Navbar;