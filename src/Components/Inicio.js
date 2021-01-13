import React from 'react'
import "./Inicio.css"
import "../App.css"
import "./Button.css"
import {HashLink as Link} from "react-router-hash-link"

function Inicio() {
    return (
        <div className="seccao-container-inicio" id="home">
            <h1>OST Central</h1>
            <p>Bandas sonoras de filmes, videojogos, etc.</p>
            <div className="seccao-botoes">
                <Link smooth to='#Cards-VG'><button className="btn-page">Games OST</button></Link>
            </div>
        </div>
    )
}

export default Inicio
