import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
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
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* controller header__nav */}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__option1">Hello,</span>
            <span className="header__option2">Sign In</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Returns</span>
            <span className="header__option2">& Orders</span>
          </div>
        </Link>
        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__option1">Your</span>
            <span className="header__option2">Prime</span>
          </div>
        </Link>
        {/* 4th link */}
        <Link to="/" className="header__link">
          <div className="header__optionBasket">
            {/* shopping icon */}
            <ShoppingCartIcon />
            {/* number of items in the basket */}
            <span className="header__option2" id="basketCount">0</span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
    </nav>
  )
}

export default Header
