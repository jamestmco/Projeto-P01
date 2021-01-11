import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function CardsM() {
    return (
        <div className="cards" id="Cards-M">
            <h1>Movie Soundtracks</h1>
            <div className="card_container">
                <div className="card_wrapper">
                   <ul className="card_items">
                        <CardItems
                        src="imagens/FotR.jpg"
                        text="Placeholder Text"
                        label="Fellowship of the Ring"
                        path="/"
                        />
                        <CardItems
                        src="imagens/Ttt.jpg"
                        text="Placeholder Text"
                        label="The Two Towers"
                        path="/"
                        />
                        <CardItems
                        src="imagens/TRotK.jpg"
                        text="Placeholder Text"
                        label="Return of the King"
                        path="/"
                        />
                   </ul>
                </div>
            </div>   
        </div>
    )
}

export default CardsM