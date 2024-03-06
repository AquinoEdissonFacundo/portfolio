import React, { useState, useEffect } from 'react';
import styles from './navbar.module.css'; // Estilos CSS

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };
    handleResize(); // Llamar a la función una vez al inicio para establecer el estado inicial
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      {isMobile ? (
        <>
          <button className={styles.menuButton} onClick={toggleMenu}>
            Menu
          </button>
          {menuOpen && (
            <div className={styles.mobileMenu}>
              <a href='#about'>Sobre mí</a>
              <a href='#projects'>Proyectos</a>
              <a href='#footer'>Contactame</a>
              <a
                href={`/CV_FacundoToloza.pdf`}
                download='CV_FacundoToloza.pdf'
                target='_blank'
              >
                Descargar CV
              </a>
              <div className={styles.navbarSocial}>
                <a
                  href='https://github.com/AquinoEdissonFacundo'
                  target='_blank'
                >
                  <img src='/GitHub.svg' />
                </a>
                <a
                  href='https://www.linkedin.com/in/facundo-toloza/'
                  target='_blank'
                >
                  <img src='/Linkedin.svg' />
                </a>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className={styles.navbarLinks}>
          <a href='#about'>Sobre mí</a>
          <a href='#projects'>Proyectos</a>
          <a href='#footer'>Contactame</a>
          <a
            href={`/CV_FacundoToloza.pdf`}
            download='CV_FacundoToloza.pdf'
            target='_blank'
          >
            Descargar CV
          </a>
          <div className={styles.navbarSocial}>
            <a href='https://github.com/AquinoEdissonFacundo' target='_blank'>
              <img src='/GitHub.svg' />
            </a>
            <a
              href='https://www.linkedin.com/in/facundo-toloza/'
              target='_blank'
            >
              <img src='/Linkedin.svg' />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
