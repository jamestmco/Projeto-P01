import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function CardsM() {
    return (
        <div className="cards">
            <h1>Movie Soundtracks</h1>
            <div className="card_container">
                <div className="card_wrapper">
                   <ul className="card_items">
                        <CardItems
                        src="imagens/FotR.jpg"
                        text="Fellowship of the Ring"
                        label="Fellowship of the Ring"
                        path="/services"
                        />
                        <CardItems
                        src="imagens/Ttt.jpg"
                        text="The Two Towers"
                        label="The Two Towers"
                        path="/products"
                        />
                        <CardItems
                        src="imagens/TRotK.jpg"
                        text="Return of the King"
                        label="Return of the King"
                        path="/sign-up"
                        />
                   </ul>
                </div>
            </div>   
        </div>
    )
}

export default CardsM