import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

const ConfirmPopup = (props) => {
  // const { delete } = props

  const handleSubmit = (evt) => {
    evt.preventDefault();

    // delete()
  }
  return (
    <PopupWithForm {...props} onSubmit={handleSubmit}/>
  )
}

export default ConfirmPopup;
