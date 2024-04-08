import "../styles/proyectos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, CardGroup } from "react-bootstrap";
import arma from "../assets/armas.jpg";
import kaizen from '../assets/kaizen-1-1@2x.png'
import detect from '../assets/Circuito.jpg'
function Proyectos() {
  return (
    <Container fluid className="p-4" id="Proyectos">
      <Card.Title className="style_title_proyectos"> Mis Proyectos</Card.Title>  
      <div className="icon_container_proyecto">
      <CardGroup>
        <Card className="container_card">
          <Card.Body>
          <Card.Img className="image_style_proyecto mx-auto d-block" src={detect} />
          <Card.Text className="color_parrafo_proyecto">
          Sistema de Re-identificación de personas mediante su rostro o mediante el cuerpo en un circuito cerrado de cámaras.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="container_card">
          <Card.Body>
            <Card.Img className="image_style_proyecto mx-auto d-block" src={kaizen} />
            <Card.Text className="color_parrafo_proyecto" > Sistema de obtención de información mediante su cédula de identidad.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="container_card">
          <Card.Body>
            <Card.Img className="image_style_proyecto mx-auto d-block" src={arma} />
            <Card.Text className="color_parrafo_proyecto">
            Sistema de detección de personas con armas de fuego y armas blancas.
            </Card.Text>
          </Card.Body>
        </Card>
        
      </CardGroup>
      </div>
      
    </Container>
  );
}
export default Proyectos;
