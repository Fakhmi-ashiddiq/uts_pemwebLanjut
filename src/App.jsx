import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styles from './App.module.css';
import Footer from './components/Footer';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
