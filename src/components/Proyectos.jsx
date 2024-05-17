import "../styles/proyectos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Carousel } from "react-bootstrap";
import arma from "../assets/armas.jpg";
import kaizen from '../assets/kaizen-1-1@2x.png';
import detect from '../assets/Circuito.jpg';
import panel from '../assets/panel.png';
import animeapp from '../assets/animeapp.png';
import deportivo from '../assets/deportivo.png';
import seniales from '../assets/seniales.png';
import transformador from '../assets/transformador.png';
function Proyectos() {
  return (
    <Container fluid className="p-4" id="Proyectos">
      <Card.Title className="style_title_proyectos">Mis Proyectos</Card.Title>
      <div className="icon_container_proyecto">
        <Carousel className="w-100">
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={detect} />
                  <Card.Text className="color_parrafo_proyecto">
                    Sistema de Re-identificación de personas mediante su rostro o mediante el cuerpo en un circuito cerrado de cámaras.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={kaizen} />
                  <Card.Text className="color_parrafo_proyecto">
                    Sistema de obtención de información mediante su cédula de identidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={arma} />
                  <Card.Text className="color_parrafo_proyecto">
                    Sistema de detección de personas con armas de fuego y armas blancas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={panel} />
                  <Card.Text className="color_parrafo_proyecto">
                    Sistema administrativo para preuniversitarios para matriculas y cursos online.
                  </Card.Text>
                  
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={animeapp} />
                  <Card.Text className="color_parrafo_proyecto">
                  Aplicación móvil y web para ver sus series y películas favoritas si publicidad.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={deportivo} />
                  <Card.Text className="color_parrafo_proyecto">
                  Aplicación móvil para transmisiones gratuitas de partidos de futbol, estadísticas de equipos,jugadores y ligas.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={seniales} />
                  <Card.Text className="color_parrafo_proyecto">
                  Aplicación móvil inteligente para detección de señales de tránsito.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Card className="container_card text-center">
                <Card.Body>
                  <Card.Img className="image_style_proyecto mx-auto d-block" src={transformador} />
                  <Card.Text className="color_parrafo_proyecto">
                 Sistema para Análisis de gases disueltos para el mantenimiento preventivo de transformadores de potencia.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </Carousel.Item>
        </Carousel>
        
      </div>
    </Container>
  );
}

export default Proyectos;
