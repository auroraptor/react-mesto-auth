import { useContext } from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const {card, onCardClick, onCardLike, onCardDelete} = props;
  const currentUser = useContext(CurrentUserContext);

  const isOwner = card.owner._id === currentUser._id;
  const isLiked = card.likes.some(i => i._id === currentUser._id); // сейчас isLiked лежит просто в жесткой переменной,а так быть не должно

  function handleClick() {
  onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
  <article className="element">
   {isOwner && (<button className="element__delete-button" onClick={handleDeleteClick}></button>)}
   <img src={card.link} alt={card.name} className="element__photo" onClick={handleClick}/>
   <div className="element__container">
     <h2 className="element__title">{card.name}</h2>
     <button className={`like-button ${isLiked && 'like-button_active'}`} onClick={handleLikeClick}></button>
     <p className="element__likes">{card.likes.length}</p>
   </div>
  </article>
  )
}

export default Card;
