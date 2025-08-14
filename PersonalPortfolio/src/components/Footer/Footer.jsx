import React from 'react';
import styles from './Footer.module.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <a href="https://github.com/BinaDev29" target="_blank" rel="noopener noreferrer">
            <FaGithub className={styles.icon} />
          </a>git 
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter className={styles.icon} />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;