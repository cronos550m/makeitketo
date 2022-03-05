import './gift.css';
import React from 'react';
import gift from '../../assets/img/gift.jpg'

function Gift() {
  return (
    <div className="gift">
      <div className="giftSec1">
      <img className="imgGift" src={gift} alt="productos" /> 
      </div>
      <div className="giftSec2">
      <h3 className="regalos">regalos</h3>
      <p></p>
      <p className="regaloTexto">bla bla bla</p>
      <p className="regaloTexto">bla bla bla</p>
      </div>
    </div>
  );
}

export default Gift;