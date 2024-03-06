import React from 'react';
// import Slider from 'react-slick';
import styles from './skills.module.css';
import logos from './logos';

const StackSlider = () => {
  const numberOfRepetitions = 12;
  const infiniteLogos = Array.from(
    { length: numberOfRepetitions },
    () => logos
  ).flat();

  return (
    <div className={styles.slider}>
      <div className={styles.slide}>
        {infiniteLogos.map((logo, index) => (
          <img
            src={logo}
            alt={`logo ${index}`}
            key={index}
            className={styles.img}
          />
        ))}
      </div>
    </div>
  );
};

export default StackSlider;
