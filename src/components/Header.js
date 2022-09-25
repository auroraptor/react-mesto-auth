import {memo} from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import '../index.css';

const Header = (props) => {
  const removeJwt = () => localStorage.removeItem('jwt');
    return (
    <header className="header page__header section">
        <Logo />
        <div className="nav">
          <p className="nav__email">{props?.email}</p>
          <Link className={`nav__link ${props?.email && 'nav__link_logged-in'}`} to={props?.link} onClick={removeJwt}>{props?.text}</Link>
        </div>
    </header>
    );
}

export default memo(Header);
