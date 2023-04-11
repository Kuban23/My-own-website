import React from 'react';
import { FaLinkedin, FaTelegram, FaGoodreads, FaGithubSquare } from 'react-icons/fa';

import './Navbar.scss';

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <h3>АE</h3>
      </div>
      <ul className="nav__links">
        <li>
          <a className="active-link" href="#home">Главная</a>
        </li>
        <li>
          <a href="#about">Обо мне</a>
        </li>
        <li>
          <a href="#skills">Мой stack</a>
        </li>
        <li>
          <a href="#work">Проекты</a>
        </li>
        <li>
          <a href="#contact">Обратная связь</a>
        </li>
      </ul>
      <div className="nav__socialIcons">
        <a href="#">
          <FaGoodreads />
        </a>
        <a href="#">
          <FaTelegram />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaGithubSquare />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
