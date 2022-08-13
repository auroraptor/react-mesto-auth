import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWittForm';
import ImagePopup from './ImagePopup';

function App() {

  const [ isEditProfilePopupOpen, setEditProfilePopupOpen ] = React.useState(false);
  const [ isAddPlacePopupOpen, setAddPlacePopupOpen ] = React.useState(false);
  const [ isEditAvatarPopupOpen, setEditAvatarPopupOpen ] = React.useState(false);


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
  }

  React.useEffect(() => {
    document.addEventListener('keydown', (evt) => {
      evt.key === 'Escape' && closeAllPopups();
    });

    return () => {
      document.removeEventListener('keydown', closeAllPopups);
    }
  });

  const editProfileChildren = () => {
    return (
      <>
        <input type="text" className="form__item form__item_input_name popup__input" name="name" placeholder="Имя" minLength="2" maxLength="40" required autoComplete="off" id="name" />
        <span className="popup__error name-error"></span>
        <input type="text" className="form__item form__item_input_about popup__input" name="about" placeholder="О себе" minLength="2" maxLength="200" required autoComplete="off" id="about" />
        <span className="popup__error about-error"></span>
        <button type="submit" className="form__submit-button edit-profile-form__button popup__button" value="disable" disabled></button>
      </>
    )
  }

  const addNewPlaceChildren = () => {
    return (
      <>
      <input type="text" className="form__item form__item_input_place popup__input" placeholder="Название" name="name" minLength="2" maxLength="30" autoComplete="off" id="place" required />
            <span className="popup__error place-error">span</span>
            <input type="url" className="form__item form__item_input_link popup__input" placeholder="Ссылка на картинку" name="link" autoComplete="off" id="link" required />
            <span className="popup__error link-error">span</span>
            <button type="submit" className="form__submit-button new-item-form__button popup__button" value="disable" disabled></button>
      </>
    )
  }

  const editAvatarChildren = () => {
    return (
      <>
        <input type="url" className="form__item form__item_input_avatar popup__input" placeholder="Ссылка на картинку" name="avatar" autoComplete="off" id="avatar" required />
        <span className="popup__error avatar-error">span</span>
        <button type="submit" className="form__submit-button popup__button" value="disable" disabled></button>
      </>
    )
  }

  const confirmChildren = () => {
    return (
      <button type="button" className="popup__button" id="confirm"></button>
    )
  }

  return (
    <div className="page"><div className="page__container">
    {/* TODO reorder */}

    <Header />

    <Main onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onEditProfile={handleEitProfileClick}/>

    <Footer />

    {/* TODO  children => > /< */}

    <PopupWithForm name="edit-profile" title="Редактировать профиль" children={editProfileChildren()} isOpened={isEditProfilePopupOpen} onClose={closeAllPopups}/>

    <PopupWithForm name="new-item" title="Новое место" children={addNewPlaceChildren()} isOpened={isAddPlacePopupOpen} onClose={closeAllPopups}/>

    <PopupWithForm name="avatar" title="Обновить аватар" children={editAvatarChildren()} isOpened={isEditAvatarPopupOpen} onClose={closeAllPopups}/>

    <PopupWithForm name="confirm" title="Вы уверены?" children={confirmChildren()} onClose={closeAllPopups} />

    <ImagePopup />

   </div></div>
  );
}

export default App;
