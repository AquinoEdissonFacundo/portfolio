// About.jsx
import React from 'react';
import styles from './about.module.css';
import Text from './text';
const About = () => {
  return (
    <div className={styles.container} id='about'>
      <div className={styles.section}>
        <div className={styles.profilePicContainer}></div>
        <p className={styles.name}>
          <p>HOLA, SOY</p> <Text />
        </p>
        <p className={styles.description}>
          CREO FIRMEMENTE EN EL VALOR HUMANO, PRIORIZANDO LA EMPATÍA Y LA
          CONSTRUCCIÓN DE RELACIONES SÓLIDAS. MI CAPACIDAD DE ADAPTACIÓN A
          DIVERSOS ENTORNOS Y DESAFÍOS, JUNTO CON MI CONSTANTE MOTIVACIÓN POR
          APRENDER Y CRECER PROFESIONALMENTE, ME PERMITE CONTRIBUIR DE MANERA
          SIGNIFICATIVA EN DIVERSOS PROYECTOS Y EQUIPOS.
        </p>
        <div className={styles.iconContainer}>
          <a href='https://www.linkedin.com/in/facundo-toloza/' target='_blank'>
            <img src='/Linkedin.svg' />
          </a>
          <a href='https://github.com/AquinoEdissonFacundo' target='_blank'>
            <img src='/GitHub.svg' />
          </a>
          <a
            href={`/CV_FacundoToloza.pdf`}
            download='CV_FacundoToloza.pdf'
            style={{ width: ' 27px' }}
            target='_blank'
          >
            <img src='/descargar.svg' alt='Descargar' />
          </a>
        </div>
      </div>
      <div className={styles.profilePic}>
        <img src='/EdissonFacundo.png' alt='Foto de perfil' />
      </div>
    </div>
  );
};

export default About;
