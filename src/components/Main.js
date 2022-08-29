import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';
import api from '../utils/api.js';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  function handleLikeClick(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    console.log(isLiked);

    api.like(card, isLiked)
    .then((newCard) => {
      setCards((cards) => cards.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err));
  }

  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
     return data.map(item => { return {
      name: item.name,
      link: item.link,
      likes: item.likes,
      _id: item._id,
      owner: item.owner,
    }});
    })
    .then(cards => setCards(cards))
    .catch(err => console.log(err));
  }, []);

  return (
    <main className="content">
       <section className="profile section content__section content__profile">
        <div className="profile__container">
          <div className="profile__another-container">
            <img src={currentUser.avatar} alt="Аватар" className="profile__avatar" />
            <button className="profile__button" aria-label="Нажми чтобы обновить" onClick={onEditAvatar}></button>
          </div>
          <div className="profile__description">
            <h1 className="name profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" aria-label="Изменить" onClick={onEditProfile}></button>
            <p className="about profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button className="profile__add-button add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
      </section>
      <section className="elements section content__section">
        {cards.map((card) => (<Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleLikeClick}/>))}
      </section>
    </main>
  );
}

export default Main

// Теперь нужно добавить пропс onCardLike для компонента Card и задать в него эту функцию. Также добавьте в Card обработчик клика handleLikeClick и вызовите из него onCardLike с аргументом card — по аналогии с уже имеющимся обработчиком handleClick.

