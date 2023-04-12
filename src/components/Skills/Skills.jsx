import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass, FaFigma } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

import './Skills.scss';

const Skills = () => {
   return (
      <div className="skills" id="skills">
         <h1>Навыки и опыт</h1>
         <div className="skills__select">
            <button className="active">Навыки</button>
            <button>Опыт</button>
         </div>
         <div className="skills__skills">
            <div className="skills__skills-icons">
               <FaHtml5 />
            </div>
            <div className="skills__skills-icons">
               <FaCss3 />
            </div>
            <div className="skills__skills-icons">
               <DiJavascript />
            </div>
            <div className="skills__skills-icons">
               <FaReact />
            </div>
            <div className="skills__skills-icons">
               <SiTypescript />
            </div>
            <div className="skills__skills-icons">
               <FaNodeJs />
            </div>
            <div className="skills__skills-icons">
               <FaSass />
            </div>
            <div className="skills__skills-icons">
               <FaFigma />
            </div>
         </div>
         <div className="skills__experiences">
            <div className="skills__experience">
               <span>2022</span>
               <div className="skills__prof">
                  <h3>Junior Web Dveloper</h3>
                  <p>freelanser</p>
               </div>
            </div>
            {/* <div className="skills__experience">
          <span>2021</span>
          <div className="skills__prof">
            <h3>Intern Web Dveloper</h3>
            <ul className="skills__courses">
              <li className="skills__course">
                Самостоятелное погружение в IT. На протяжении восьми месяцев самостоятельно изучал
                HTML, CSS, JavaScript, React, Git
              </li>
              <li className="skills__course">
                Закончил профессиональный десяти месячный курс в ЯндексПрактикуме по профессии
                Веб-разработчик.
              </li>
              <li className="skills__course">Параллельно с обучением выполнял pet-проекты.</li>
              <li className="skills__course">Решаю задачи на платформе codewars</li>
            </ul>
          </div>
        </div> */}
            <div className="skills__fin-container">
               <div className="skills__fin">
                  <div className="skills__fin-number">2+</div>
                  <h4>Продолжаю получать опыт</h4>
               </div>
               <div className="skills__fin">
                  <div className="skills__fin-number">5+</div>
                  <h4>Довольный клиент</h4>
               </div>
               <div className="skills__fin">
                  <div className="skills__fin-number">7+</div>
                  <h4>Разработанные приложения</h4>
               </div>
               <div className="skills__fin">
                  <div className="skills__fin-number">-</div>
                  <h4>Обслуживаемые клиенты</h4>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Skills;
