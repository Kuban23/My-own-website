import React from 'react';
import { motion } from 'framer-motion';

import './Home.scss';
import myphoto from '../../assets/image/myphoto.jpg';

const Home = () => {
   const moveVariants = {
      animation: {
         y: [0, -15],
         transition: {
            yoyo: Infinity,
            duration: 2,
            delay: 1,
         },
      },
   };

   return (
      <motion.div
         initial={{ y: -15, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{
            duration: 2,
            delay: 0.5,
         }}
         className="profile"
         id="Главная">
         <div className="profile__photo">
            <img src={myphoto} alt="MyPhoto" />
         </div>
         <div className="profile__title">
            <h3 className="profile__name">
               Привет! Я <span>Андрей Есин</span>{' '}
            </h3>
            <span className="profile__job">{`{ Фронтенд веб-разработчик }`}</span>
            <span className="profile__text">
               Увлечен
               <br />
               созданием инновационных
               <br />
               веб-продуктов
            </span>
            <motion.a
               whileHover={{ scale: 1.1 }}
               variants={moveVariants}
               animate="animation"
               transition={{ duration: 0.3 }}
               href="#Обратная связь"
            >
               Связаться со мной
            </motion.a>
            <div className="profile__uiux rofile__uiux-position">веб-разработчик</div>
            <div className="profile__web profile__web-position">UI/UX дизайнер</div>
         </div>
      </motion.div>
   );
};

export default Home;

