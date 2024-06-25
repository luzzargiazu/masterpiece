import React from 'react';
import '../../estilos/estilos del ejemplo/FooterEJ.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function FooterEJ() {
    return (
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="footer-icon" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="footer-icon" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="footer-icon" />
              </a>
            </div>
            <p>&copy; 2024 Start-Up Argentina S.A. Todos los derechos Reservados.</p>
          </div>
        </footer>
      );
    };

export default FooterEJ;