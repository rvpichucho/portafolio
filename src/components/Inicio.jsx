import "../styles/inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub, FaDownload } from 'react-icons/fa';
import foto from "../assets/fotoR.png";

function Inicio() {
  const descargarCV = () => {
    const urlCV = "https://drive.google.com/file/d/1I49Pw2bfLX5pIEGQSCrmzjqbl0JtcACw/view?usp=sharing";
    
    window.open(urlCV, "_blank");
  };
  
  return (
    <section id="Inicio">
      <Container fluid className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Hola, soy</span>
            <h1 className="hero-name">Romel Pichucho</h1>
            <h2 className="hero-title">Ingeniero en Software</h2>
            <p className="hero-description">
              Apasionado por crear soluciones tecnológicas innovadoras 
              con experiencia en desarrollo web, móvil e inteligencia artificial.
            </p>
            
            <div className="hero-actions">
              <Button className="btn-primary-custom" onClick={descargarCV}>
                <FaDownload /> Descargar CV
              </Button>
              <a href="#Contacto" className="btn-secondary-custom">
                Contáctame
              </a>
            </div>
            
            <div className="hero-social">
              <a href="https://www.linkedin.com/in/romel-vinicio-pichucho-tandalla-302212185" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <FaLinkedin />
              </a>
              <a href="https://github.com/rvpichucho" target="_blank" rel="noopener noreferrer" className="social-link github">
                <FaGithub />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="social-link instagram">
                <FaInstagram />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="social-link facebook">
                <FaFacebook />
              </a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-wrapper">
              <img src={foto} alt="Romel Pichucho" />
              <div className="image-decoration"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Inicio;
