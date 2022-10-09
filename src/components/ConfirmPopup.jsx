import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmPopup = (props) => {
  const { onCardDelete, card } = props

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onCardDelete(card); // delete()
  }
  return (
    <PopupWithForm {...props} onSubmit={handleSubmit}/>
  )
}

export default ConfirmPopup;
