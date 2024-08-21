import React from 'react';
import styles from './ProjectDetails.module.css';

export function ProjectDetails({ project }) {
  return (
    <div className={styles.projectDetails}>
      <h1>{project.title}</h1>
      <p>Start Date: {project.startDate}</p>
      <p>End Date: {project.endDate}</p>
      <div className={styles.technologies}>
        {project.technologies.map((tech) => (
          <span key={tech} className={styles.technology}>{tech}</span>
        ))}
      </div>
      <section>
        <h2>Project Goals</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} className={styles.image} />
        <p>{project.goals}</p>
      </section>
      <section>
        <h2>Issues</h2>
        <p>{project.issues}</p>
      </section>
      <section>
        <h2>Approach</h2>
        <p>{project.approach}</p>
      </section>
    </div>
  );
}