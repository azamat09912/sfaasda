    import React from 'react';
    import './Main2.css';

    export default function Main2() {
    return (
        <div className="image-wrapper">
        <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKb0OHoJY1RyS4TtzU1qaLIqSG8AAYcgRNzCE5dw8I4rjwZmpAYVRdftpJ36fjCBPA_4SBAVRgKVj_VOE9Cls6vlSbmS4z5q5tt-XH3stv2vCwwhhqT8J-3mXl5OShWUZ2pZ5z6h6LbmkT/w7680-h4320-c/mountain-lake-nature-forest-landscape-scenery-4K-157.jpg   "
            alt="Background"
            className="movable-image"
        />

        <div className="overlay-content">
            <h2 className="title">C Kulikov</h2>
            <p className="subtitle">безопасно</p>
        
            <div className="features">
            <div className="feature-item">
                <img
                src="https://img.freepik.com/premium-photo/researching-research-doctor-medical-scientist-chemist-biohazard_488220-65686.jpg"
                alt="Гигиена"
                />
                <p>Строгое соблюдение гигиенических стандартов</p>
            </div>
            <div className="feature-item">
                <img
                src="https://static.1000.menu/files/user-v2/00/4c/893008/avatar_1726208757.jpg"
                alt="Ингредиенты"
                />
                <p>Только натуральные ингредиенты и проверенное сырьё</p>
            </div>
            <div className="feature-item">
                <img
                src="https://vgaps.ru/uplfile/news/Professiya_fermer_gde_i_kak_uchitysya_na_nee_s_nulya_min.jpg"
                alt="Местоположение"
                />
                <p>Местоположение фабрики в экологически чистом регионе</p>
            </div>
            
            </div>
        </div>
        </div>
    );
    }
