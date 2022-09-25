import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Header(props) {
    return (
    <header className="header page__header section">
        <a href="#" className="logo header__logo"></a>
        <div className="nav">
          <p className="nav__email">{props?.email}</p>
          <Link className={`nav__link ${props?.email && 'nav__link_logged-in'}`} to={props?.link} onClick={() => localStorage.removeItem('jwt')}>{props?.text}</Link>
        </div>
    </header>
    );
}

export default Header
