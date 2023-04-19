import React from 'react';
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

const Contact = () => {
  return (
    <div className="contact" id="Обратная связь">
      <div className="contact__title">
        <span>Связаться со мной</span>
        <h1>Мои контакты</h1>
      </div>
      <div className="contact__form">
        <div className="contact__left_container">
          <h3>Пиши или звони</h3>
          <p>Обсудим оффер или новый проект</p>
          <div className="contact__left">
            <div>
              <FaMapMarkerAlt />
            </div>
            <p>г. Санкт-Петербург</p>
          </div>
          <div className="contact__left">
            <div>
              <FaPaperPlane />
            </div>
            <p>kubanesin@gmail.com</p>
          </div>
          <div className="contact__left">
            <div>
              <FaPhoneAlt />
            </div>
            <p>+7-981-710-60-57</p>
          </div>
          <div className="contact__icons">
            <a href="#">
              <FaGoodreads />
            </a>
            <a href="#">
              <FaTelegram />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaGithubSquare />
            </a>
          </div>
          </div>
          <div className="contact__right">
            <h3>Отправить сообщение</h3>
            <div className="contact__inputs">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Фамилия" />
            </div>
            <div className="contact__inputs">
              <input type="text" placeholder="Телефон" />
              <input type="text" placeholder="Email" />
            </div>
            <div className="contact__inputs">
              <textarea placeholder="Сообщение"></textarea>
            </div>
            <div className="contact__btn">
              <a href="#">Отправить</a>
            </div>
          </div>
       
      </div>
    </div>
  );
};

export default Contact;
