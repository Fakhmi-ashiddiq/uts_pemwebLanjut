import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Halo, saya Hanif!</h1>
      <p className={styles.description}>Ini adalah portofolio saya 🚀</p>
    </div>
  );
};

export default Hero;
