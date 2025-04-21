// src/components/Projects.jsx
import { useState } from 'react';
import styles from './Projects.module.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [projects] = useState([
    {
      title: 'Website Portfolio',
      date: 'April 2025',
      description: 'Sebuah website portfolio pribadi dengan React.',
      tech: ['React', 'CSS Module'],
      image: '/project.png',
      link: 'https://github.com/hanif/portfolio'
    },
    {
      title: 'Aplikasi Mountain',
      date: 'Januari 2025',
      description: 'Aplikasi untuk menampilkan informasi Gunung.',
      tech: ['PHP', 'Laravel'],
      image: '/project2.png',
      link: 'https://github.com/152023067-luqmanul-hakim/Mountain-Guide.git'
    },
    // Tambahkan proyek lainnya di sini
  ]);

  return (
    <section id="projects" className={styles.projects}>
      <h2>Proyek Saya</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
