import React from 'react';
import styles from './projects.module.css';
import { Fade } from 'react-reveal';

const Projects = () => {
  return (
    <div className={styles.container}>
      <Fade bottom delay={500}>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <img src='/glamify.jpg' alt='Proyecto 1' className={styles.image} />
            <div className={styles.overlay}>
              <a
                href='https://github.com/tu-usuario/proyecto1'
                className={styles.githubLink}
              >
                <img
                  className={styles.icongithub}
                  src='GitHub.svg'
                  alt='github'
                />
              </a>
            </div>
          </div>
          <div className={styles.text}>
            <h2 className={styles.h2text}>GLAMIFY E-COMMERCE</h2>
            APLICACIÓN DE MODA DE ALTA COSTURA COMPITIENDO CON TIENDAS ONLINE.
            OFRECE EXPERIENCIA DE USUARIO EXCEPCIONAL: NAVEGACIÓN FLUIDA, COMPRA
            FÁCIL Y GUARDAR FAVORITOS. PERMITE EXPLORAR SECCIONES, AÑADIR AL
            CARRITO Y GUARDAR PARA FUTURAS COMPRAS. ENFOCADA EN LA EXCELENCIA DE
            LA EXPERIENCIA DE COMPRA DE MODA DE LUJO.
          </div>
        </div>
      </Fade>
      <Fade bottom delay={1000}>
        <div className={`${styles.project} ${styles.reversecontainer}`}>
          {' '}
          <div className={styles.text}>
            <h2 className={styles.h2text}>AGILIX</h2>
            AGILIX: APLICACIÓN TODO EN UNO PARA PYMES, GESTIONANDO INVENTARIO,
            CLIENTES Y VENTAS. FACILITA PAGOS CON CÓDIGOS QR DE MERCADO PAGO,
            CONTROLA STOCK, Y OFRECE ANÁLISIS DE VENTAS. SIMPLIFICA PROCESOS Y
            TOMA DE DECISIONES ESTRATÉGICAS CON GRÁFICOS COMPARATIVOS DE VENTAS
            MENSUALES. IDEAL PARA NEGOCIOS MEDIANOS Y PEQUEÑOS.
          </div>
          <div className={styles.imageContainer}>
            <img src='/Agilix.png' alt='Proyecto 2' className={styles.image} />
            <div className={styles.overlay}>
              <a
                href='https://github.com/tu-usuario/proyecto2'
                className={styles.githubLink}
              >
                <img
                  className={styles.icongithub}
                  src='GitHub.svg'
                  alt='github'
                />
              </a>
            </div>
          </div>
        </div>
      </Fade>
      <Fade bottom delay={1000}>
        <div className={styles.project}>
          <div className={styles.imageContainer}>
            <img src='/Food.png' alt='Proyecto 3' className={styles.image} />
            <div className={styles.overlay}>
              <a
                href='https://github.com/tu-usuario/proyecto3'
                className={styles.githubLink}
              >
                <img
                  className={styles.icongithub}
                  src='GitHub.svg'
                  alt='github'
                />
              </a>
            </div>
          </div>
          <div className={styles.text}>
            <h2 className={styles.h2text}>FOOD</h2>
            APLICACIÓN WEB PARA BUSCAR Y DESCUBRIR RECETAS DE COMIDA Y POSTRES.
            CONECTA CON UNA API PARA FILTRAR POR TIPO, ORDEN ALFABÉTICO,
            BÚSQUEDA POR NOMBRE Y PAGINACIÓN. PERMITE DESCUBRIR MILES DE
            RECETAS, INCLUSO CREAR LAS PROPIAS. INTERFAZ INTUITIVA PARA
            NAVEGACIÓN.
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Projects;
