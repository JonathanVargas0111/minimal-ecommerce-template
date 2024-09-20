import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div class="footer-container">
        <div class="footer-logo">
          <h2>Logo</h2>
          <div class="footer-links">
            <a href="#">logo</a>
            <a href="#">logo</a>
            <a href="#">logo</a>
            <a href="#">logo</a>
            <a href="#">logo</a>
          </div>
        </div>

        <div class="footer-info">
          <a href='#'>Privacy Policy</a>
          <a href='#'>Terms of Service</a>
          <a href='#'>Cookies Setting</a>
        </div>
      </div>

      <div className='footer-copy'>
        <p>&copy; 2024 Minimal E-commerce Template. Todos los derechos reservados.</p>
        <p>Hecho con ❤️ por el equipo de desarrollo.</p>
      </div>
    </footer>
  );
};

export default Footer;
