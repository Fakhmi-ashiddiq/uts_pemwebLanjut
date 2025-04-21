// src/components/ProjectCard.jsx
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, date, description, tech, image, link }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p><strong>Tanggal:</strong> {date}</p>
      <p>{description}</p>
      <p><strong>Teknologi:</strong> {tech.join(', ')}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">Lihat Proyek</a>}
    </div>
  );
};

export default ProjectCard;
