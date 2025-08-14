// src/components/About/About.jsx
import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import aboutImage from '../../assets/pic2.jpg';

const skills = [
  { name: 'C# / ASP.NET Core', level: 90 },
  { name: 'React & TypeScript', level: 85 },
  { name: 'JavaScript (ES6+)', level: 80 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'SQL Server & MongoDB', level: 80 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'UI/UX & Responsive Design', level: 85 },
];

const About = () => {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, currentLevel: 0 })));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          skills.forEach((skill, index) => {
            const finalLevel = skill.level;
            const step = finalLevel / 100;
            let current = 0;
            const timer = setInterval(() => {
              current += step;
              if (current >= finalLevel) {
                current = finalLevel;
                clearInterval(timer);
              }
              setAnimatedSkills(prevSkills => {
                const newSkills = [...prevSkills];
                newSkills[index].currentLevel = Math.floor(current);
                return newSkills;
              });
            }, 10);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });

    const skillsElement = document.getElementById('skillsSection');
    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (skillsElement) {
        observer.unobserve(skillsElement);
      }
    };
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        
        {/* የመግለጫ አንቀጾች ሙሉ ስክሪን ይይዛሉ */}
        <div className={styles.descriptionSection}>
          <p className={styles.description}>
            Hello, I'm Biniyam, a passionate and dedicated **full-stack developer** from Addis Ababa. I have a solid background in building robust backend services with **C# and ASP.NET Core**, and creating dynamic, user-friendly interfaces using **React, Vite, and TypeScript**. My curiosity for how technology works drives me to continuously learn and grow in the ever-evolving world of software development.
          </p>
          <p className={styles.description}>
            My journey into coding began with a fascination for solving complex problems and turning ideas into tangible solutions. I am deeply committed to writing clean, efficient, and maintainable code. When I'm not coding, I enjoy exploring new tech stacks, contributing to open-source projects, and collaborating with fellow developers.
          </p>
        </div>

        {/* የክህሎት ዝርዝር እና ምስል ጎን ለጎን */}
        <div className={styles.skillsAndImageContainer}>
          <div id="skillsSection" className={styles.skills}>
            <h3 className={styles.skillsHeading}>My Skills</h3>
            <div className={styles.skillsContainer}>
              {animatedSkills.map((skill, index) => (
                <div className={styles.skillItem} key={index}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progress}
                      style={{ width: `${skill.currentLevel}%` }}
                    ></div>
                    <span className={styles.percentage}>{skill.currentLevel}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageContainer}>
            <img src={aboutImage} alt="Biniyam Tehakele" className={styles.aboutImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;