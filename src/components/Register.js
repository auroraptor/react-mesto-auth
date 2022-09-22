import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Input from "./Input";

function Register(props) {
  return (
    <>
    <Header link="/sign-in" text="Войти" elem={<Login />}/>
    <form
    className={`form_theme_white ${props.name}-form`}
    name="register"
    onSubmit={props.onSubmit}>
      <label className="heading__register">Регистрация</label>
          <Input type="email" id="email" name="email"
            placeholder="Email"  minLength="false" maxLength="false"/>
          <Input type="password" id="password" name="password"
            placeholder="Пароль" minLength="8" maxLength="40"/>
        <button type="submit" className="form__submit-button_theme_white" value="disable">Зарегестрироваться</button>
    </form>
    <div className="help-text">
      <span>Уже зарегестрированы? </span>
      <Link className="help-text__link" to="/sign-in">Войти</Link>
    </div>
    </>)
}

export default Register;
