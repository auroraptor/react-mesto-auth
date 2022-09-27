import {memo, useState} from 'react';
import Logo from './Logo';
import useWindowSize from '../hooks/useWindowSize';
import '../index.css';
import NavBar from './NavBar';

const Header = (props) => {
  const size = useWindowSize();
  const [click, setClick] = useState(false)
  const handleClick = () => {
    setClick(!click);
  }

    return (
    <header className="page__header section">
      {click &&
      <div className="header_type_slider">
        <NavBar {...props} click={click}/>
      </div>}
      <div className="header">
        <Logo />
        {size.width <= 450 && props.text === "Выйти"
        ?
        <div className={click ? "icon-one active-one" : "icon-one"} onClick={handleClick}>
          <div className="hamburger hamburger-one" />
        </div>
        :
        <NavBar {...props}/>
        }
      </div>
    </header>
    );
}

export default memo(Header);
