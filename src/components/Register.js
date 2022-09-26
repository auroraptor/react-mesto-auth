import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Input from "./Input";
import api from "../utils/api";
import InfoTooltip from "./InfoTooltip";

function Register(props) {
  const [state, setState] = useState({'email': '', 'password': ''});
  // const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  // const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const {name, value} = evt.target;
    setState(_ => ({
      ..._,
      [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const {email, password} = state;

    props.onRegister(email, password);

    // api.register(password, email)
    // .then(() => setSuccess(true))
    // .catch((err) => {
    //   setSuccess(false);
    //   console.log('error', err);
    // })
    // .finally(() => setInfoTooltipOpen(true));
  }

  // useEffect(() => {
  //   if (!props?.isOpen && props?.success) navigate('/sign-in');
  // }, [props?.isOpen, props?.success]);

  return (
    <>
    <Header link="/sign-in" text="Войти" elem={<Login />}/>
    <form
    className={`form_theme_white register-form`}
    name="register"
    onSubmit={handleSubmit}>
      <label className="heading__register">Регистрация</label>
          <Input type="email" id="email" name="email"
            placeholder="Email"  minLength="false" maxLength="false" value={state.value} onChange={handleChange}/>
          <Input type="password" id="password" name="password"
            placeholder="Пароль" minLength="8" maxLength="40" value={state.value} onChange={handleChange}/>
        <button type="submit" className="form__submit-button_theme_white">Зарегестрироваться</button>
    </form>
    <div className="help-text">
      <span>Уже зарегестрированы? </span>
      <Link className="help-text__link" to="/sign-in">Войти</Link>
    </div>
    <InfoTooltip {...props} onClick={() => {props.closeInfoTooltip(false)}}/>
    </>)
}

export default Register;
