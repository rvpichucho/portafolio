import { FaLinkedin, FaGithub, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';
import '../styles/navigtion.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/romel-vinicio-pichucho-tandalla-302212185" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rvpichucho" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
        <p className="footer-text">
          Hecho con <FaHeart className="heart-icon" /> por Ing. Romel Pichucho © 2025
        </p>
      </div>
    </footer>
  );
}

export default Footer;