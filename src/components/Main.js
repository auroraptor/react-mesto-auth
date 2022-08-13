import React from 'react';
import '../index.css';
import api from '../utils/api.js';

// В компоненте Main добавьте переменные состояния userName, userDescription и userAvatar. Используйте их в JSX.
// Импортируйте модуль api и добавьте эффект, вызываемый при монтировании компонента, который будет совершать запрос в API за пользовательскими данными. После получения ответа задавайте полученные данные в соответствующие переменные состояния.

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  // Из старого проекта скопируйте разметку карточки, находящуюся внутри тега template, и используйте её внутри JSX-итерации по массиву cards. Используйте подстановку данных элемента массива в JSX, чтобы вывести название карточки, количество лайков и указать URL изображения (как и прежде с помощью атрибута style).

  React.useEffect(() => {
    api.getUserInfo()
    .then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar);
    })
    .catch(err => console.log(err));
  },[]); // а чтобы вызвать эффект один раз надо что-то сделать

  cards.forEach(card => {
    return (
    <article class="element">
      <button class="element__delete-button"></button>
      <img src="#" alt="#" class="element__photo" style={{src: `${card.link}`, alt: `${card.name}`}}/>
      <div class="element__container">
        <h2 class="element__title">{card.name}</h2>
        <button class="like-button"></button>
        <p class="element__likes">{card.likes.length}</p>
      </div>
    </article>
    )
  })

  return (
    <main className="content">
       <section className="profile section content__section content__profile">
        <div className="profile__container">
          <div className="profile__another-container">
            {/* TODO решить какой тег использовать: либо как в задании писать и тогда вёрстку менять либо свой оставить и ничего не менять */}
            {/* <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} /> */}
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
            <button className="profile__button" aria-label="Нажми чтобы обновить" onClick={props.onEditAvatar}></button>
          </div>
          <div className="profile__description">
            <h1 className="name profile__title">{userName}</h1>
            <button className="profile__edit-button" type="button" aria-label="Изменить" onClick={props.onEditProfile}></button>
            <p className="about profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>
      <section className="elements section content__section"></section>
    </main>
  );
}

export default Main
