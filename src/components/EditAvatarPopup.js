import {useRef, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup(props) {
  const { onUpdateAvatar } = props;
  const inputRef = useRef();
  const [ buttonText, setButtonText ] = useState('Сохранить');


  function handleSubmit(evt) {
    evt.preventDefault();
    setButtonText('Сохранение...');
    onUpdateAvatar({
      avatar: inputRef.current.value,
    })
  }

  useEffect(() => {
    inputRef.current.value='';
    setButtonText('Сохранить');
  }, [props.isOpen]);

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" {...props} buttonTextContent={buttonText} onSubmit={handleSubmit}>
      <Input type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" minLength="false" maxLength="false" ref={inputRef}/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
