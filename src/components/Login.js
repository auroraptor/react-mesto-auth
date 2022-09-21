import React from "react"
import Header from "./Header"
import Register from "./Register"

function Login() {

  return (
    <div>
    <Header link="/sign-up" text="Регистрация" elem={<Register />}/>
    </div>)
}

export default Login
