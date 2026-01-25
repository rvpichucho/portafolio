import "../styles/inicio.css";
import { FaCode, FaMobile, FaBrain, FaRocket } from 'react-icons/fa';
import anime from '../assets/anime.png';

// Datos estáticos movidos fuera del componente (rerender-hoist-jsx)
const SERVICIOS_DATA = [
    { icon: <FaCode aria-hidden="true" />, titulo: "Desarrollo Web", descripcion: "Aplicaciones web modernas y responsivas" },
    { icon: <FaMobile aria-hidden="true" />, titulo: "Apps Móviles", descripcion: "Aplicaciones nativas y multiplataforma" },
    { icon: <FaBrain aria-hidden="true" />, titulo: "Inteligencia Artificial", descripcion: "Soluciones con Machine Learning" },
    { icon: <FaRocket aria-hidden="true" />, titulo: "Innovación", descripcion: "Soluciones tecnológicas creativas" }
  ];

function Acerca() {
  return (
    <section id="Acerca">
      <div className="section-container">
        <div className="acerca-content">
          <div className="acerca-image">
            <div className="image-frame">
              <img src={anime} alt="Romel Pichucho" />
            </div>
          </div>
          
          <div className="acerca-text">
            <h2 className="section-title">Acerca de mí</h2>
            <p className="acerca-description">
              ¡Hola! Soy <strong>Romel Pichucho</strong>, un ingeniero en software con pasión por 
              la innovación y la resolución de problemas. Desde el principio de mi carrera, 
              me he enfocado en desarrollar soluciones tecnológicas efectivas que impacten 
              positivamente en la vida de las personas.
            </p>
            <p className="acerca-description">
              Mi experiencia abarca una variedad de proyectos, desde aplicaciones móviles 
              hasta sistemas empresariales complejos. Me caracterizo por mi enfoque colaborativo 
              y mi capacidad para trabajar en equipo para alcanzar objetivos comunes.
            </p>
            
            <div className="servicios-grid">
              {SERVICIOS_DATA.map((servicio, index) => (
                <div key={index} className="servicio-item">
                  <div className="servicio-icon">{servicio.icon}</div>
                  <div className="servicio-info">
                    <h4>{servicio.titulo}</h4>
                    <p>{servicio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acerca;
