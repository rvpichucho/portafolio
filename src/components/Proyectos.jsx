import "../styles/proyectos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Carousel, Row, Col } from "react-bootstrap";
import arma from "../assets/armas.jpg";
import kaizen from '../assets/kaizen-1-1@2x.png';
import detect from '../assets/Circuito.jpg';
import panel from '../assets/panel.png';
import animeapp from '../assets/animeapp.png';
import deportivo from '../assets/deportivo.png';
import seniales from '../assets/seniales.png';
import transformador from '../assets/transformador.png';
import git from "../assets/github-1@3x.png";

function Proyectos() {
  return (
    <Container fluid className="p-4" id="Proyectos">
      <Card.Title className="style_title_proyectos">Proyectos - Kaizen Software</Card.Title>
      <Carousel className="w-100 proyecto-carousel" indicators={true}>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={detect} alt="Sistema de Re-identificación" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Sistema de Re-identificación de personas mediante su rostro o mediante el cuerpo en un circuito cerrado de cámaras.
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={kaizen} alt="Sistema de información" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Sistema de obtención de información mediante su cédula de identidad.
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={arma} alt="Sistema de detección de armas" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Sistema de detección de personas con armas de fuego y armas blancas.
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={panel} alt="Sistema administrativo" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Sistema administrativo para preuniversitarios para matriculas y cursos online.
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={animeapp} alt="Aplicación de anime" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Aplicación móvil y web para ver sus series y películas favoritas sin publicidad.
                <div className="proyecto-link">
                  <a href="https://github.com/kimise19/AnimeFlv_Front.git" target="_blank" rel="noopener noreferrer">
                    <Card.Img className="icon_style mx-auto d-block" src={git} alt="GitHub" />
                  </a>
                </div>
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={deportivo} alt="Aplicación deportiva" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Aplicación móvil para transmisiones gratuitas de partidos de futbol, estadísticas de equipos, jugadores y ligas.
                <div className="proyecto-link">
                  <a href="https://github.com/kimise19/futbol_app.git" target="_blank" rel="noopener noreferrer">
                    <Card.Img className="icon_style mx-auto d-block" src={git} alt="GitHub" />
                  </a>
                </div>
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={seniales} alt="Aplicación de señales de tránsito" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Aplicación móvil inteligente para detección de señales de tránsito.
                <div className="proyecto-link">
                  <a href="https://github.com/kimise19/traffic_app_FINAL.git" target="_blank" rel="noopener noreferrer">
                    <Card.Img className="icon_style mx-auto d-block" src={git} alt="GitHub" />
                  </a>
                </div>
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
        <Carousel.Item>
          <Row className="d-flex justify-content-center align-items-center">
            <Col lg={7} md={7} sm={12} className="d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="proyecto-image-container">
                <Card.Img className="image_style_proyecto" src={transformador} alt="Sistema de análisis de gases" />
              </div>
            </Col>
            <Col lg={3} md={5} sm={12} className="d-flex align-items-center">
              <Card.Text className="color_parrafo_proyecto">
                Sistema para Análisis de gases disueltos para el mantenimiento preventivo de transformadores de potencia.
              </Card.Text>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Proyectos;
