import { useState } from "react";
import Header from "./Header";
import Input from "./Input";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header link="/react-mesto-auth/sign-up" text="Регистрация" />
      <form
        className={`form_theme_white login-form`}
        name="login"
        onSubmit={handleSubmit}
      >
        <label className="heading__register">Вход</label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          minLength="false"
          maxLength="false"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          id="password"
          name="password"
          placeholder="Пароль"
          minLength="8"
          maxLength="40"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="form__submit-button_theme_white"
          value="disable"
        >
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
