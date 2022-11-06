import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmPopup = (props) => {
  const { onCardDelete, card } = props
  const [ buttonText, setButtonText ] = useState('Сохранить');

  useEffect(() => setButtonText('Да'), [props.isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setButtonText('Удаление...');
    onCardDelete(card);
  }
  return (
    <PopupWithForm {...props} onSubmit={handleSubmit} buttonTextContent={buttonText}/>
  )
}

export default ConfirmPopup;
