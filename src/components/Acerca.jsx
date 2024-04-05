import "../styles/inicio.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, CardGroup } from "react-bootstrap";
import anime from '../assets/anime.png';
function Acerca() {
  return (
    <Container fluid className="p-4" id="Acerca">
      <CardGroup>
        <Card className="container_card">
          <Card.Body>
          <Card.Img className="image_style_acerca mx-auto d-block" src={anime} />
          </Card.Body>
        </Card>
        <Card className="container_card">
          <Card.Body>
            <Card.Text className="color_text_acerca">Acerca de mí</Card.Text>
            <Card.Text className="color_parrafo_acerca">
            ¡Hola! Soy Romel Pichucho, un ingeniero en software con una pasión por la innovación y la resolución de problemas. Desde el principio de mi carrera, me he enfocado en desarrollar soluciones tecnológicas efectivas que impacten positivamente en la vida de las personas. Me esfuerzo por comprender las necesidades del usuario y traducirlas en productos y servicios que superen sus expectativas.
            Mi experiencia abarca una variedad de proyectos, desde aplicaciones móviles hasta sistemas empresariales complejos. Me caracterizo por mi enfoque colaborativo y mi capacidad para trabajar en equipo para alcanzar objetivos comunes. Además, me apasiona mantenerme al día con las últimas tendencias y tecnologías en el campo de la ingeniería de software.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Container>
  );
}
export default Acerca;
