import React from "react";
import '../index.css';

function PopupWithForm(props) {

  return (
  <div className={`popup ${props.name}-popup ${props.isOpened && `popup_opened`}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-icon" aria-label="Закрыть" onClick={props.onClose}></button>
      <form className={`form ${props.name}-form popup__form`} name="profile-form" noValidate>
          <div className="container">
            <label className="heading">{props.title}</label>
            <>{props.children}</>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
