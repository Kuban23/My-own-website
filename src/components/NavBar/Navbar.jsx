import React from 'react';

import './Navbar.scss';

const Navbar = () => {
   return (
      <div className="nav">
         <div className="nav__logo">
            <h3>АE</h3>
         </div>
         <ul className="nav__links">
            <li>
               <a href="#">Главная</a>
            </li>
            <li>
               <a href="#">Обо мне</a>
            </li>
            <li>
               <a href="#">Мой stack</a>
            </li>
            <li>
               <a href="#">Проекты</a>
            </li>
            <li>
               <a href="#">Обратная связь</a>
            </li>
         </ul>
         <div className="nav__socialIcons">
            <a href="#">G</a>
            <a href="#">T</a>
            <a href="#">L</a>
            <a href="#">Git</a>
         </div>
      </div>
   );
};

export default Navbar;
