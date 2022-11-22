import React from "react";
import LoadingSpinner from "./Spinner/Spinner";
import "../index.css";

function PopupWithForm(props) {
  const {
    name,
    title,
    isOpen,
    onClose,
    children,
    buttonTextContent,
    onSubmit,
    isLoading
  } = props;

  return (
    <div className={`popup ${name}-popup ${isOpen && `popup_opened`}`}>
      <LoadingSpinner className={`spinner-container ${isLoading && `visible`}`} />
      <div className="popup__container">
        <button
          type="button"
          className="popup__close-icon"
          aria-label="Закрыть"
          onClick={onClose}
        ></button>
        <form
          className={`form ${name}-form popup__form`}
          name="profile-form"
          onSubmit={onSubmit}
        >
          <div className="container">
            <label className="heading">{title}</label>
            <>{children}</>
            <button
              type="submit"
              className="form__submit-button popup__button"
              value="disable"
            >
              {buttonTextContent}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
