// src/components/Contact/Contact.jsx
import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.subheading}>
          I'm always open to new opportunities and collaborations. Feel free to reach out to me
          for any questions, project ideas, or just to say hello! I will do my best to get back to you as soon as possible.
        </p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <FaEnvelope className={styles.icon} />
              <a href="mailto:biniyamtehakele9@gmail.com" className={styles.link}>biniyamtehakele9@gmail.com</a>
            </div>
            <div className={styles.contactItem}>
              <FaPhone className={styles.icon} />
              <a href="tel:+251919137060" className={styles.link}>+251 91 913 7060</a>
            </div>
            <div className={styles.contactItem}>
              <FaMapMarkerAlt className={styles.icon} />
              <p className={styles.link}>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;