import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWittForm";
import Input from "./Input";

function EditAvatarPopup(props) {
  const { onUpdateAvatar, buttonText } = props;
  const inputRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();

    onUpdateAvatar({
      avatar: inputRef.current.value,
    })
  }

  useEffect(() => {
    inputRef.current.value='';
  }, [props.isOpen]);

  return (
    <PopupWithForm name="avatar" title="Обновить аватар" {...props} buttonTextContent={buttonText} onSubmit={handleSubmit}>
      <Input type="url" id="avatar" name="avatar" placeholder="Ссылка на картинку" minLength="false" maxLength="false" ref={inputRef}/>
    </PopupWithForm>
  )
}

export default EditAvatarPopup
