import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Navbar.css';
import logo from '../Files/portfolio_logo.png';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Home");
    }
    else if (location.pathname === "Project") {
      setActiveTab("Projects");
    }
    else if (location.pathname === "About") {
      setActiveTab("About");
    }
  }, [location]);

  return (
    <div className="nav">
      <img src={logo} alt="oops" className='logo' />
      <ul className="nav_elements">
        <Link to="/"><li className={`${activeTab === "Home" ? 'active' : ''}`} onClick={() => setActiveTab('Home')}>Home</li></Link>
        <Link to="/Project"><li className={`${activeTab === "Projects" ? 'active' : ''}`} onClick={() => setActiveTab('Projects')}>Projects</li></Link>
        <Link to="/About"><li className={`${activeTab === "About" ? 'active' : ''}`} onClick={() => setActiveTab('About')}>About Me</li></Link>
      </ul>
    </div>
  )
}
