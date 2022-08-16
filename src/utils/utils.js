const addButtonImage = new URL('../images/__add-button.svg', import.meta.url);
const avatarImage = new URL('../images/__avatar.jpg', import.meta.url);
const closeIconImage = new URL('../images/__close-icon.svg', import.meta.url);
const editButtonImage = new URL('../images/__edit-button.svg', import.meta.url);
const likeActiveImage = new URL('../images/__like_active.svg', import.meta.url);
const likeDisabledImage = new URL('../images/__like_disabled.svg', import.meta.url);
const logoColorBlackImage = new URL('../images/__logo_color_black.svg', import.meta.url);
const logoColorWhiteImage = new URL('../images/__logo_color_white.svg', import.meta.url);
const moveImage = new URL('../images/__move.svg', import.meta.url);

const images = [
  {name: 'add button', image: addButtonImage},
  {name: 'avatar', image: avatarImage},
  {name: 'close icon', image: closeIconImage},
  {name: 'edit button', image: editButtonImage},
  {name: 'like', image: likeActiveImage},
  {name: 'dislike', image: likeDisabledImage},
  {name: 'black logo', image: logoColorBlackImage},
  {name: 'white logo', image: logoColorWhiteImage},
  {name: 'move', image: moveImage},
]

const configPopupWithConfirm = {
  selector: '.confirm-popup',
  buttonSelector: '.popup__button',
  buttonTextContent: 'Да',
  buttonLoadingTextContent: 'Удаление...',
};

const configPopupEditAvatar = {
  selector: '.avatar-popup',
  formSelector: '.form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button',
  buttonTextContent: 'Сохранить',
  buttonLoadingTextContent: 'Сохранение...',
};

const configPopupEditProfile = {
  selector: '.profile-popup',
  formSelector: '.form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button',
  buttonTextContent: 'Сохранить',
  buttonLoadingTextContent: 'Сохранение...',
}

const configPopupAddNewItem = {
  selector: '.new-item-popup',
  formSelector: '.form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__button',
  buttonTextContent: 'Сохранить',
  buttonLoadingTextContent: 'Сохранение...',
}

const editProfileChildren = () => {
  return (
    <>
      <input type="text" className="form__item form__item_input_name popup__input" name="name" placeholder="Имя" minLength="2" maxLength="40" required autoComplete="off" id="name" />
      <span className="popup__error name-error"></span>
      <input type="text" className="form__item form__item_input_about popup__input" name="about" placeholder="О себе" minLength="2" maxLength="200" required autoComplete="off" id="about" />
      <span className="popup__error about-error"></span>
      <button type="submit" className="form__submit-button edit-profile-form__button popup__button" value="disable" disabled>{configPopupEditProfile.buttonTextContent}</button>
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
          <button type="submit" className="form__submit-button new-item-form__button popup__button" value="disable" disabled>{configPopupAddNewItem.buttonTextContent}</button>
    </>
  )
}

const editAvatarChildren = () => {
  return (
    <>
      <input type="url" className="form__item form__item_input_avatar popup__input" placeholder="Ссылка на картинку" name="avatar" autoComplete="off" id="avatar" required />
      <span className="popup__error avatar-error">span</span>
      <button type="submit" className="form__submit-button popup__button" value="disable" disabled>{configPopupEditAvatar.buttonTextContent}</button>
    </>
  )
}

const confirmChildren = () => {
  return (
    <button type="button" className="popup__button" id="confirm">{configPopupWithConfirm.buttonTextContent}</button>
  )
}

export { editProfileChildren, addNewPlaceChildren, editAvatarChildren, confirmChildren }



