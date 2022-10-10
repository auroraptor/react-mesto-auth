import React from "react";
import "../index.css";

function ImagePopup({ card, onClose, isOpened }) {
  return (
    <div
      className={`popup popup_with-image image-zoomed-popup ${
        isOpened ? `popup_opened` : ''
      }`}
    >
      <div className="popup__yet-another-container">
        <button
          className="popup__close-icon popup__close-button"
          onClick={onClose}
        ></button>
        <figure className="popup__figure">
          <img
            src={card?.link}
            alt={card && `Изображение ${card.name}`}
            className="popup__image"
          />
          <figcaption className="popup__caption">{card?.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;
