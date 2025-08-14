// src/components/Header/Header.jsx

import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h3 className={styles.title}>BinaDev29</h3>
      </div>

      <nav className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
        <ul className={styles.navList}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
      </nav>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;