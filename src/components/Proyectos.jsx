import "../styles/proyectos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel, Row, Col } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa';
import arma from "../assets/armas.jpg";
import kaizen from '../assets/kaizen-1-1@2x.png';
import detect from '../assets/Circuito.jpg';
import panel from '../assets/panel.png';
import animeapp from '../assets/animeapp.png';
import deportivo from '../assets/deportivo.png';
import seniales from '../assets/seniales.png';
import transformador from '../assets/transformador.png';

function Proyectos() {
  const proyectos = [
    {
      imagen: detect,
      titulo: "Sistema de Re-identificación",
      descripcion: "Sistema de Re-identificación de personas mediante su rostro o mediante el cuerpo en un circuito cerrado de cámaras.",
      github: null
    },
    {
      imagen: kaizen,
      titulo: "Sistema de información",
      descripcion: "Sistema de obtención de información mediante su cédula de identidad.",
      github: null
    },
    {
      imagen: arma,
      titulo: "Detección de armas",
      descripcion: "Sistema de detección de personas con armas de fuego y armas blancas.",
      github: null
    },
    {
      imagen: panel,
      titulo: "Sistema administrativo",
      descripcion: "Sistema administrativo para preuniversitarios para matriculas y cursos online.",
      github: null
    },
    {
      imagen: animeapp,
      titulo: "Aplicación de anime",
      descripcion: "Aplicación móvil y web para ver sus series y películas favoritas sin publicidad.",
      github: "https://github.com/kimise19/AnimeFlv_Front.git"
    },
    {
      imagen: deportivo,
      titulo: "Aplicación deportiva",
      descripcion: "Aplicación móvil para transmisiones gratuitas de partidos de futbol, estadísticas de equipos, jugadores y ligas.",
      github: "https://github.com/kimise19/futbol_app.git"
    },
    {
      imagen: seniales,
      titulo: "Señales de tránsito",
      descripcion: "Aplicación móvil inteligente para detección de señales de tránsito.",
      github: "https://github.com/kimise19/traffic_app_FINAL.git"
    },
    {
      imagen: transformador,
      titulo: "Análisis de gases",
      descripcion: "Sistema para Análisis de gases disueltos para el mantenimiento preventivo de transformadores de potencia.",
      github: null
    }
  ];

  return (
    <section id="Proyectos">
      <div className="section-container">
        <h2 className="section-title">Proyectos - Kaizen Software</h2>
        
        <Carousel className="proyecto-carousel" indicators={true} interval={5000}>
          {proyectos.map((proyecto, index) => (
            <Carousel.Item key={index}>
              <Row className="proyecto-row">
                <Col lg={7} md={7} sm={12} className="proyecto-imagen-col">
                  <div className="proyecto-image-container">
                    <img 
                      className="image_style_proyecto" 
                      src={proyecto.imagen} 
                      alt={proyecto.titulo} 
                    />
                  </div>
                </Col>
                <Col lg={4} md={5} sm={12} className="proyecto-info-col">
                  <div className="proyecto-info">
                    <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                    {proyecto.github && (
                      <a 
                        href={proyecto.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="proyecto-github-btn"
                      >
                        <FaGithub /> Ver código
                      </a>
                    )}
                  </div>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

export default Proyectos;
