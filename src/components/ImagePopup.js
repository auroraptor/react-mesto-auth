import React from "react";
import '../index.css';

function ImagePopup() {
return (
  <div className="popup image-zoomed-popup">
      <div className="popup__yet-another-container">
      <button className="popup__close-icon popup__close-button"></button>
      <figure className="popup__figure">
        <img src="#" alt="#" className="popup__image" />
        <figcaption className="popup__caption"></figcaption>
      </figure>
      </div>
    </div>
)
}

export default ImagePopup
