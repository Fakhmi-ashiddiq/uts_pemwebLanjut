import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Tentang Saya</h2>
          <p>
            Saya adalah mahasiswa yang sedang mempelajari pengembangan web, terutama menggunakan React.
            Saya memiliki ketertarikan pada desain UI/UX dan pengembangan aplikasi modern.
          </p>
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>Laravel</li>
            <li>PHP</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className={styles.imageContainer}>
          <img
            src="arthur2.jpg"
            alt="Profil About"
            className={styles.profileImg}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
