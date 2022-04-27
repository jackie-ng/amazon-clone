import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <img
      className="header__logo"
      src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
      alt="logo" />
      {/* search box */}
      {/* 3 links */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/checkout">Check Out</Link>
        </li>
      </ul>
      {/* basket icon with number */}
    </nav>
  )
}

export default Header
