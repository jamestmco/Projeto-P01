import React from 'react'
import {Button} from "./Button"
import "./Inicio.css"
import "../App.css"

function Inicio() {
    return (
        <div className="seccao-container">
            <h1>OST Central</h1>
            <p>Selecione um franchise entre os apresentados abaixo</p>
            <div className="seccao-botoes">
                <Button className="botoes" buttonStyle="btn--outline" buttonSize="btn--large" href="Cards">
                    Soundtracks
                </Button>
            </div>
        </div>
    )
}

export default Inicio
