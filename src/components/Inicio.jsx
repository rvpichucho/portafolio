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
            <div className="icon-container">
            <a href="https://www.linkedin.com/in/romel-vinicio-pichucho-tandalla-302212185" target="_blank" rel="noopener noreferrer">
                <Card.Img className="icon_style mx-auto d-block" src={link} />
              </a>
              <Card.Img className="icon_style mx-auto d-block" src={facebook} />
              <Card.Img className="icon_style mx-auto d-block" src={instagram} />
              <a href="https://github.com/rvpichucho" target="_blank" rel="noopener noreferrer">
              <Card.Img className="icon_style mx-auto d-block" src={git} />
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
