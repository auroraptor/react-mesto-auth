import React from 'react';
import '../index.css';

function Card({card, onCardClick}) {

  const {name, link, likes} = card;

  function handleClick() {
  onCardClick(card);
  }

  return (
  <article className="element">
   <button className="element__delete-button"></button>
   <img src={link} alt={name} className="element__photo" onClick={handleClick}/>
   <div className="element__container">
     <h2 className="element__title">{name}</h2>
     <button className="like-button"></button>
     <p className="element__likes">{likes}</p>
   </div>
  </article>
  )
}

export default Card;
