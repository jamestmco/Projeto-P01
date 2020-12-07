import React from 'react'
import CardItems from './CardItems'
import "./Cards.css"

function Cards() {
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

export default Cards
/*
import React from 'react';
import './Cards.css';
import CardItem from './CardItems';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='imagens/Bury_the_Light_cover.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='imagens/Bloodborne_ost.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;*/
