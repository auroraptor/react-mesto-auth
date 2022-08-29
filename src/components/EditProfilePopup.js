import React from "react";
import Input from "./Input";
import PopupWithForm from "./PopupWittForm";

function EditProfilePopup(props) {
  const {isOpen, onClose} = props

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isOpen} onClose={onClose}buttonTextContent="Сохранить">
     <Input type="text" id="name" name="name" placeholder="Имя" minLength="2" maxLength="40"></Input>
     <Input type="text" id="about" name="about" placeholder="О себе" minLength="2" maxLength="200"></Input>
  </PopupWithForm>
  )
}

export default EditProfilePopup;
