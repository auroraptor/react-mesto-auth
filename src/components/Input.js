function Input(props) {
  const {type, id, name, placeholder, minLength, maxLength} = props;
  return (
    <>
    <input
     type={type}
     id={id}
     name={name}
     className={`form__item popup__input form__item_input_${id}`}
     placeholder={placeholder}
     minLength={type==="text" && minLength}
     maxLength={type==="text" && maxLength}
     autoComplete="off"
     required />
    <span
     className={`popup__error ${id}-error`} />
    </>
  )
}

export default Input;
