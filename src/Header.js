import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import { projectAuth } from './fbConfig';

function Header() {
  // const [{ basket }] = useStateValue()
  // const [ state, dispatch ] = useStateValue()

  const [{ basket, user }] = useStateValue();
  // console.log(basket)

  const login = () => {
    if(user) {
      projectAuth.signOut()
    }
  }
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
        <Link to={!user && "/login"} className="header__link">
          <div
          onClick={login}
          className="header__option">
            <span className="header__option1">Hello{user ? `, ${user.email}` : ``}!</span>
            <span className="header__option2">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>
        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div
          className="header__option">
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
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping icon */}
            <ShoppingCartIcon />
            {/* number of items in the basket */}
            <span className="header__option2" id="basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
      {/* basket icon with number */}
    </nav>
  )
}

export default Header
