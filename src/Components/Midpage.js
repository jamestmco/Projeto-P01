import React from 'react'
import {Button} from "./Button"
import "./Inicio.css"
import "../App.css"

function Midpage() {
    return (
        <div className="seccao-container-midpage">
            <h1>OST Central</h1>
            <p>Filmes</p>
            <div className="seccao-botoes">
                <Button className="botoes" buttonStyle="btn--outline" buttonSize="btn--large" href="Cards">
                    Soundtracks
                </Button>
            </div>
        </div>
    )
}

export default Midpage
