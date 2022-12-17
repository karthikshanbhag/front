import React from "react";
import './NavBar.css'
import { Link } from "react-router-dom";
import Home from "../pages/Home";
const NavBar = () => {
  return (
    <div>
       <nav>
    <div className="nav-wrapper white">
      <Link to={Home} className="brand-logo">Instagram</Link>
      <ul id="nav-mobile" className="right">
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default NavBar
