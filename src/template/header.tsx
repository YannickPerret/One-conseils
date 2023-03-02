import React from 'react';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt='logo' className='header__logo-img' width="100%" height="auto" />
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li className="header__menu-item"><a href="#">Accueil</a></li>

          <li className="header__menu-item header__menu-item--has-dropdown">
            <a href="#">Nos services</a>
            <ul className="header__submenu">
              <li><Link to="/assurance">Assurances</Link></li>
              <li><a href="#2">Comptabilité & Administration</a></li>
              <li><a href="#3">Immobilier</a></li>
              <li><a href="#4">Informatique</a></li>
            </ul>
          </li>
          <li className="header__menu-item">
            <a href="#">Fonctionnement</a>
          </li>

          <li className="header__menu-item">
            <a href="#">Philisophie</a>
          </li>
          <li className="header__menu-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
