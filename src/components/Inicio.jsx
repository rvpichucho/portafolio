import "../styles/inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import foto from "../assets/fotoR.png";
import facebook from "../assets/facebook-1@3x.png";
import instagram from "../assets/instagram-1@3x.png";
import git from "../assets/github-1@3x.png";
import link from "../assets/linkedin-1-1@3x.png";
function Inicio() {
  const descargarCV=()=>{
    const urlCV="https://drive.google.com/file/d/1GHLj_t9axgAY5fMP9EvupFW6uExRjKmy/view?usp=sharing";
    window.open(urlCV, "_blank");
  };
  return (
    <Container fluid className="p-4" id="Inicio">
      <CardGroup>
        <Card className="container_card">
          <Card.Body>
            <Card.Text className="color_text">¡Hola y bienvenido/a mi portafolio digital!</Card.Text>
            <Card.Text className="color_parrafo">
              Soy Romel Pichucho, un apasionado ingeniero en software con una sólida formación y experiencia en el desarrollo de soluciones tecnológicas innovadoras.
            </Card.Text>
            <Button className="button_style" onClick={descargarCV}>Descarga CV</Button>
            <div className="social-icons-container">
              <a href="https://www.linkedin.com/in/romel-vinicio-pichucho-tandalla-302212185" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <div className="social-icon linkedin-icon">
                  <img src={link} alt="LinkedIn" />
                </div>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <div className="social-icon facebook-icon">
                  <img src={facebook} alt="Facebook" />
                </div>
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <div className="social-icon instagram-icon">
                  <img src={instagram} alt="Instagram" />
                </div>
              </a>
              <a href="https://github.com/rvpichucho" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <div className="social-icon github-icon">
                  <img src={git} alt="GitHub" />
                </div>
              </a>
            </div>
          </Card.Body>
        </Card>
        <Card className="container_card">
          <Card.Body>
            <Card.Img className="image_style mx-auto d-block" src={foto} />
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
export default Inicio;
