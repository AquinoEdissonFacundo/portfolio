import React, { useState, useEffect } from 'react';
import styles from './projects.module.css';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'GLAMIFY E-COMMERCE',
      description: 'APLICACIÓN DE MODA DE ALTA COSTURA...',
      image: '/glamify.jpg',
      githubLink: 'https://github.com/tu-usuario/proyecto1',
      delay: 0.5,
    },
    {
      title: 'AGILIX',
      image: '/Agilix.png',
      description: 'AGILIX: APLICACIÓN TODO EN UNO PARA PYMES...',
      githubLink: 'https://github.com/tu-usuario/proyecto2',
      delay: 0.7,
    },
    {
      title: 'FOOD',
      description: 'APLICACIÓN WEB PARA BUSCAR Y DESCUBRIR RECETAS...',
      image: '/Food.png',
      githubLink: 'https://github.com/tu-usuario/proyecto3',
      delay: 0.9,
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      const newVisibleProjects = projects.reduce((acc, project, index) => {
        const element = document.getElementById(`project-${index}`);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollPosition + windowHeight > elementTop) {
            acc.push(index);
          }
        }
        return acc;
      }, []);

      setVisibleProjects(newVisibleProjects);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [projects]);

  return (
    <div className={styles.container} id='projects'>
      {projects.map((project, index) => (
        <motion.div
          key={index}
          id={`project-${index}`}
          className={`${styles.project} ${
            index % 2 === 1 ? styles.reversecontainer : ''
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: visibleProjects.includes(index) ? 1 : 0,
            y: visibleProjects.includes(index) ? 0 : 50,
          }}
          transition={{ duration: 0.5, delay: project.delay }}
          whileHover='visible'
        >
          <div className={styles.imageContainer}>
            <img
              src={project.image}
              alt={`Proyecto ${index + 1}`}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <a href={project.githubLink} className={styles.githubLink}>
                <img
                  className={styles.icongithub}
                  src='GitHub.svg'
                  alt='github'
                />
              </a>
            </div>
          </div>
          <div className={styles.text}>
            <h2 className={styles.h2text}>{project.title}</h2>
            <p className={styles.descriptionp}>{project.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Projects;
