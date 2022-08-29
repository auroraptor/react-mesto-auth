import React from "react";
import PopupWithForm from "./PopupWittForm";
import Input from "./Input";

function AddPlacePopup(props) {
  const { onAddPlace } = props;
  const [ name, setName ] = React.useState('');
  const [ link, setLink] = React.useState('');

  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  function handleLinkChange(evt) {
    setLink(evt.target.value)
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm name="new-item" title="Новое место" buttonTextContent="Сохранить" {...props} onSubmit={handleSubmit}>
    <>
      <Input type="text" id="place" name="name" placeholder="Название"  minLength="2" maxLength="30" value={name} onChange={handleNameChange}/>
      <Input type="url" id="link" name="link" placeholder="Ссылка на картинку" minLength="false" maxLength="false" value={link} onChange={handleLinkChange}/>
    </>
    </PopupWithForm>
  )
}

export default AddPlacePopup;
