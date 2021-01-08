import React from 'react'
import "./Inicio.css"
import "../App.css"
import "./Button.css"

function Midpage() {
    return (
        <div className="seccao-container-midpage">
            <h1>OST Central</h1>
            <p>Filmes</p>
            <div className="seccao-botoes">
                <button className="btn-page" href="Midpage">Soundtracks</button>
            </div>
        </div>
    )
}

export default Midpage
