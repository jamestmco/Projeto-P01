import React, {useState} from 'react'
import CardItems from './CardItems'
import "./Cards.css"
import {Modal} from "./Modal"

function CardsVG() {

const [showModal, setShowModal] = useState(false);

const openModal = () => {setShowModal(prev => !prev);}

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

                   <button onClick={openModal}>Clicar aqui</button>
                    <Modal showModal={showModal} setShowModal={setShowModal}/>

                </div>
            </div>   
        </div>
    )
}

export default CardsVG