import { useState } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [showCopyright, setShowCopyright] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowCopyright(true);
    }, 2000); // 2 detik
  };

  return (
    <footer className={styles.footer}>
      {isLoading ? (
        <p>Loading...</p>
      ) : showCopyright ? (
        <p>&copy; Copyright || 152023056 - M. Hanif Fakhmi A.A</p>
      ) : (
        <button onClick={handleClick} className={styles.btn}>
          Tampilkan ©
        </button>
      )}
    </footer>
  );
};

export default Footer;
