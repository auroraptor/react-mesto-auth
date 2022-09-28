import { useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function AddPlacePopup(props) {
  const { onAddPlace } = props;
  const [formValues, setFormValues] = useState({ name: "", link: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((_) => ({ ..._, [name]: value }));
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace(formValues);
  }

  useEffect(() => {
    setFormValues({ name: "", link: "" });
  }, [props.isOpen]);

  return (
    <PopupWithForm
      name="new-item"
      title="Новое место"
      buttonTextContent="Сохранить"
      {...props}
      onSubmit={handleSubmit}
    >
      <>
        <Input
          type="text"
          id="place"
          name="name"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          value={formValues?.name}
          onChange={handleChange}
        />
        <Input
          type="url"
          id="link"
          name="link"
          placeholder="Ссылка на картинку"
          minLength="false"
          maxLength="false"
          value={formValues?.link}
          onChange={handleChange}
        />
      </>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
