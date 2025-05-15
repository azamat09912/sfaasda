import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
  const [language, setLanguage] = useState('ru');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const rotatingTexts = {
    ru: [
      "Признанный лидер в производстве безопасных и вкусных десертов",
      "Инновационные технологии в кондитерском производстве",
      "Экологически чистые ингредиенты",
      "С заботой о вашем здоровье"
    ],
    kz: [
      "Қауіпсіз әрі дәмді десерттер өндірісінің көшбасшысы",
      "Кондитер өндірісіндегі инновациялық технологиялар",
      "Экологиялық таза ингредиенттер",
      "Сіздің денсаулығыңыз үшін қамқорлықпен"
    ],
    en: [
      "Recognized leader in producing safe and tasty desserts",
      "Innovative technologies in confectionery production",
      "Environmentally friendly ingredients",
      "With care for your health"
    ]
  };

  const translations = {
    ru: {
      partnership: "О нас",
      products: "Безопасность",
      app: "Новости",
      team: "Партнерство",
      contacts: "Хиты",
      geo: "Приложение",
      shop: "Продукция",
      comand: "Команда",
    },
    en: {
      partnership: "About us",
      products: "Safety",
      app: "News",
      team: "Partnership",
      contacts: "Hits",
      geo: "App",
      shop: "Products",
      comand: "Team"
    },

    kz: {
      partnership: "Біз туралы",
      products: "Кауіпсіздік",
      app: "Жаналыктар",
      team: "Серіктестік",
      contacts: "Хиттер",
      geo: "Косымша",
      shop: "Онімдер",
      comand: "Команда"
    }

  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % rotatingTexts[language].length);
    }, 7000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('body-no-scroll');
    } else {
      document.body.classList.remove('body-no-scroll');
    }
  }, [menuOpen]);


  const t = translations[language] || translations['ru'];

  const handleLanguageClick = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
    setCurrentTextIndex(0); // Сбросить индекс текста при смене языка
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const renderLanguageOptions = () =>
    Object.keys(translations).map((lang) =>
      lang !== language && (
        <div key={lang} onClick={() => handleLanguageClick(lang)}>
          {lang.toUpperCase()}
        </div>
      )
    );

  return (
    <header className="header">
      <div className="header__overlay"></div>
      <div className="header__content">
        <div className="header__logo">
          <img src="https://kulikov.com/images/logo-kulikov.webp" alt="Kulikov Logo" />
        </div>

        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <a href="#partnership" className="header__link" onClick={() => setMenuOpen(false)}>{t.partnership}</a>
          <a href="#products" className="header__link" onClick={() => setMenuOpen(false)}>{t.products}</a>
          <a href="#app" className="header__link" onClick={() => setMenuOpen(false)}>{t.app}</a>
          <a href="#team" className="header__link" onClick={() => setMenuOpen(false)}>{t.team}</a>
          <a href="#contacts" className="header__link" onClick={() => setMenuOpen(false)}>{t.contacts}</a>
          <a href="#geo" className="header__link" onClick={() => setMenuOpen(false)}>{t.geo}</a>
          <a href="#shop" className="header__link" onClick={() => setMenuOpen(false)}>{t.shop}</a>
          <a href="#comand" className="header__link" onClick={() => setMenuOpen(false)}>{t.comand}</a>


          <div className="language-selection">
            <div className="language-desktop">
              <div className="current-lang" onClick={() => setDropdownOpen(!dropdownOpen)}>
                {language.toUpperCase()}
              </div>
              {dropdownOpen && (
                <div className="language-dropdown">
                  {renderLanguageOptions()}
                </div>
              )}
            </div>

            <div className="language-mobile">
              <span onClick={() => handleLanguageClick('ru')}>RU</span> |
              <span onClick={() => handleLanguageClick('en')}>EN</span> |
              <span onClick={() => handleLanguageClick('kz')}>KZ</span>
            </div>
          </div>
        </nav>

        <div className={`burger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {menuOpen && (
          <div className="close-menu" onClick={toggleMenu}>  x</div>
        )}
      </div>

      {!menuOpen && (
        <div className="header__logo2">
          <img src="https://kulikov.com/images/logo-kulikov.webp" alt="Kulikov Logo" />
        </div>
      )}

      {!menuOpen && (
        <div className="rotating-text-container">
          <div className="rotating-text">{rotatingTexts[language][currentTextIndex]}</div>
          <div className="text-dots">
            {rotatingTexts[language].map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentTextIndex ? 'active' : ''}`}
                onClick={() => setCurrentTextIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
