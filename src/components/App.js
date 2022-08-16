import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWittForm';
import ImagePopup from './ImagePopup';
import { editProfileChildren, addNewPlaceChildren, editAvatarChildren, confirmChildren } from '../utils/utils';

function App() {

  const [ isEditProfilePopupOpen, setEditProfilePopupOpen ] = React.useState(false);
  const [ isAddPlacePopupOpen, setAddPlacePopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = React.useState(false);
  const [ selectedCard, setSelectedCard ] = React.useState(null);

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

  React.useEffect(() => {
    document.addEventListener('keydown', (evt) => {
      evt.key === 'Escape' && closeAllPopups();
    });

    return () => {
      document.removeEventListener('keydown', closeAllPopups);
    }
  });

  return (
    <div className="page"><div className="page__container">

    <Header />

    <Main onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEitProfileClick} onCardClick={handleCardClick}/>

    <Footer />

    <PopupWithForm name="edit-profile" title="Редактировать профиль" children={editProfileChildren()} isOpened={isEditProfilePopupOpen} onClose={closeAllPopups}/>

    <PopupWithForm name="new-item" title="Новое место" children={addNewPlaceChildren()} isOpened={isAddPlacePopupOpen} onClose={closeAllPopups}/>

    <PopupWithForm name="avatar" title="Обновить аватар" children={editAvatarChildren()} isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups}/>

    <PopupWithForm name="confirm" title="Вы уверены?" children={confirmChildren()} onClose={closeAllPopups} />

    <ImagePopup card={selectedCard} isOpened={handleCardClick} onClose={closeAllPopups}/>

   </div></div>
  );
}

export default App;
