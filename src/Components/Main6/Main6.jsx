import React from 'react';
import './Main6.css';
import { useNavigate } from 'react-router-dom'; // Импортируем useNavigate

export default function Main6() {
    const navigate = useNavigate(); // Хук для навигации

    const handleLearnMore = () => {
        navigate('/ai'); // Переход на маршрут '/ai'
    };

    return (
        <div>
            <div className='bgphon'>
                <img className='img-wr1' src="https://kulikov.com/build/assets/phone-BMCDw26l.webp" alt="" />
            </div>

            <h1 className='bg-fr-ph'>
                Закажите <br />
                в приложении Kulikov</h1>
            <button className="more-btn21" onClick={handleLearnMore}>
                Узнать больше →
            </button>

            <div className='alotimg'>
                <img className='alot1' src="https://cdn-icons-png.freepik.com/256/16108/16108503.png?semt=ais_hybrid" alt="" />
                <p className='alottext'>Кешбэк</p>
                <img className='alot2' src="https://play-lh.googleusercontent.com/4oesSPjxN4zSQZ1A3WDtWR1t-m2708AEmVOmNxN4n3UdHPaa2_wnpDksASVEfsl-Qv5r=w240-h480-rw" alt="" />
                <p className='alottext1'>Выгода</p>
            </div>
        </div>
    )
}   