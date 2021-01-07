import React from 'react'
import "../../App.css"
import Inicio from "../Inicio"
import CardsVG from "../Cards-VG"
import Midpage from "../Midpage"
import CardsM from "../Cards-M"
import Footer from "../Footer"

function Homepage(){
    
    return (
    <>
        <Inicio />
        <CardsVG />
        <Midpage />
        <CardsM />
        <Footer />
    </>
    )
}

export default Homepage