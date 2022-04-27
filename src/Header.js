import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

function Header() {
  return (
    <nav className="header">
      {/* Logo on the left */}
      <Link to="/">
      <img
      className="header__logo"
      src="https://bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"
      alt="logo" />
      </Link>
      {/* search box + search icon */}
      <div className="header__search">
      <input type="text" className="header__searchInput" />
      <SearchIcon className="header__searchIcon"/>
      </div>
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
