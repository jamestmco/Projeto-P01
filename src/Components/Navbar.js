import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link";
import './Navbar.css';
import "./Button.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className="nav-logo">
          <Link smooth to='#home' className='navbar-logo' onClick={closeMobileMenu}>
            OST Central
            <i class='fas fa-record-vinyl' />
          </Link>
          </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link smooth to='#Cards-VG' className='nav-links' onClick={closeMobileMenu}>
                Games OST
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth to='#Cards-M' className='nav-links' onClick={closeMobileMenu}>
                Movies OST
              </Link>
            </li>
            <li className='nav-item'>
              <Link smooth to='#footer' className='nav-links' onClick={closeMobileMenu}>
                Contacts
              </Link>
            </li>

            {/*<li>
              <Link
                to='/'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>*/}

          </ul>
          {/*<button className="btn-nav">SIGN UP</button>*/}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
