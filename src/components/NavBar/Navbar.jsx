import React from 'react';
import { FaLinkedin, FaTelegram, FaGoodreads, FaGithubSquare } from 'react-icons/fa';
import { HiMenuAlt4, HiX } from "react-icons/hi";

import './Navbar.scss';

const navLinks = ['Главная', 'Обо мне', 'Мой stack', 'Проекты', 'Обратная связь'];

const socialIcons = [
   { name: <FaGoodreads />, address: 'https://kubanesin@gmail.com' },
   { name: <FaTelegram />, address: 'https://telegram.me/@EsinAndrew' },
   { name: <FaLinkedin />, address: 'http://www.linkedin.com/in/андрей-есин' },
   { name: <FaGithubSquare />, address: 'https://github.com/Kuban23' },
];

const Navbar = () => {
   const [activeIndex, setActiveIndex] = React.useState(0);

   const [scroll, setScroll] = React.useState(false);

   const [toggle, setToggle] = React.useState(false)

   React.useEffect(() => {
      window.addEventListener('scroll', () => setScroll(window.scrollY > 20))
   }, [])

   return (
      <div className={scroll ? "wrapper active" : "wrapper"}>
         <div className="nav">
            <div className="nav__logo">
               <h3>АE</h3>
            </div>
            <ul className="nav__links">
               {navLinks.map((link, i) => (
                  <li key={i}>
                     <a
                        onClick={() => setActiveIndex(i)}
                        className={activeIndex === i ? 'active-link' : ''}
                        href={`#${link}`}>
                        {link}
                     </a>
                  </li>
               ))}
            </ul>
            <div className="nav__socialIcons">
               {socialIcons.map((icon, i) => (
                  <a key={i} href={`${icon.address}`} target="blank">
                     {icon.name}
                  </a>
               ))}
            </div>

            <div className="nav__menu">
               <HiMenuAlt4
                  onClick={() => setToggle(true)}
               />
            </div>
            <div className="nav__closeMenu"></div>
            <div className="nav__menuX">
               <HiX
                  onClick={() => setToggle(false)}
               />
               {navLinks.map((link, i) => (
                  <li key={i}>
                     <a
                        onClick={() => setActiveIndex(i)}
                        className={activeIndex === i ? 'active-link' : ''}
                        href={`#${link}`}>
                        {link}
                     </a>
                  </li>
               ))}
            </div>

         </div>
      </div>
   );
};

export default Navbar;
