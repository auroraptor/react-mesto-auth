import React, { useState, useEffect } from 'react';
import api from '../utils/api';

import { Link } from 'react-router-dom';
import '../index.css';

function Header(props) {
    return (
    <header className="header page__header section">
        <a href="#" className="logo header__logo"></a>
        <p>{props?.email}</p>
        <Link className="nav" to={props?.link} onClick={() => localStorage.removeItem('jwt')}>{props?.text}</Link>

    </header>
    );
}

export default Header
