import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhoneAlt,
  FaGoodreads,
  FaTelegram,
  FaLinkedin,
  FaGithubSquare,
} from 'react-icons/fa';

import './Contact.scss';

const contacts = [
  { id: 1, icon: <FaMapMarkerAlt />, info: 'г. Санкт-Петербург' },
  { id: 2, icon: <FaPaperPlane />, info: 'kubanesin@gmail.com' },
  { id: 3, icon: <FaPhoneAlt />, info: '+7-981-710-60-57' },
];

const socialIcons = [
  { name: <FaGoodreads />, address: 'mailto:kubanesin@gmail.com' },
  { name: <FaTelegram />, address: 'https://telegram.me/EsinAndrew' },
  { name: <FaLinkedin />, address: 'http://www.linkedin.com/in/андрей-есин' },
  { name: <FaGithubSquare />, address: 'https://github.com/Kuban23' },
];

const Contact = () => {
  return (
    <div className="contact" id="Обратная связь">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="contact__title">
        <span>Связаться со мной</span>
        <h1>Мои контакты</h1>
      </motion.div>
      <div className="contact__form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="contact__left_container">
          <h3>Пиши или звони</h3>
          <p>Обсудим оффер или новый проект</p>
          {contacts.map((contact) => (
            <div className="contact__left">
              <div>{contact.icon}</div>
              <p>{contact.info}</p>
            </div>
          ))}
          <div className="contact__icons">
            {socialIcons.map((icon, i) => (
              <a key={i} href={`${icon.address}`} target="blank">
                {icon.name}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.form 
          action='mailto:kubanesin@gmail.com'
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 2.5 }}
          className="contact__right">
          <h3>Отправить сообщение</h3>
          <div className="contact__inputs">
            <input type="text" placeholder="Имя" required />
            <input type="text" placeholder="Фамилия" required />
          </div>
          <div className="contact__inputs">
            <input type="text" placeholder="Телефон" required />
            <input type="text" placeholder="Email" required />
          </div>
          <div className="contact__inputs">
            <textarea placeholder="Сообщение" required></textarea>
          </div>
          {/* <motion.div */}
          <motion.button type="submit"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="contact__btn">
            
              Отправить
            </motion.button>
          {/* </motion.div> */}
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
