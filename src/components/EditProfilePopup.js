import React from "react";
import Input from "./Input";
import PopupWithForm from "./PopupWittForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [ name, setName ] = React.useState('');
  const [ description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser])

  function handleNameChange(evt) {
    setName(evt.target.value)
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm name="edit-profile" title="Редактировать профиль" onSubmit={handleSubmit} {...props} buttonTextContent="Сохранить">
     <Input type="text" id="name" name="name" placeholder="Имя" minLength="2" maxLength="40" value={name} onChange={handleNameChange}></Input>
     <Input type="text" id="about" name="about" placeholder="О себе" minLength="2" maxLength="200" value={description} onChange={handleDescriptionChange}></Input>
  </PopupWithForm>
  )
}

export default EditProfilePopup;
