import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Блок "Приложение с доставкой" */}
        <div className="footer-section">
          <h4 className="footer-title">Приложение с доставкой</h4>
          <div className="store-buttons">
            <a href="https://play.google.com/store/search?q=kulikov+kg&c=apps">Play market</a>
            <a href="https://play.google.com/store/search?q=kulikov+kg&c=apps">App store</a>
          </div>
        </div>

        {/* Навигация */}
        <div className="footer-section">
         
        </div>

        {/* Продукция */}
       
      </div>

      <div className="footer-divider" />

      {/* Нижняя часть */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://www.instagram.com/kulikov_kz/"><img src="https://kulikov.com/build/assets/instagram.svg" alt="" /> Instagram Кыргызстан</a>
          <a href="https://www.instagram.com/kulikov_kz/"><img src="https://kulikov.com/build/assets/instagram.svg" alt="" /> Instagram Казахстан</a>
          <a href="https://www.instagram.com/kulikov_kz/"><img src="https://kulikov.com/build/assets/vk.svg" alt="" /> VK Россия</a>
          <a href="https://www.instagram.com/kulikov_kz/"><img src="https://kulikov.com/build/assets/youtube.svg" alt="" /> YouTube Kulikov</a>
        </div>

        <div className="footer-links">
          <a href="#">Условия программы лояльности</a>
          <a href="#">Политика обработки персональных данных</a>
          <a href="#">Сотрудничество</a>
          <a href="#">Сотрудничество в рамках ЕАЭС</a>
          <a href="#">Сотрудничество с ОсОО «Семейные традиции»</a>
        </div>

        <div className="footer-meta">
          <p>© 1991–2025 Кондитерский дом «Куликовский». Все права защищены.</p>
          <p>Дизайн: <a href="#" className="notamedia">NOTAMEDIA</a></p>
        </div>

        <div className="footer-logo">
          <img src="https://kulikov.com/images/logo-kulikov.webp" alt="Kulikov Logo" />
        </div>
      </div>
    </footer>
  );
}
