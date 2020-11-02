import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import {Button} from './Button'

function Navbar() {
    const[hambclick, posthambaction] = useState(false);

    const hambdo = () => posthambaction(!hambclick);

    const closeWhileMobile = () => posthambaction(false);

const [button, setButton] = useState(true)

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false)
    }else{
        setButton(true)
    }
}

window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL  <i className="fab fa-typo3"></i>
                    </Link>
                    <div className="hamb-menu" onClick={hambdo}>
                        <i className={hambclick ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={hambclick ? 'nav-menu active' : 'nav-menu'}>
                        <li  className="nav-item">
                            <Link to="/" className="nav-links" onClicl={closeWhileMobile}>
                                Home
                            </Link>
                        </li>
                        <li  className="nav-item">
                            <Link to="/portfolio" className="nav-links" onClicl={closeWhileMobile}>
                                Portfolio
                            </Link>
                        </li>
                        <li  className="nav-item">
                            <Link to="/skills" className="nav-links" onClicl={closeWhileMobile}>
                                Skills
                            </Link>
                        </li>
                        <li  className="nav-item">
                            <Link to="/sign-up" className="nav-links-mobile" onClicl={closeWhileMobile}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">Sign Up</Button>}
                </div>
            </nav>       
        </>
    )
}

export default Navbar
