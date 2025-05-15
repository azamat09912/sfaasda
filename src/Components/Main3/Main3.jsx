import React, { useState, useEffect, useRef } from 'react';
import './Main3.css';

const NewsComponent = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const slideRef = useRef();

    const handleSlideChange = (direction) => {
        setCurrentSlide(prev => {
            if (direction === 'left') {
                return prev === 1 ? 3 : prev - 1;
            } else if (direction === 'right') {
                return prev === 3 ? 1 : prev + 1;
            }
            return prev;
        });
    };

    useEffect(() => {
        const el = slideRef.current;
        if (!el) return;

        el.classList.remove('show');
        void el.offsetWidth; // принудительный reflow

        const timer = setTimeout(() => {
            el.classList.add('show');
        }, 30);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <div className="news-container">
            <h1>
                Новости<br /><span>компании</span>
            </h1>

            {/* Слайд 1 */}
            {currentSlide === 1 && (
                <div className="slide slide-animate" ref={slideRef}>
                    <img src="https://kulikov.com/storage/article_images/ptHzfVjqPFYQS8VNixPwyA45tQvyCeSY9MdKI67U.webp" alt="News" className="news-image" />
                    <div className="text-container1">
                        <p className="date">01.01.2025</p>
                        <h2 className="text-of-the-title1">Kulikov прошел надзорный аудит <br /> ISO 22 000</h2>
                        <p className='text-of-the-title'>
                            Международный сертификат пищевой безопасности Kulikov получил еще в 2015 году. Теперь каждый год компания проходит надзорный аудит, подтверждая самые высокие стандарты качества пищевой продукции. Вот и в этом году аудит прошел отлично, не было выявлено никаких несоответствий с международной системой пищевой безопасности.
                        </p>
                        <p className='text-of-the-title'>
                            Kulikov - одна из немногих производственных компаний в Кыргызстане, которая имеет международный сертификат ISO 22 000. Для нас очень важно не только дарить нашим клиентам счастливые эмоции, но и беречь здоровье каждого взрослого и ребенка, которые приходят в Kulikov за любимыми десертами.
                        </p>
                    </div>
                </div>
            )}

            {/* Слайд 2 */}
            {currentSlide === 2 && (
                <div className="slide slide-animate" ref={slideRef}>
                    <img src="https://kulikov.com/storage/article_images/3tuBnfaj5kcEOztgj09aa8ShBp3E98MoaOfZaCMM.png" alt="Halal Certificate" className="news-image" />
                    <div className="text-container1">
                        <p className="date">09.01.2025</p>
                        <h2 className="text-of-the-title1">Kulikov получил второй сертификат Халал</h2>
                        <p className='text-of-the-title'>
                            Осенью 2024 года мы получили сертификат Halal QMDB. Сертификат был выдан после проведенного аудита организацией ТОО «Халал Даму». Это организация, занимающаяся стандартизацией и сертификацией по нормам шариата и стандартным процедурам Халал. Она была создана при Духовном управлении мусульман Казахстана.
                        </p>
                        <p className='text-of-the-title'>
                            Напомним, что в Кыргызстане сертификат Халал компания получила еще в 2012 году и с тех пор каждый год подтверждает его, совершенствуя процессы производства нашей продукции.
                        </p>
                    </div>
                </div>
            )}

            {/* Слайд 3 */}
            {currentSlide === 3 && (
                <div className="slide slide-animate" ref={slideRef}>
                    <img className='img-go2' src="https://kulikov.com/storage/article_images/7Xl4C5ZHLxhnL7wLYPbRk13Alkf73IxgkXVjBpJL.webp" alt="CIS Quality Award" />
                    <div className="text-container1">
                        <p className="date">14.01.2025</p>
                        <h2 className="text-of-the-title1">Kulikov — лучшие в СНГ!</h2>
                        <p className='text-of-the-title'>
                            С огромной гордостью сообщаем, что мы получили Премию СНГ за выдающиеся достижения в области качества продукции и услуг. Это признание нашего многолетнего труда и стремления к совершенству.
                        </p>
                        <p className='text-of-the-title'>
                            Конкурс на соискание Премии СНГ за особые достижения в области качества продукции и услуг проводится ежегодно среди компаний, для которых качество продукции — не просто цель, а важнейшая часть философии.
                        </p>
                    </div>
                </div>
            )}

            <div className='img-go'>
                <img className='img-go-1' src="https://kulikov.com/build/assets/raspberry-FX5trSKD.webp" alt="" />
            </div>

            <div className="slide-indicator">
                0{currentSlide} ━━━ 03
            </div>

            <div className="slider-buttons">
                <button className="slider-btn" onClick={() => handleSlideChange('left')}>
                    &#8592;
                </button>
                <button className="slider-btn" onClick={() => handleSlideChange('right')}>
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default NewsComponent;
