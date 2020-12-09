import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">     
                    Junta-te à junção das junções
                </p>
                <p className="footer-subscription-text">     
                    Podes desjuntar-te à junção das junções quando quiseres
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="mail bonito" className="footer-input"></input>
                        <Button buttonStyle="btn--outline">Subcrever</Button>
                    </form>
                </div>
            </section>

            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Primeiro</h2>
                        <Link to="/products">Um</Link>
                        <Link to="/services">Dois</Link>
                        <Link to="/signup">Três</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Segundo"</h2>
                        <Link to="/products">Uno</Link>
                        <Link to="/services">Dos</Link>
                        <Link to="/signup">Tres</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Terceiro</h2>
                        <Link to="/products">Un</Link>
                        <Link to="/services">Deux</Link>
                        <Link to="/signup">Troix</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Quarto</h2>
                        <Link to="/products">One</Link>
                        <Link to="/services">Two</Link>
                        <Link to="/signup">Three</Link>
                    </div>
                </div>
            </div>

            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" class="social-logo">
                            Tiago<i className="fab fa-typo3"/>
                        </Link>
                    </div>
                    <small className="website-icons">TIAGO @ 2020</small>
                    <div className="social-icons">
                        <Link to="/" className="social-icon-link instagram">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="/" className="social-icon-link twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link to="/" className="social-icon-link facebook">
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Footer
