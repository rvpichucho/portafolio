import "../styles/proyectos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Modal, Button, Carousel } from "react-bootstrap";
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { SiPython, SiPytorch, SiPostgresql, SiScikitlearn, SiMysql, SiOpencv, SiNestjs, SiReact, SiVite, SiFlutter, SiFlask, SiFastapi, SiFirebase, SiLaravel } from 'react-icons/si';
import arma from "../assets/armas.jpg";
import kaizen from '../assets/kaizen-1-1@2x.png';
import detect from '../assets/Circuito.jpg';
import panel from '../assets/panel.png';
import animeapp from '../assets/animeapp.png';
import deportivo from '../assets/deportivo.png';
import seniales from '../assets/seniales.png';
import transformador from '../assets/transformador.png';
import peloteo1 from '../assets/peloteo1.jpg';
import peloteo2 from '../assets/peloteo2.jpg';
import peloteo3 from '../assets/peloteo3.jpg';
import peloteo4 from '../assets/peloteo4.jpg';
import peloteo5 from '../assets/peloteo5.jpg';
import panelreid from '../assets/panelreid.jpg';
import arma1 from '../assets/arma1.jpeg';
import arma2 from '../assets/arma2.jpeg';
import arma3 from '../assets/arma3.jpeg';
import vial1 from '../assets/vial1.jpg';
import vial2 from '../assets/vial2.jpg';
import vial3 from '../assets/vial3.jpg';
import vial4 from '../assets/vial4.jpg';

function Proyectos() {
  const proyectos = [
    {
      imagen: detect,
      imagenes: [detect, panelreid],
      titulo: "Sistema de Re-identificación",
      descripcion: "Sistema multi-cámara (5 cámaras IP) desarrollado en Python para control de acceso en instituciones educativas. Combina reconocimiento facial y análisis soft-biométrico (color de la vestimenta, textura de la vestimenta) para identificación precisa de personas. Utiliza OpenCV para procesamiento de video en tiempo real, scikit-learn para modelos de machine learning, y MySQL para gestión de datos y registros de acceso.",
      tecnologias: ['python','scikitlearn','mysql','opencv'],
      github: null
    },
    {
      imagen: kaizen,
      titulo: "Kasper",
      descripcion: "Aplicación API desarrollada con FastAPI en Python para consultar información mediante cédula de identidad. Desarrollada para una empresa de cobranzas para completar formularios requeridos. Incluye base de datos en Firebase para almacenar el contenido de las peticiones diarias a la API.",
      tecnologias: ['python', 'fastapi', 'firebase'],
      github: null
    },
    {
      imagen: arma,
      imagenes: [arma, arma1, arma2, arma3],
      titulo: "Detección de armas",
      descripcion: "Sistema de detección de personas con armas de fuego y armas blancas. Aplicación web con API desarrollada en Flask para procesar frames de cámaras IP en tiempo real, utilizando Python y scikit-learn para el análisis, y frontend en React.",
      tecnologias: ['python', 'scikitlearn', 'flask', 'react', 'opencv'],
      github: null
    },
    {
      imagen: panel,
      titulo: "Sistema administrativo",
      descripcion: "Sistema administrativo para registro y matrícula de estudiantes en preuniversitarios. Plataforma educativa con acceso a material didáctico de diferentes asignaturas, pruebas de universidades ecuatorianas y simuladores que muestran el avance de cada estudiante. Desarrollado completamente en Laravel con base de datos MySQL.",
      tecnologias: ['laravel', 'mysql'],
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
      imagenes: [seniales, vial1, vial2, vial3, vial4],
      titulo: "Señales de tránsito",
      descripcion: "Aplicación móvil desarrollada en React Native para educación vial en escuelas de conducción. Incluye retos, pruebas y visión por computadora: el usuario toma una foto de una señal de tránsito y recibe información detallada. Backend en FastAPI, modelo de IA entrenado con Python y PyTorch, procesamiento de imágenes con OpenCV. Múltiples módulos para estudiantes. Base de datos PostgreSQL.",
      tecnologias: ['reactnative', 'fastapi', 'python', 'pytorch', 'opencv', 'postgresql'],
      github: null
    },
    {
      imagen: transformador,
      titulo: "Análisis de gases",
      descripcion: "Aplicación de escritorio para ingenieros eléctricos orientada al mantenimiento preventivo de transformadores de potencia mediante el análisis de gases disueltos (DGA). Desarrollada en Python, incorpora una red neuronal implementada con PyTorch para el diagnóstico y clasificación de fallas, y utiliza PostgreSQL para el almacenamiento y consulta de los resultados de diagnóstico.",
      tipos: ['transformador'],
      tecnologias: ['python','pytorch','postgresql'],
      github: null
    },
    {
      imagen: peloteo1,
      imagenes: [peloteo1, peloteo2, peloteo3, peloteo4, peloteo5],
      titulo: "Peloteo",
      descripcion: "Sistema completo para reservas de canchas deportivas (fútbol, básquetbol, voleibol). Aplicación móvil desarrollada con Flutter donde los usuarios pueden registrarse y reservar canchas por tiempo. Panel administrativo para gestionar reservas, cobros y cancelaciones. Backend desarrollado con NestJS, base de datos PostgreSQL, panel administrativo con React + Vite.",
      tecnologias: ['flutter','nestjs','postgresql','react','vite'],
      github: null
    }
  ];

  const [selected, setSelected] = useState(null);
  const [show, setShow] = useState(false);

  const openModal = (proyecto) => {
    setSelected(proyecto);
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
    setSelected(null);
  };

  const renderTechIcon = (name) => {
    switch(name) {
      case 'python': return <SiPython title="Python" className="tech-svg" />;
      case 'pytorch': return <SiPytorch title="PyTorch" className="tech-svg" />;
      case 'postgresql': return <SiPostgresql title="PostgreSQL" className="tech-svg" />;
      case 'scikitlearn': return <SiScikitlearn title="scikit-learn" className="tech-svg" />;
      case 'mysql': return <SiMysql title="MySQL" className="tech-svg" />;
      case 'opencv': return <SiOpencv title="OpenCV" className="tech-svg" />;
      case 'nestjs': return <SiNestjs title="NestJS" className="tech-svg" />;
      case 'react': return <SiReact title="React" className="tech-svg" />;
      case 'vite': return <SiVite title="Vite" className="tech-svg" />;
      case 'flutter': return <SiFlutter title="Flutter" className="tech-svg" />;
      case 'flask': return <SiFlask title="Flask" className="tech-svg" />;
      case 'fastapi': return <SiFastapi title="FastAPI" className="tech-svg" />;
      case 'firebase': return <SiFirebase title="Firebase" className="tech-svg" />;
      case 'laravel': return <SiLaravel title="Laravel" className="tech-svg" />;
      case 'reactnative': return <SiReact title="React Native" className="tech-svg" />;
      default: return null;
    }
  };

  return (
    <section id="Proyectos">
      <div className="section-container">
        <h2 className="section-title">Proyectos</h2>

        <div className="proyecto-grid">
          {proyectos.map((proyecto, idx) => (
            <Card key={idx} className="proyecto-card" onClick={() => openModal(proyecto)}>
              <div className="proyecto-card-img">
                <img src={proyecto.imagen} alt={proyecto.titulo} className="image_style_proyecto" />
              </div>
              <Card.Body>
                <Card.Title>{proyecto.titulo}</Card.Title>
                {/* Mostrar solo iconos de tecnologías en la tarjeta (afuera) */}
                {proyecto.tecnologias && (
                  <div className="card-tech-icons">
                    {proyecto.tecnologias.map((t, i) => (
                      <span key={i} className="card-tech-icon">{renderTechIcon(t)}</span>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          ))}
        </div>

        <Modal show={show} onHide={closeModal} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selected?.titulo}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={7} sm={12} className="modal-image-col">
                {selected?.imagenes ? (
                  <Carousel>
                    {selected.imagenes.map((img, idx) => (
                      <Carousel.Item key={idx}>
                        <img src={img} alt={`${selected.titulo} ${idx + 1}`} className="proyecto-modal-img" />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <img src={selected?.imagen} alt={selected?.titulo} className="proyecto-modal-img" />
                )}
              </Col>
              <Col md={5} sm={12} className="modal-info-col">
                <p className="proyecto-descripcion">{selected?.descripcion}</p>

                {selected?.tecnologias && (
                  <div className="proyecto-techs">
                    <h5 className="techs-title">Tecnologías usadas</h5>
                    <div className="tech-icons">
                      {selected.tecnologias.map((t, i) => (
                        <span key={i}>{renderTechIcon(t)}</span>
                      ))}
                    </div>
                  </div>
                )}

              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default Proyectos;
