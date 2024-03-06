import React from 'react';
import { motion } from 'framer-motion';
import styles from './body.module.css';
import Skills from './skills';

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
      duration: 1, // Duración de la transición en segundos
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Body = () => {
  return (
    <motion.div
      className={styles.bodycontainer}
      variants={container}
      initial='hidden'
      animate='visible'
    >
      <div className={styles.bg}></div>
      <hr className={styles.bodyhr} />
      <div className={styles.containerbodyh1}>
        <motion.h1 className={styles.bodyh1} variants={item}>
          DESARROLLADOR
        </motion.h1>
        <motion.h1 className={styles.bodyh1} variants={item}>
          WEB
        </motion.h1>
      </div>
      <hr className={styles.bodyhr} />
      <Skills />
    </motion.div>
  );
};

export default Body;
