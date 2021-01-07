import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function CardsVG() {
    return (
        <div className="cards">
            <h1>Original Soundtracks</h1>
            <div className="card_container">
                <div className="card_wrapper">
                   <ul className="card_items">
                        <CardItems
                        src="imagens/Bury_the_Light_cover.jpg"
                        text="Bury The Light"
                        label="DMC5SE"
                        path="/services"
                        />
                        <CardItems
                        src="imagens/Bloodborne_ost.jpg"
                        text="Bloodborne OST"
                        label="Bloodborne"
                        path="/products"
                        />
                        <CardItems
                        src="imagens/Automata_ost.jpg"
                        text="Nier Automata OST"
                        label="Nier Automata"
                        path="/sign-up"
                        />
                   </ul>
                </div>
            </div>   
        </div>
    )
}

export default CardsVG