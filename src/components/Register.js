import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function Register(props) {
  return (
    <>
    <Header link="/sign-in" text="Войти" elem={<Login />}/>
    <form
    className={`form_theme_white ${props.name}-form`}
    name="profile-form"
    onSubmit={props.onSubmit}>
      <label className="heading__register">{props.title}</label>
        <>{props.children}</>
        <button
        type="submit"
        className="form__submit-button_theme_white"
        value="disable">
          {props.buttonTextContent}
        </button>
    </form>
    <div className="help-text">
      <span>Уже зарегестрированы? </span>
      <Link className="help-text__link" to="/sign-in">Войти</Link>
    </div>
    </>)
}

export default Register;
