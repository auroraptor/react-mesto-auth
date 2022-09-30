import { React } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const Logo = () => {
  return (
    <Link to="/react-mesto-auth/">
      <div className="logo header__logo" />
    </Link>
  );
};

export default Logo;
