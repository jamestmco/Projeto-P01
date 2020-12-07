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
                        <h2>Sobre "nós"</h2>
                        <Link to="/products">Um</Link>
                        <Link to="/services">Dois</Link>
                        <Link to="/signup">Três</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Sobre "nosotros"</h2>
                        <Link to="/products">Uno</Link>
                        <Link to="/services">Dos</Link>
                        <Link to="/signup">Tres</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Sobre "nous"</h2>
                        <Link to="/products">Un</Link>
                        <Link to="/services">Deux</Link>
                        <Link to="/signup">Troix</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
