import React from 'react';
import { motion } from 'framer-motion';

import './Skills.scss';
import { icons, finish } from '../../Data';

const Skills = () => {
   const [active, setActive] = React.useState(1);

   return (
      <div className="skills" id="Мой stack">
         <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ y: [-45, 0], opacity: 1 }}
            transition={{
               duration: 2,
               delay: 0.5,
            }}>
            Навыки и опыт
         </motion.h1>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [50, 0], opacity: 1 }}
            transition={{
               duration: 2,
               delay: 0.5,
            }}
            className="skills__select">
            <motion.button
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.3 }}
               onClick={() => setActive(1)} className={active === 1 ? 'active' : ''}>
               Навыки
            </motion.button>
            <motion.button
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.3 }}
               onClick={() => setActive(2)}
               className={active === 2 ? 'active' : ''}>
               Опыт
            </motion.button>
         </motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="skills__skills">
            {active === 1 &&
               icons.map((icon, i) => (
                  <div className="skills__skills-icons" key={i}>
                     {icon}
                  </div>
               ))}
         </motion.div>
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: 1 }}
            className="skills__experiences">
            {active === 2 && (
               <div>
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
                              Самостоятелное погружение в IT. На протяжении восьми месяцев самостоятельно
                              изучал HTML, CSS, JavaScript, React, Git
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
               </div>
            )}

            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ y: [50, 0], opacity: 1 }}
               transition={{
                  duration: 2,
                  delay: 0.5,
               }}
               className="skills__fin-container">
               {finish.map((finish, i) => (
                  <div className="skills__fin" key={i}>
                     <div className="skills__fin-number">{finish.number}</div>
                     <h4>{finish.itemName}</h4>
                  </div>
               ))}
            </motion.div>
         </motion.div>
      </div>
   );
};

export default Skills;

