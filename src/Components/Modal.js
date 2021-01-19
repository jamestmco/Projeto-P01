import React, {useRef,useEffect, useCallback} from 'react'
import "./Modal.css"
import fundo from "../imagens/DMC5.png"

    export const Modal = ({ showModal, setShowModal }) => {
        const modalRef = useRef();
        
        const closeModal = e => {
          if (modalRef.current === e.target) {
            setShowModal(false);
          }
        };

    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );

        return (
            <div>
                {showModal ? (
                <div className="Background" onClick={closeModal} ref={modalRef}>
                    <div className="ModalWrapper" showModal={showModal}>
                        <div className="ModalImg" src={fundo} />
                        <div className="ModalContent">
                            <h1>Informações carta</h1>
                            <p>Blá blá temporário.</p>
                            <button>Botão</button>
                        </div>
                    <div className="CloseModalButton"
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}/>
                    </div>
                </div>
                ) : null}
            </div>
        )
    }
