import React from 'react';
import Navbar from '../navbar/navbar';
import styles from './home.module.css';
import Body from '../body/body';
import About from '../about/about';
import Projects from '../projects/projects';
import Footer from '../footer/footer';
const Home = () => {
  return (
    <div className={styles.homecontainer}>
      <Navbar />
      <Body />
      <About />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
