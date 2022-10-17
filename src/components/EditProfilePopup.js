import { useState, useEffect, useContext } from "react";
import Input from "./Input";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ buttonText, setButtonText ] = useState('Сохранить');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
    setButtonText('Сохранить');
  }, [currentUser, props.isOpen]);

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleDescriptionChange(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setButtonText('Сохранение...');
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="edit-profile"
      title="Редактировать профиль"
      onSubmit={handleSubmit}
      {...props}
      buttonTextContent={buttonText}
    >
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={handleNameChange}
      ></Input>
      <Input
        type="text"
        id="about"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={handleDescriptionChange}
      ></Input>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
