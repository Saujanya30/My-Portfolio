import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/Navbar.css';
import logo from '../Files/portfolio_logo.png';
export default function Navbar() {
  return (
    <div className="nav">
        <img src={logo} alt="oops" className='logo'/>
        <ul className="nav_elements">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Project">Projects</Link></li>
        <li><Link to="/About">About Me</Link></li>
        </ul>
    </div>
  )
}
