import React from "react";
import PopupWithForm from "./PopupWittForm";
import Input from "./Input";

function EditAvatarPopup(props) {
  const { onUpdateAvatar } = props;
  const inputRef = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    })
  }

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" {...props} buttonTextContent="Сохранить" onSubmit={handleSubmit}>
      <Input type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" minLength="false" maxLength="false" ref={inputRef}/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
