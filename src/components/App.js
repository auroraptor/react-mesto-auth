import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWittForm';
import ImagePopup from './ImagePopup';
import Input from './Input';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [ isEditProfilePopupOpen, setEditProfilePopupOpen ] = React.useState(false);
  const [ isAddPlacePopupOpen, setAddPlacePopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState(null);

  const [ currentUser, setUser] = React.useState(CurrentUserContext);

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => setUser(res) )
    .catch((err) => console.log(err)) // TODO показать что-то вроде попапа SOMETHING GO WRONG
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card)
  };
  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };
  const handleEitProfileClick = () => {
    setEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  // аааааа я попробовала переместить useEffect keydown Escape столкнулась с дуюлированием кода в двух компонентах и миллионом ошибок в консоли, поэтому решила, что лучше будет его просто удалить >>> the enter 🌔 🚀

  return (
    <CurrentUserContext.Provider value={currentUser}>
    <div className="page"><div className="page__container">

    <Header />

    <Main onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEitProfileClick} onCardClick={handleCardClick}/>

    <Footer />

    <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpened={isEditProfilePopupOpen} onClose={closeAllPopups} buttonTextContent="Сохранить">
    <>
      <Input type="text" id="name" name="name" placeholder="Имя" minLength="2" maxLength="40"></Input>
      <Input type="text" id="about" name="about" placeholder="О себе" minLength="2" maxLength="200"></Input>
    </>
    </PopupWithForm>

    <PopupWithForm name="new-item" title="Новое место" isOpened={isAddPlacePopupOpen} onClose={closeAllPopups} buttonTextContent="Сохранить">
    <>
      <Input type="text" id="place" name="name" placeholder="Название"  minLength="2" maxLength="30" />
      <Input type="url" id="link" name="link" placeholder="Ссылка на картинку" minLength="false" maxLength="false"/>
    </>
    </PopupWithForm>

    <PopupWithForm name="avatar" title="Обновить аватар" isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups} buttonTextContent="Сохранить">
      <Input type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" minLength="false" maxLength="false"/>
    </PopupWithForm>

    <PopupWithForm name="confirm" title="Вы уверены?" onClose={closeAllPopups} buttonTextContent="Да">
    </PopupWithForm>

    <ImagePopup card={selectedCard} isOpened={handleCardClick} onClose={closeAllPopups}/>

   </div></div>
   </CurrentUserContext.Provider>
  );
}

export default App;
