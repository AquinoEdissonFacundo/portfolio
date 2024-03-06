import React from 'react';
import styles from './navbar.module.css'; // Estilos CSS

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <img
          src='./EdissonFacundo.png'
          alt='Foto de Facundo Toloza'
          className={styles.profilePic}
        />
        <span className={styles.name}>
          Facundo <span>Toloza</span>
        </span>
      </div>
      <div className={styles.navbarLinks}>
        <a href='#about'>About</a>
        <a href='#projects'>Proyectos</a>
        <a href='#cv'>Descargar CV</a>
      </div>
      <div className={styles.navbarSocial}>
        <a href='https://github.com/AquinoEdissonFacundo' target='_blank'>
          <img src='/GitHub.svg' />
        </a>
        <a href='https://www.linkedin.com/in/facundo-toloza/' target='_blank'>
          <img src='/Linkedin.svg' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
