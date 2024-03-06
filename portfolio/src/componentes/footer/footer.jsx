import React, { useState } from 'react';
import styles from './footer.module.css'; // Asegúrate de tener un archivo CSS para estilos
import emailjs from 'emailjs-com';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formDataToSend = {
      ...formData,
      to_name: 'aquinoedissonfacundo@gmail.com', // Cambia esto al correo al que quieras enviar los mensajes
      from_name: formData.name,
      reply_to: formData.email,
    };

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICEID, // Aquí debes especificar el ID del servicio
        import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
        formDataToSend,
        import.meta.env.VITE_APP_EMAILJS_APIKEY
      )

      .then(
        function (response) {
          console.log('Mensaje enviado correctamente', response);
        },
        function (error) {
          console.log('Error al enviar el mensaje', error);
        }
      );

    // Limpiar los campos después del envío
    setFormData({ name: '', email: '', message: '' });
  };

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
            <li>Apasionado por conocer</li>
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
        <div className={styles.form} id='footer'>
          <h2>Formulario</h2>
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='name'
              placeholder='Tu nombre'
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Correo electrónico'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name='message'
              placeholder='Mensaje'
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button type='submit'>Enviar</button>
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

export default Footer;
