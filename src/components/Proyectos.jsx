import "../styles/inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
import foto from "../assets/fotoR.png";
import facebook from "../assets/facebook-1@3x.png";
import instagram from "../assets/instagram-1@3x.png";
import git from "../assets/github-1@3x.png";
import link from "../assets/linkedin-1-1@3x.png";
function Proyectos() {
  return (
    <Container fluid className="p-4" id="Proyectos">
      <CardGroup>
        <Card className="container_card">
          <Card.Body>
            <Card.Text className="color_text">¡Hola y bienvenido/a mi portafolio digital!</Card.Text>
            <Card.Text className="color_parrafo">
              Soy Romel Pichucho, un apasionado ingeniero en software con una sólida formación y experiencia en el desarrollo de soluciones tecnológicas innovadoras.
            </Card.Text>
            <Button className="button_style">Descarga CV</Button>
            <div className="icon-container">
              <Card.Img className="icon_style mx-auto d-block" src={link} />
              <Card.Img className="icon_style mx-auto d-block" src={facebook} />
              <Card.Img className="icon_style mx-auto d-block" src={instagram} />
              <Card.Img className="icon_style mx-auto d-block" src={git} />
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
export default Proyectos;
