import React from 'react'
import {Button} from "./Button"
import "./SeccaoUm.css"
import "../App.css"

function SeccaoUm() {
    return (
        <div className="seccao-container">
            <video src="/videos/video-um.mp4" autoPlay loop muted />
            <h1>TIAGO OLIVEIRA</h1>
            <p>Frase bonita!</p>
            <div className="seccao-botoes">
                <Button className="botoes" buttonStyle="btn--outline" buttonSize="btn--large">
                    COMEÇAR
                </Button>
                <Button className="botoes" buttonStyle="btn--primary" buttonSize="btn--large">
                    VER VIDEO <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default SeccaoUm
