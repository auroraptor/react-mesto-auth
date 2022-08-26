import React from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id);

  function handleClick() {
  onCardClick(card);
  }

  return (
  <article className="element">
   {isOwner && (<button className="element__delete-button"></button>)}
   {/* <button className="element__delete-button"></button> */}
   <img src={card.link} alt={card.name} className="element__photo" onClick={handleClick}/>
   <div className="element__container">
     <h2 className="element__title">{card.name}</h2>
     <button className={`like-button ${isLiked && 'like-button_active'}`}></button>
     <p className="element__likes">{card.likes.length}</p>
   </div>
  </article>
  )
}

export default Card;
