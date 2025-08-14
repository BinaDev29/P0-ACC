import React from 'react';
import styles from './Projects.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'; // አዶዎችን እንጠቀም

const projects = [
  {
    title: 'Project Alpha',
    description: 'A responsive e-commerce platform built with React and Node.js. It features user authentication, a shopping cart, and a secure payment gateway.',
    image: '/project-alpha.png', // የፕሮጀክትህን ምስል መንገድ
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/your-username/project-alpha',
    liveLink: 'https://project-alpha.netlify.app',
  },
  {
    title: 'Project Beta',
    description: 'A social media application with a clean UI, allowing users to share photos and connect with friends. Built with a modern tech stack.',
    image: '/project-beta.png',
    technologies: ['React', 'Redux', 'Firebase', 'CSS Modules'],
    githubLink: 'https://github.com/your-username/project-beta',
    liveLink: 'https://project-beta.netlify.app',
  },
  // ተጨማሪ ፕሮጀክቶችን እዚህ ውስጥ መጨመር ትችላለህ
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech, i) => (
                    <span key={i} className={styles.techPill}>{tech}</span>
                  ))}
                </div>
                <div className={styles.projectLinks}>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;