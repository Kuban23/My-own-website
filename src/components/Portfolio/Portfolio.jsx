import React from 'react';
import { FiGithub, FiEye } from 'react-icons/fi';

import './Portfolio.scss';
import pizza from '../../assets/image/myjobs/pizza.jpg';
import cinema from '../../assets/image/myjobs/cinema.png';
import mesto from '../../assets/image/myjobs/mesto.png';
import travel from '../../assets/image/myjobs/russian_travel.jpg';
import todo from '../../assets/image/myjobs/todo.png';
import telegrammBot from '../../assets/image/myjobs/telegrammbot.jpg';

const Portfolio = () => {
   return (
      <div className="portfolio" id="works">
         <div className="portfolio__title">
            <span>Мои проекты</span>
            <h1>Потрясающие проекты</h1>
         </div>
         <div className="portfolio__btns">
            <button className="active">Все</button>
            <button>Web</button>
            <button>App</button>
            <button>Дизайн</button>
         </div>
         <div className="portfolio__workImages">
            <div className="portfolio__workImage">
               <img src={pizza} alt="workImage-pizza" />
            </div>
            <div className="portfolio__workImage">
               <img src={cinema} alt="workImage-cinema" />
            </div>
            <div className="portfolio__workImage">
               <img src={mesto} alt="workImage-mesto" />
            </div>
            <div className="portfolio__workImage">
               <img src={travel} alt="workImage-travel" />
            </div>
            <div className="portfolio__workImage">
               <img src={todo} alt="workImage-todo" />
            </div>
            <div className="portfolio__workImage">
               <img src={telegrammBot} alt="workImage-telegrammBot" />
               <div className="portfolio__hover">
                  <a href="#">
                     <FiGithub />
                  </a>
                  <a href="#">
                     <FiEye />
                  </a>
               </div>
            </div>
         </div>
         <div className="portfolio__talkProjects">
            <div className="portfolio__talkTitle">
               <h3>
                  Давайте поговорим о <br /> <span>Вашем следующем проекте</span>
               </h3>
            </div>
            <div className="portfolio__talkContact">
               <a href="#contact">Мои контакты</a>
            </div>
         </div>
      </div>
   );
};

export default Portfolio;
