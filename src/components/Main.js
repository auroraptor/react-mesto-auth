import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import '../index.css';
import api from '../utils/api.js';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

  const [cards, setCards] = React.useState([]);

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getInitialCards()
    .then((data) => {
     return data.map(item => { return {
      name: item.name,
      link: item.link,
      likes: item.likes,
      id: item._id,
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
        {cards.map((card) => (<Card card={card} key={card.id} onCardClick={onCardClick}/>))}
      </section>
    </main>
  );
}

export default Main
