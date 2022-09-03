import {useRef, useEffect, useState} from "react";
import PopupWithForm from "./PopupWittForm";
import Input from "./Input";

function EditAvatarPopup(props) {
  const { onUpdateAvatar } = props;
  const inputRef = useRef();
  const [ buttonTextContent, setButtonTextContent] = useState("Сохранить")

  function handleSubmit(evt) {
    evt.preventDefault();
    setButtonTextContent("Сохранение")

    onUpdateAvatar({
      avatar: inputRef.current.value,
    })
  }

  useEffect(() => {
    inputRef.current.value='';
    setButtonTextContent("Сохранить");
  }, [props.isOpen]);

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" {...props} buttonTextContent={buttonTextContent}onSubmit={handleSubmit}>
      <Input type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" minLength="false" maxLength="false" ref={inputRef}/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
