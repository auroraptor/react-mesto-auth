import React from "react";
import '../index.css';

function PopupWithForm({ name, title, isOpened, children, buttonTextContent}) {

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
  <div className={`popup ${name}-popup ${isOpened && `popup_opened`}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-icon" aria-label="Закрыть" onClick={onClose}></button>
      <form className={`form ${name}-form popup__form`} name="profile-form" noValidate>
          <div className="container">
            <label className="heading">{title}</label>
            <>{children}</>
            <button type="submit" className="form__submit-button popup__button" value="disable" disabled>{buttonTextContent}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
