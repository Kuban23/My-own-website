import React from 'react';
import { FiGithub, FiEye } from 'react-icons/fi';
import { motion } from 'framer-motion';

import './Portfolio.scss';
import pizza from '../../assets/image/myjobs/pizza.jpg';
import cinema from '../../assets/image/myjobs/cinema.png';
import mesto from '../../assets/image/myjobs/mesto.png';
import travel from '../../assets/image/myjobs/russian_travel.jpg';
import todo from '../../assets/image/myjobs/todo.png';
import telegrammBot from '../../assets/image/myjobs/telegrammbot.jpg';

const workNavBtn = ['Все', 'Web', 'App', 'Дизайн'];

const workImages = [
  {
    id: 1,
    img: pizza,
    name: 'project 1',
    category: 1,   
    web: 'https://kuban23.github.io/pizza_react_typescript/',
    git: 'https://github.com/Kuban23/pizza_react_typescript',
  },
  {
    id: 2,
    img: cinema,
    name: 'project 2',
    category: 1,    
    web: '#',
    git: 'https://github.com/Kuban23/movies-explorer-frontend',
  },
  {
    id: 3,
    img: mesto,
    name: 'project 3',
    category: 1,    
    web: 'https://kuban23.github.io/mesto-react/',
    git: 'https://github.com/Kuban23/mesto-react',
  },
  {
    id: 4,
    img: travel,
    name: 'project 4',
    category: 3,   
    web: 'https://kuban23.github.io/russian-travel/',
    git: 'https://github.com/Kuban23/russian-travel',
  },
  {
    id: 5,
    img: todo,
    name: 'project 5',
    category: 2,   
    web: 'https://kuban23.github.io/to-do-list-react-typescript-tailwind-css/',
    git: 'https://github.com/Kuban23/to-do-list-react-typescript-tailwind-css',
  },
  {
    id: 6,
    img: telegrammBot,
    name: 'project 6',
    category: 2,    
    web: 'https://t.me/CovidOmicronBot',
    git: 'https://github.com/Kuban23/TelegrammBot-Statistics-COVID19',
  },
];

const Portfolio = () => {
  const [active, setActive] = React.useState(0);
  const [tab, setTab] = React.useState(0);
   const [works, setWorks] = React.useState([]);

  React.useEffect(() => {
    if (tab === 0) {
      setWorks(workImages);
    }
    else{
      const newWork=workImages.filter((workImage)=>
      workImage.category===tab       
      )      
      setWorks(newWork);
    }

  }, [tab]);

  const onClickBtn = (i) => {
    setActive(i);
    console.log(i);
    setTab(i)    
  };

  return (
    <div className="portfolio" id="Проекты">
      <div className="portfolio__title">
        <span>Мои проекты</span>
        <h1>Потрясающие проекты</h1>
      </div>
      <div className="portfolio__btns">
        {workNavBtn.map((btn, i) => (
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            onClick={() => onClickBtn(i)}
            className={active === i ? 'active' : ''}
            key={i}>
            {btn}
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [-250, 0], opacity: 1 }}
        transition={{ duration: 2.5 }}
        exit={{ opacity: 0, y: -50 }}
        className="portfolio__workImages">
        {works.map((workImage) => (
          <div className="portfolio__workImage" key={workImage.id}>
            <img src={workImage.img} alt="workImage" />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="portfolio__hover">
              <motion.a
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.1] }}
                transition={{ duration: 0.3 }}
                href={workImage.git}
                target="blank">
                <FiGithub />
              </motion.a>
              <motion.a
                whileInView={{ scale: [0, 1] }}
                whileHover={{ scale: [1, 1.1] }}
                transition={{ duration: 0.3 }}
                href={workImage.web}
                target="blank">
                <FiEye />
              </motion.a>
            </motion.div>
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0, opacity: 0 }}
        whileInView={{ x: [250, 0], opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="portfolio__talkProjects">
        <div className="portfolio__talkTitle">
          <h3>
            Давайте поговорим о <br /> <span>Вашем следующем проекте</span>
          </h3>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="portfolio__talkContact">
          <a href="#Обратная связь">Мои контакты</a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
