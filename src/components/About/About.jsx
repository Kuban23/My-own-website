import React from 'react';
import { FaUser, FaPhoneAlt, FaGoogle } from 'react-icons/fa';

import './About.scss';
import myphoto from '../../assets/image/myphoto.jpg';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__title">
        <h1>Обо мне</h1>
      </div>
      <div className="about__container">
        <div className="about__left">
          <img src={myphoto} alt="MyPhoto" />
        </div>
        <div className="about__right">
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
          <div className="about__bio">
			 <span className="about__bio-key">
                <FaUser /> 
              </span>
				  <span className="about__bio-value">Андрей</span>

				  <span className="about__bio-key">
				  <FaPhoneAlt /> 
              </span>
				  <span className="about__bio-value">+79817106057</span>

				  <span className="about__bio-key">
				  <FaGoogle /> 
              </span>
				  <span className="about__bio-value">kubanesin@gmail.com</span>

           
            {/* <div>
              <span className="about__bio-icon">
                <FaUser /> Имя
              </span>
              <span className="about__bio-value">Андрей</span>
            </div>

            <div>
              <span className="about__bio-icon">
                <FaPhoneAlt /> Телефон
              </span>
              <span className="about__bio-value">+7981-710-60-57</span>
            </div>

				<div>
				<span className="about__bio-icon">
                <FaPaperPlane /> Email
              </span>
				  <span className="about__bio-value">kubanesin@gmail.com</span>
				</div> */}
				      
          </div>
          <a href="#" download="#">
          Скачать резюме
        </a>
        </div>
        {/* <div className="about__bio">
          <span className='about__bio-icon'><FaUser/> Андрей</span>
          <span className='about__bio-icon about__bio-key'><FaPhoneAlt/>+7981-710-60-57</span>
          <span className='about__bio-icon about__bio-value'><FaPaperPlane/>kubanesin@gmail.com</span>
        </div>
        <a href="#" download="#">
          Скачать резюме
        </a> */}
      </div>
    </div>
  );
};

export default About;
