import React from 'react';
import './Main8.css';

export default function Main4() {
    return (
        <div className="main4-wrapper">
            <img
                className="good-img-bg20"
                src="https://wallpaperbat.com/img/886460-mountain-wallpaper-photo-download-the-best-free-mountain-wallpaper-hd-image.jpg"
                alt=""
            />

            <div className="main4-content">
                <h2 className="title1">Фирменные</h2>
                <p className="subtitle1">Магазины</p>
                <button className="more-btn19">Узнать больше →</button>
            </div>

            <div className="cards-container">
                {/* Карта 1 */}
                <div className="card10">
                    <div className="card-content10">
                        <h3 className="card-title10">Кыргызстан</h3>
                        <p className="card-description10">
                            с 1991 года<br /><br />
                            36 магазинов<br /><br />
                            3 кофейни
                        </p>
                    </div>
                </div>

                {/* Карта 2 */}
                <div className="card20">
                    <div className="card-content20">
                        <h3 className="card-title20">Казахстан</h3>
                        <p className="card-description20">
                              с 2013 года<br /><br />
                            56 магазинов<br /><br />
                            1 кофейни
                        </p>
                    </div>
                </div>

                {/* Карта 3 */}
                <div className="card30">
                    <div className="card-content30">
                        <h3 className="card-title30">Россия</h3>
                        <p className="card-description30">
                              с 2013 года<br /><br />
                            34 магазинов<br /><br />
                            1 кофейни
                        </p>
                    </div>
                </div>



            </div>
        </div>
    );
}
