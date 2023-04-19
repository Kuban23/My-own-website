import React from 'react';
import { motion } from 'framer-motion';

import { FaUser, FaPhoneAlt, FaGoogle } from 'react-icons/fa';
import './About.scss';
import myphoto from '../../assets/image/myphoto.jpg';

const bios = [
   {
      icon: <FaUser />,
      value: 'Андрей',
   },
   {
      icon: <FaPhoneAlt />,
      value: '+7-981-710-60-57',
   },
   {
      icon: <FaGoogle />,
      value: 'kubanesin@gmail.com',
   },
];

const About = () => {
   return (
      <div className="about" id="Обо мне">
         <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ y: [-40, 0], opacity: 1 }}
            transition={{
               duration: 2,
               delay: 0.5,
            }}
            className="about__title">
            <h1>Обо мне</h1>
         </motion.div>
         <div className="about__container">
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [-250, 0], opacity: 1 }}
               transition={{ duration: 2.5 }}
               className="about__left">
               <motion.img
                  whileHover={{ y: -10, x: -10 }}
                  transition={{ duration: 2 }}
                  src={myphoto}
                  alt="MyPhoto"
               />
            </motion.div>
            <motion.div
               initial={{ x: 0, opacity: 0 }}
               whileInView={{ x: [250, 0], opacity: 1 }}
               transition={{ duration: 2.5 }}
               className="about__right">
               <p>
                  В 2021 году принял решение полностью изменить поле деятельности и мое внимание привлекла
                  сфера IT. Мне было интересно - как сделать сайт с нуля? Почему на экранах компьютера и
                  телефона один и тот же сайт выглядит по разному? Начал активно изучать верстку и уже
                  через пару месяцев понял, что хочу погрузиться глубже.
               </p>
               <p>
                  На сегодняшний день у меня есть прочные основы в области front-end и back-end
                  разработки, и я обладаю навыками создания удобных для пользователя и отзывчивых
                  веб-приложений с использованием React и его экосистемы. Есть опыт работы над различными
                  проектами, включая создание и поддержку одностраничных приложений и внедрение принципов
                  адаптивного дизайна. В дополнение к моим техническим навыкам, я сильный коммуникатор и
                  командный игрок. Я умею эффективно работать с кросс-функциональными командами, мне
                  комфортно решать новые задачи и изучать новые технологии.
               </p>
               <p>
                  Всегда стремлюсь совершенствовать свои навыки и быть в курсе последних достижений в
                  области веб-разработки. Мне нравится расти как разработчик и вносить значимый вклад в
                  проекты и команду.
               </p>

               {bios.map((bio, i) => (
                  <div className="about__bio" key={i}>
                     <span className="about__bio-key">{bio.icon}</span>
                     <span className="about__bio-value">{bio.value}</span>
                  </div>
               ))}
               <motion.a
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  href="https://disk.yandex.ru/i/UxgCzPtZ9nNCqw"
                  download="" target='blank'>
                  Скачать резюме
               </motion.a>
            </motion.div>
         </div>
      </div>
   );
};

export default About;
