import React from 'react'
//import {Button} from "./Button"
import "./Inicio.css"
import "../App.css"
import "./Button.css"

function Inicio() {
    return (
        <div className="seccao-container-inicio">
            <h1>OST Central</h1>
            <p>Selecione um franchise entre os apresentados abaixo</p>
            <div className="seccao-botoes">
                {/*<Button className="botoes" buttonStyle="btn--outline" buttonSize="btn--large" href="Cards">
                    Soundtracks
                </Button>*/}
                <button className="btn-page" href="Cards">Soundtracks</button>
            </div>
        </div>
    )
}

export default Inicio
