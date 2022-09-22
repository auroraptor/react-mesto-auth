import React from "react"
import Header from "./Header"
import Input from "./Input"

function Login(props) {

  return (
    <div>
    <Header link="/sign-up" text="Регистрация"/>
    <form
    className={`form_theme_white ${props.name}-form`}
    name="login"
    onSubmit={props.onSubmit}>
      <label className="heading__register">Вход</label>
        <Input type="email" id="email" name="email"
            placeholder="Email"  minLength="false" maxLength="false"/>
        <Input type="password" id="password" name="password"
            placeholder="Пароль" minLength="8" maxLength="40"/>
        <button type="submit" className="form__submit-button_theme_white" value="disable">Войти</button>
    </form>
    </div>)
}

export default Login
