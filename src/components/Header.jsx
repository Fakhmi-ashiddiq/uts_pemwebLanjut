import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/arthur1.jpg" alt="Foto Profil" className={styles.profileImg} />
      <h1>M. Hanief Fakhmi A.A</h1>
      <p>Seorang mahasiswa pengembang web yang fokus pada React dan UI modern.</p>
      <nav className={styles.nav}>
        <a href="#about">Tentang</a>
        <a href="#projects">Proyek</a>
        <a href="#contact">Kontak</a>
      </nav>
    </header>
  );
};

export default Header;
