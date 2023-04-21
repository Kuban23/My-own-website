import {
   FaLinkedin,
   FaTelegram,
   FaGoodreads,
   FaGithubSquare,
   FaMapMarkerAlt,
   FaPaperPlane,
   FaUser,
   FaPhoneAlt,
   FaGoogle,
} from 'react-icons/fa';
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaSass, FaFigma } from 'react-icons/fa';
import { DiJavascript } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

import pizza from './assets/image/myjobs/pizza.jpg';
import cinema from './assets/image/myjobs/cinema.png';
import mesto from './assets/image/myjobs/mesto.png';
import travel from './assets/image/myjobs/russian_travel.jpg';
import todo from './assets/image/myjobs/todo.png';
import telegrammBot from './assets/image/myjobs/telegrammbot.jpg';

export const navLinks = ['Главная', 'Обо мне', 'Мой stack', 'Проекты', 'Обратная связь'];

export const socialIcons = [
   { name: <FaGoodreads />, address: 'mailto:kubanesin@gmail.com' },
   { name: <FaTelegram />, address: 'https://telegram.me/EsinAndrew' },
   { name: <FaLinkedin />, address: 'http://www.linkedin.com/in/андрей-есин' },
   { name: <FaGithubSquare />, address: 'https://github.com/Kuban23' },
];

export const bios = [
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

export const icons = [
   <FaHtml5 />,
   <FaCss3 />,
   <DiJavascript />,
   <FaReact />,
   <SiTypescript />,
   <FaNodeJs />,
   <FaSass />,
   <FaFigma />,
];

export const finish = [
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

export const workNavBtn = ['Все', 'Web', 'App', 'Дизайн'];

export const workImages = [
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

export const contacts = [
   { id: 1, icon: <FaMapMarkerAlt />, info: 'г. Санкт-Петербург' },
   { id: 2, icon: <FaPaperPlane />, info: 'kubanesin@gmail.com' },
   { id: 3, icon: <FaPhoneAlt />, info: '+7-981-710-60-57' },
];
