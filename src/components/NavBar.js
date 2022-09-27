import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const NavBar = (props) => {
  return (
    <div className={props?.click ? "nav_type_slider" : "nav"}>
      <p className="nav__email">{props?.email}</p>
      <Link className={`nav__link ${props?.email && 'nav__link_logged-in'}`} to={props?.link} onClick={props.onLogOut}>{props?.text}</Link>
    </div>
  )
}

export default NavBar
