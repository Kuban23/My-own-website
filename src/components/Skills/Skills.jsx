import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass, FaFigma } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

import './Skills.scss';

const icons = [
   <FaHtml5 />,
   <FaCss3 />,
   <DiJavascript />,
   <FaReact />,
   <SiTypescript />,
   <FaNodeJs />,
   <FaSass />,
   <FaFigma />,
];

const finish = [
   {
      id: 1,
      number: '2+',
      itemName: 'Продолжаю получать опыт',
   },
   {
      id: 2,
      number: '5+',
      itemName: 'Довольный клиент',
   },
   {
      id: 3,
      number: '7+',
      itemName: 'Разработанные приложения',
   },
   {
      id: 4,
      number: '-',
      itemName: 'Обслуживаемые клиенты',
   },
];

const Skills = () => {
   return (
      <div className="skills" id="Мой stack">
         <h1>Навыки и опыт</h1>
         <div className="skills__select">
            <button className="active">Навыки</button>
            <button>Опыт</button>
         </div>
         <div className="skills__skills">
            {icons.map((icon, i) => (
               <div className="skills__skills-icons" key={i}>
                  {icon}
               </div>
            ))}
         </div>
         <div className="skills__experiences">
            <div className="skills__experience">
               <span>2022</span>
               <div className="skills__prof">
                  <h3>Junior Web Dveloper</h3>
                  <p>freelanser</p>
               </div>
            </div>
            <div className="skills__experience">
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
            </div>
            <div className="skills__fin-container">
               {finish.map((finish, i) => (
                  <div className="skills__fin">
                     <div className="skills__fin-number">{finish.number}</div>
                     <h4>{finish.itemName}</h4>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Skills;
