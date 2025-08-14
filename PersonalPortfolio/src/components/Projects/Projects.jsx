// src/components/Projects/Projects.jsx
import React from 'react';
import styles from './Projects.module.css';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'PNS (Push Notification System)',
    description: 'A robust push notification system built with C# and .NET Framework. It leverages Swagger for API documentation and provides a clear, well-structured REST API for sending real-time alerts and messages to users.',
    technologies: ['C#', '.NET Framework', 'Swagger', 'REST API'],
    githubLink: 'https://github.com/your-username/pns-system',
    liveLink: 'https://your-pns-live-demo.netlify.app',
  },
  {
    title: 'Student Feedback System',
    description: 'A platform for collecting and analyzing student feedback on courses and instructors. It provides valuable insights through charts and reports, helping educational institutions to improve their teaching quality.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
    githubLink: 'https://github.com/your-username/student-feedback-system',
    liveLink: 'https://your-feedback-system-live-demo.netlify.app',
  },
  {
    title: 'Quiz App',
    description: 'An interactive and engaging quiz application with multiple-choice questions, a timer, and a score tracker. The app is built with a clean user interface and is fully responsive for all devices.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'APIs'],
    githubLink: 'https://github.com/your-username/quiz-app',
    liveLink: 'https://your-quiz-app-live-demo.netlify.app',
  },
  {
    title: 'Health Notebook',
    description: 'A digital health notebook for tracking daily health metrics like food intake, exercise, and mood. It helps users maintain a healthy lifestyle by providing data visualization and personalized reports.',
    technologies: ['React', 'Redux', 'Firebase', 'CSS Modules'],
    githubLink: 'https://github.com/your-username/health-notebook',
    liveLink: 'https://your-health-notebook-live-demo.netlify.app',
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>My Projects</h2>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
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