import React from 'react'
import {Link} from 'react-router-dom'

function CardItems(props) {
    return (
        <>
        <ul className="card_item">
            <Link to={props.path} className="card_item_link">
                <figure data-category={props.label} className="card_item_pic_wrap">
                    <img src={props.src} alt="imagem" className="card_item_img">                 
                    </img>
                </figure>
                <div className="card_item_info">
                    <h5 className="card_item_text">
                        {props.text}
                    </h5>
                </div>
            </Link>
        </ul>  
        </>
    )
}

export default CardItems
/*
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;*/
