"use client";

import React, { useState } from 'react';
import styles from './ProjectDetails.module.css'; // CSS 모듈 임포트

function highlightKeywords(text: string, keywords: string[]): string {
  let highlightedText = text;
  keywords.forEach(keyword => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
  });
  return highlightedText;
}

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  startDate: string;
  endDate: string;
  technologies: string[];
  position: number;
  objective: string;
  details: string;
  contents: string;
  issues: { title: string; description: string }[]; // Ensure this line is present
  rolesAndSolutions: { role: string; contribution: string }[];
  // pdfLinks: string[];
  
}

export function ProjectDetails({ project }: { project: Project }) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const keywords = [''];

  // Ensure project.images is an array
  const images = Array.isArray(project.images) ? project.images : [];
  const issues = Array.isArray(project.issues) ? project.issues : [];
  const rolesAndSolutions = Array.isArray(project.rolesAndSolutions) ? project.rolesAndSolutions : [];

  const toggleExpandImage = (image: string) => {
    setExpandedImage(expandedImage === image ? null : image);
  };

  return (
    <div className={styles.projectDetails}>
      <header className={styles.projectHeader}>
        <h1>{project.title}</h1>
        <p className={styles.projectPeriod}>{project.startDate} - {project.endDate}</p>
      </header>
      <section>
        <h2>Skills</h2>
        <div className={styles.technologies}>
          {project.technologies.map((tech: string) => (
            <span key={tech} className={styles.technology}>{tech}</span>
          ))}
        </div>
      </section>
      <section>
        <h2>Objective</h2>
        <div className={styles.objective}>
          <div dangerouslySetInnerHTML={{ __html: project.objective }}></div>
          <div className={styles.images}>
            {images.map((image: string, index: number) => (
              <img 
                key={index} 
                src={image} 
                alt={`${project.title} image ${index + 1}`} 
                className={`${styles.image} ${images.length === 1 ? styles.single : ''} ${expandedImage === image ? styles.expanded : ''}`} 
                onClick={() => toggleExpandImage(image)}
              />
            ))}
          </div>
          {/* {project.pdfLinks.map((link, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className={styles.downloadButton}>
              View Related More Detailed File{index + 1}
            </a>
          ))} */}
        </div>
      </section>
      <section>
    <h2>Details</h2>
    <div className={styles.details}>
        <div dangerouslySetInnerHTML={{ __html: project.details }}></div>
    </div>
    <h2>Contents</h2>
    <div className={styles.details}>
        <div dangerouslySetInnerHTML={{ __html: project.contents }}></div>
        {/* New subsection for additional content */}
    </div>      
</section>      
      <section>
        <h2>Issues</h2>
        {issues.map((issue: { title: string; description: string }, index: number) => (
          <div key={index} className={styles.issueItem}>
            <h3>{issue.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: highlightKeywords(issue.description, keywords) }}></p>
          </div>
        ))}
      </section>
      <section>
        <h2>Roles & Contribution</h2>
        {rolesAndSolutions.map((item: { role: string; contribution: string }, index: number) => (
          <div key={index} className={styles.roleItem}>
            <h3>{item.role}</h3>
            <p dangerouslySetInnerHTML={{ __html: highlightKeywords(item.contribution, keywords) }}></p>
            {/* <p><strong>Solution:</strong> {item.solution}</p> */}
          </div>
        ))}
      </section>
    </div>
  );
}