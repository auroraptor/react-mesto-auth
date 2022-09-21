import React from 'react';

import { Link } from 'react-router-dom';
import '../index.css';

function Header(props) {
    return (
    <header className="header page__header section">
        <a href="#" className="logo header__logo"></a>
        <Link className="nav" to={props?.link}>{props?.text}</Link>
    </header>
    );
}

export default Header
