import React, {useState} from 'react'
import CardItems from './CardItems'
import "./Cards.css"
import Modal from 'react-modal'

function CardsVG() {

const [modalIsOpen, setModalIsOpen] = useState(false);

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
                        path="/Projeto-P01"
                        />
                        <CardItems
                        src="imagens/Bloodborne_ost.jpg"
                        text="Placeholder Text"
                        label="Bloodborne"
                        path="/Projeto-P01"
                        />
                        <CardItems
                        src="imagens/Automata_ost.jpg"
                        text="Placeholder Text"
                        label="Nier Automata"
                        path="/Projeto-P01"
                        onClick={()=> setModalIsOpen(true)}
                        />
                   </ul>
                
                    <div className="modal-janela">
                        <button onClick={()=> setModalIsOpen(true)}>Abrir Modal</button>
                        <Modal isOpen={modalIsOpen}>
                            <h2>Titulo</h2>
                            <p>Texto corpo</p>
                            <div>
                                <button onClick={()=> setModalIsOpen(false)}>Fechar</button>
                            </div>
                        </Modal>
                    </div>

                </div>
            </div>   
        </div>
    )
}

export default CardsVG