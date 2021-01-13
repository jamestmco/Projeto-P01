import React from 'react'
import "./Inicio.css"
import "../App.css"
import "./Button.css"
import {HashLink as Link} from "react-router-hash-link"

function Midpage() {
    return (
        <div className="seccao-container-midpage">
            <h1>OST Central</h1>
            <p>Filmes</p>
            <div className="seccao-botoes">
            <Link smooth to='#Cards-M'><button className="btn-page">Movies OST</button></Link>
            </div>
        </div>
    )
}

export default Midpage
