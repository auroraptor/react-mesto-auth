import React from "react";
import '../index.css';
import closeAllPopups from './App.js';

function ImagePopup({card, onClose}) {

  // DRY этот код дублируется в 2 компонентах и наверн в следующей работе все будет красиво, но не сразу >>> the enter 👾
  React.useEffect(() => {
    document.addEventListener('keydown', (evt) => {
      evt.key === 'Escape' && closeAllPopups();
    });

    return () => {
      document.removeEventListener('keydown', closeAllPopups);
    }
  });

return (
  <div className={`popup image-zoomed-popup ${card && `popup_opened`}`}>
      <div className="popup__yet-another-container">
      <button className="popup__close-icon popup__close-button"  onClick={onClose}></button>
      <figure className="popup__figure">
        <img src={card && card.link} alt={card && `Изображение ${card.name}`} className="popup__image" />
        <figcaption className="popup__caption">{card && card.name}</figcaption>
      </figure>
      </div>
    </div>
)
}

export default ImagePopup
