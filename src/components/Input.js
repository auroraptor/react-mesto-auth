import React from "react";

const Input = React.forwardRef((props, ref) => {
  const {type, id, name, placeholder, minLength, maxLength, value, onChange} = props;
  return (
    <>
    <input
     ref={ref}
     type={type}
     id={id}
     name={name}
     className={`form__item popup__input form__item_input_${id}`}
     placeholder={placeholder}
     minLength={minLength.toString()}
     maxLength={maxLength.toString()}
     autoComplete="off"
     value={value}
     onChange={onChange}
     required
     />
    <span
     className={`popup__error ${id}-error`} />
    </>
  )
})

export default Input;
