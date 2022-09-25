import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Header from "./Header"
import Input from "./Input"
import api from "../utils/api";

function Login() {
  const initValues = {'email': '', 'password': ''};
  const [state, setState] = useState(initValues);
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

    api.login(password, email)
    .then((data) => {
      localStorage.setItem('jwt', data.token);
      navigate('/');
    })
    .catch((err) => {
      console.log('error', err);
    });
  }

  return (
    <div>
    <Header link="/sign-up" text="Регистрация"/>
    <form
    className={`form_theme_white login-form`}
    name="login"
    onSubmit={handleSubmit}>
      <label className="heading__register">Вход</label>
        <Input type="email" id="email" name="email"
            placeholder="Email"  minLength="false" maxLength="false" value={state.value} onChange={handleChange}/>
        <Input type="password" id="password" name="password"
            placeholder="Пароль" minLength="8" maxLength="40" value={state.value} onChange={handleChange}/>
        <button type="submit" className="form__submit-button_theme_white" value="disable">Войти</button>
    </form>
    </div>)
}

export default Login
