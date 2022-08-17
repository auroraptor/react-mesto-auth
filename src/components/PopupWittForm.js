import React from "react";
import '../index.css';

function PopupWithForm(props) {

  // DRY
  React.useEffect(() => {
    document.addEventListener('keydown', (evt) => {
      evt.key === 'Escape' && closeAllPopups();
    });

    return () => {
      document.removeEventListener('keydown', closeAllPopups);
    }
  });

  return (
  <div className={`popup ${props.name}-popup ${props.isOpened && `popup_opened`}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-icon" aria-label="Закрыть" onClick={props.onClose}></button>
      <form className={`form ${props.name}-form popup__form`} name="profile-form" noValidate>
          <div className="container">
            <label className="heading">{props.title}</label>
            <>{props.children}</>
            <button type="submit" className="form__submit-button popup__button" value="disable" disabled>{props.buttonTextContent}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
