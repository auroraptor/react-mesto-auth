import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";

function Register() {
  return (
    <div>
    <Header link="/sign-in" text="Войти" elem={<Login />}/>
    </div>)
}

export default Register;
