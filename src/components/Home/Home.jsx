import React from 'react';

import './Home.scss';
import myphoto from '../../assets/image/myphoto.jpg';

const Home = () => {
  return (
    <div className="profile" id='home'>
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
        <a href="#">Связаться со мной</a>
        <div className="profile__web profile__web-position">веб-разработчик</div>
        <div className="profile__uiux rofile__uiux-position">UI/UX дизайнер</div>
      </div>
    </div>
  );
};

export default Home;
