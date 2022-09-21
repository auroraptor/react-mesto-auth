import React from "react"
import Header from "./Header"
import Register from "./Register"

function Login(props) {

  return (
    <div>
    <Header link="/sign-up" text="Регистрация" elem={<Register />}/>
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
    </div>)
}

export default Login
