import React from 'react';
import './Main4.css';

export default function Main4() {
  return (
    <div className="main4-wrapper">
      <img
        className="good-img-bg"
        src="https://s3.mortarr.com/images/project_gallery_images/sixinch-usa-sabre-nowy-styl-office-interior-break-room-design-seating-and-furniture.jpeg"
        alt=""
      />

      <div className="main4-content">
        <h2 className="title1">Партнерство</h2>
        <p className="subtitle1">с нами</p>
      </div>

      <div className="cards-container">
        {/* Карта 1 */}
        <div className="card1">
          <div className="card-content1">
            <img className="card-image1" src="https://static.tildacdn.com/tild6232-3133-4238-b630-343030663936/Frame_20873283908.svg" alt="" />
            <h3 className="card-title1">Франшиза</h3>
            <p className="card-description1">
              Прибыльный бизнес за 60 дней <br /> с доходом от 250 000 рублей в <br /> месяц
            </p>
          </div>
        </div>

        {/* Карта 2 */}
        <div className="card2">
          <div className="card-content2">
            <img className="card-image2" src="https://ninjapark.com.pl/wp-content/uploads/2024/02/torcik-e1708639108325.png" alt="" />
            <h3 className="card-title2">Дистрибуция</h3>
            <p className="card-description2">
              С нами становятся успешными! <br /> Нас выбирают как проверенного <br /> и долгосрочного партнера. Мы <br /> всегда выступаем за <br /> взаимовыгодное и плодотворное <br /> сотрудничество для всех <br /> участников процесса.
            </p>
          </div>
        </div>

        {/* Карта 3 */}
        <div className="card3">
          <div className="card-content3">
            <img className="card-image3" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTDgklWSRqo0xrgqJgHSkUMhtN20Bv0VaNTFW4nItgtUU-vDt5R" alt="" />
            <h3 className="card-title3">Аренда</h3>
            <p className="card-description3">
              У вас есть коммерческое <br /> помещение? Давайте <br /> знакомиться! Мы принимаем <br /> предложения по аренде <br /> помещений в вашем городе.
            </p>
          </div>
        </div>

       

      </div>
    </div>
  );
}
