import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function CardsVG() {
    return (
        <div className="cards" id="Cards-VG">
            <h1>Game Soundtracks</h1>
            <div className="card_container">
                <div className="card_wrapper">
                   <ul className="card_items">
                        <CardItems
                        src="imagens/Bury_the_Light_cover.jpg"
                        text="Placeholder Text"
                        label="DMC5SE"
                        path="/"
                        />
                        <CardItems
                        src="imagens/Bloodborne_ost.jpg"
                        text="Placeholder Text"
                        label="Bloodborne"
                        path="/"
                        />
                        <CardItems
                        src="imagens/Automata_ost.jpg"
                        text="Placeholder Text"
                        label="Nier Automata"
                        path="/"
                        />
                   </ul>
                </div>
            </div>   
        </div>
    )
}

export default CardsVG