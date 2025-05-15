import React from 'react';
import './Main9.css';

export default function Main9() {
  return (
    <div className="video-section">
      {/* Видео-картинка с кнопкой */}
      <a
        href="https://youtu.be/2Fdo1m3IUJE?feature=shared"
        target="_blank"
        rel="noopener noreferrer"
        className="video-link"
      >
        <img
          src="https://kulikov.com/build/assets/team-purple-video-BEOpG-MO.webp"
          alt="Video thumbnail"
          className="video-thumbnail"
        />
        <div className="video-overlay">
          <div className="play-button">
            <svg viewBox="0 0 20 20" fill="currentColor" className="play-icon">
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          </div>
        </div>
      </a>

      {/* Контент поверх видео */}
      <div className="video-content100">
        <h2 className="title100">Команда</h2>
        <h3 className="subtitle100">И все вместе мы продолжаем расти и развиваться.</h3>
        <p className="text100">
          Из маленького семейного дела на двоих человек мы выросли в огромное
          производство с более чем 2 000 сотрудников.
        </p>
      </div>
    </div>
  );
}
