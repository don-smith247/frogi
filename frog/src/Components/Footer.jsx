import React from 'react';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'; 
import styles from './Footer.module.css'; 

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconContainer}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTwitter />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className={styles.icon}>
          <FaTelegramPlane />
        </a>
      </div>
      <p className={styles.copyRight}>CopyRight ◎ 2024 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
