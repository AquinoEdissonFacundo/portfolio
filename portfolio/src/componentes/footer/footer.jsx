import React from 'react';
import styles from './footer.module.css'; // Asegúrate de tener un archivo CSS para estilos

const footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.boxcontainer}>
        <div className={styles.box}>
          <h2>
            <img src='guiño.svg' alt='guiño emoji' />
            Sobre mí
          </h2>
          <p>
            Desarrollador web apasionado por la innovación y las relaciones
            humanas. Experiencia en proyectos colaborativos. Motivado por
            aprender.
          </p>
        </div>
        <div className={styles.box}>
          <h2>
            <img src='gafas.svg' alt='gafas' />
            Intereses/Hobbies
          </h2>
          <ul>
            <li>Adoro los perros</li>
            <li>Me encanta la música</li>
            <li>Disfruto del cine</li>
            <li>Aprecio el arte</li>
            <li>Apacionado por conocer</li>
          </ul>
        </div>

        <div className={styles.box}>
          <h2>
            <img src='juntos.svg' alt='juntos' />
            Trabajemos juntos
          </h2>
          <button className={styles.boxdescargar}>
            <a href={`/CV_FacundoToloza.pdf`} download='CV_FacundoToloza.pdf'>
              <img src='descargar.svg' alt='Descargar' />
              Descargar CV
            </a>
          </button>
        </div>
      </div>
      <div className={styles.containersect}>
        <div className={styles.bottom}>
          <div>
            <h1 className={styles.name}>
              Facundo <span> Toloza</span>
            </h1>
            <p>
              Contacto: <br />
              aquinoedissonfacundo@gmail.com
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              gap: '1em',
              paddingRight: '2em',
              paddingTop: '1em',
            }}
          >
            <img src='/GitHub.svg' alt='Github' />
            <img src='/Linkedin.svg' alt='Linkedin' />
          </div>
        </div>
        <div className={styles.form}>
          <h2>Formulario</h2>
          <form>
            nombre
            <input type='text' />
            email
            <input type='email' />
            mensaje
            <textarea></textarea>
            <button>Enviar</button>
          </form>
        </div>
      </div>
      <div className={styles.contfooter}>
        <hr className={styles.hr} />
        <p className={styles.namefooter}>@EDISSON FACUNDO DESARROLLADOR WEB</p>
      </div>
    </div>
  );
};

export default footer;
