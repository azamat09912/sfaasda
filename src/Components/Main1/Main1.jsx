import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Main1.css';
import { img } from 'framer-motion/client';

const sections = [
  {
    title: 'О Kulikov',
    text1: `С 1991 года мы производим вкуснейшие десерты и <br /> 
    продукты питания, используя только <span>лучшие ингредиенты</span>.
    <br />Мы заботимся о качестве и безопасности нашей продукции.`,
    text2: `Наши рецепты, натуральное сырьё и ручной труд делают
     <br />продукцию уникальной, а любовь к клиентам основой работы.
     <br />Нашей фабрике уже 30 лет, и мы продолжаем развиваться и радовать вас.`,
    bigText: `2000 литров сливок 38% цельного коровьего молока`,
    images: [
      'https://png.pngtree.com/png-clipart/20240325/original/pngtree-sweet-whole-strawberry-png-image_14676798.png',
      'https://images.pexels.com/photos/457447/pexels-photo-457447.jpeg?cs=srgb&dl=pexels-pripicart-457447.jpg&fm=jpg',
      'https://png.pngtree.com/png-clipart/20250110/original/pngtree-a-single-blueberry-png-image_19562932.png',
      'https://t3.ftcdn.net/jpg/02/60/29/92/360_F_260299291_viX08neBN7WXJNP9kMEdas0IgJouRQTC.jpg'
    ]
  },
  {
    title: 'О Шоколаде',
    text1: `Наш шоколад создаётся из натурального какао <br /> 
    и молочных ингредиентов, <span> с любовью и <br />
    вниманием к качеству. <span/>`,
    text2: `Он изготавливается вручную, сохраняя лучшие <br />традиции и даря радость каждому, кто его пробует. мы<br />используем только высококачественные ингредиенты,<br />чтобы каждый кусочек был настоящим наслаждением. в<br />каждой плитке шоколада мы вкладываем частичку нашей души.`,
    bigText: `1500 плиток шоколада ручной работы`,
    images: [
      'https://imgpng.ru/d/walnut_PNG51.png',
      'https://img.freepik.com/premium-photo/assortment-mixed-nuts-including-almonds-walnuts-cashews-pistachios-white-background_983093-12773.jpg',
      'https://png.pngtree.com/png-clipart/20231001/original/pngtree-single-of-almond-nut-png-image_13026621.png',
      'https://i.pinimg.com/736x/82/1f/63/821f63071bf8eda99679ba027b10771c.jpg',
    ]
  },
  {
    title: 'О Торте',
    text1: `Каждый наш торт — это произведение искусства,<br/> созданное по  <span> авторским рецептам из свежих <br /> ингредиентов.<span/>`,
    text2: `Мы используем ягоды, сливки и шоколад, чтобы <br/> 
    каждый торт был не только вкусным, но и красивым. <br/> 
     Мы гордимся тем, что каждый торт приносит не только  <br/>
      вкусное наслаждение, но и тепло в дом, где он находится <br />
       Будь то классический торт или эксклюзивный заказ. <br/>`,
    bigText: `5000 тортов в месяц радуют наших клиентов`,
    images: [
      'https://png.pngtree.com/png-clipart/20240325/original/pngtree-sweet-whole-strawberry-png-image_14676798.png',
      'https://kulikov.com/storage/product_files/faqrqbCfxLna2FXcOLCaARORJj4QcFHdd52a2erS.jpg',
      'https://rosepng.com/wp-content/uploads/2024/08/s11728_cherry_isolated_on_white_background_7976b73c-e179-4513-b848-0137b2cc32fc_3-photoroom.png',
      'https://kulikov.com/storage/product_files/WhYR6VMqoKMgqW5tl8RQk8kSl3AEuG0htsWjkV4Q.jpg'
    ]
  },
  {
    title: 'Яйца для Торта',
    text1: `Мы используем только свежие яйца от проверенных,<br /> чтобы добиться идеального бисквита.
    Яйца придают <br/> тесту пышность, структуру и неповторимую мягкость`,
    text2: `Каждое яйцо — это важный элемент, который придает<br/> нашему тесту лёгкость и воздушность. 
    Благодаря им <br/> наши бисквиты получаются лёгкими, воздушными <br/> и в то же время насыщенными
    `,
    bigText: `10 000 свежих яиц каждый месяц`,
    images: [
      'https://wallpapers.com/images/hd/golden-wheat-stalks-84acyg1htfxt4w33.png',
      'https://images.gastronom.ru/QrWwFVoebkS6UaWYjAawCkYKUaB75hvNVYFWfB45YJ0/pr:product-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzc3OGZmMWYxLTkzZmYtNDkwNS1iZWQ0LWU4MjNmM2RjYjYwZi5qcGc.webp',
      'https://www.transparentpng.com/download/egg/znePjF-egg-clipart-photo.png',
      'https://st24.stpulscen.ru/images/product/217/941/609_original.jpg'
    ]
  }
];

export default function Main1() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const current = sections[index];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((prev) => (prev + 1) % sections.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={index}
        className="main-container"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Текстовый блок */}
        <motion.div className="text-block" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
          <motion.h1 className="text_main" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.5 }}>
            {current.title}
          </motion.h1>
          <motion.p className="regular_text" dangerouslySetInnerHTML={{ __html: current.text1 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }} />
          <motion.p className="regular_text2" dangerouslySetInnerHTML={{ __html: current.text2 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.5 }} />
          <motion.a className="" href="#header" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
            </motion.a>
        </motion.div>

        {/* Блок с цифрами */}
        <motion.div className="photo-img" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}>
          <p className='big-text'>{current.bigText}</p>
        </motion.div>

        {/* Изображения */}
        <motion.div className="images-wrapper" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }}>
          {current.images.map((img, i) => (
            <motion.div
              key={img}
              className={`image-container${i + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.1, ease: "backOut" }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={img} alt={`Изображение ${i + 1}`} />
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          className="arrow-button"
          onClick={handleNext}
          whileHover={{ scale: 1.1, backgroundColor: "#f8f8f8", boxShadow: "0 0 15px rgba(0,0,0,0.2)" }}
          whileTap={{ scale: 0.95, backgroundColor: "#eee" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <motion.path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.0 }} />
          </svg>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
