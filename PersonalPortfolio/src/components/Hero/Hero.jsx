// src/components/Hero/Hero.jsx

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import hero0vid from '../../assets/hero-video.mp4';

const phrases = ["Web Developer", "Problem Solver", "UI/UX Enthusiast", "Biniyam Tehakele"];

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    // tick ተግባርን ከ setInterval በፊት እናስቀምጣለን
    const tick = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setTypingSpeed(50);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setTypingSpeed(1000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker); };
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <p className={styles.greeting}>Hello, I'm</p>
          {/* <h1 className={styles.name}>Biniyam Tehakele</h1> */}
          <h2 className={styles.title}>
            <span className={styles.highlight}>{text}</span>
            <span className={styles.cursor}>|</span>
          </h2>
          <p className={styles.description}>
            I am Biniyam Tehakele, a passionate full-stack developer with a strong foundation in building modern, responsive, and user-friendly web applications. I specialize in backend development using ASP.NET Core and frontend solutions with React. My goal is to create impactful and efficient software that solves real-world problems.
          </p>
          <div className={styles.socialLinks}>
            <a href="https://github.com/BinaDev29" target="_blank" rel="noopener noreferrer">
              <FaGithub className={styles.icon} />
            </a>
            <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className={styles.icon} />
            </a>
            <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
              <FaTwitter className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.heroVideoContainer}>
          <video className={styles.heroVideo} autoPlay loop muted>
            <source src={hero0vid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;