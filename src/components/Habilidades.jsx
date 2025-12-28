import "../styles/habilidades.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// Iconos de React Icons
import { 
  SiLaravel, SiNodedotjs, SiFastapi, SiFlask,
  SiAngular, SiReact, SiHtml5, SiCss3,
  SiFlutter, SiDart,
  SiScikitlearn, SiPytorch, SiNumpy, SiOpencv,
  SiAxios
} from "react-icons/si";
import { FaMobileAlt, FaServer, FaCode, FaBrain } from "react-icons/fa";

function Habilidades() {
  const [activeCategory, setActiveCategory] = useState('backend');

  const categories = [
    {
      id: 'backend',
      name: 'Back-End',
      icon: FaServer,
      color: '#10b981',
      techs: [
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 90 },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 85 },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688', level: 80 },
        { name: 'Flask', icon: SiFlask, color: '#000000', level: 75 }
      ]
    },
    {
      id: 'frontend',
      name: 'Front-End',
      icon: FaCode,
      color: '#3b82f6',
      techs: [
        { name: 'Angular', icon: SiAngular, color: '#DD0031', level: 85 },
        { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 90 }
      ]
    },
    {
      id: 'mobile',
      name: 'App Móvil',
      icon: FaMobileAlt,
      color: '#8b5cf6',
      techs: [
        { name: 'React Native', icon: SiReact, color: '#61DAFB', level: 85 },
        { name: 'Flutter', icon: SiFlutter, color: '#02569B', level: 80 },
        { name: 'Dart', icon: SiDart, color: '#0175C2', level: 75 },
        { name: 'Axios', icon: SiAxios, color: '#5A29E4', level: 88 }
      ]
    },
    {
      id: 'ai',
      name: 'Inteligencia Artificial',
      icon: FaBrain,
      color: '#f59e0b',
      techs: [
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E', level: 85 },
        { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C', level: 80 },
        { name: 'NumPy', icon: SiNumpy, color: '#013243', level: 90 },
        { name: 'OpenCV', icon: SiOpencv, color: '#5C3EE8', level: 82 }
      ]
    }
  ];

  // Selecciona la categoría activa
  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="Habilidades">
      <div className="habilidades-content section-container">
        <h2 className="section-title">Mis Habilidades</h2>
        <p className="contacto-subtitle">
          Tecnologías y herramientas que domino en mi desarrollo profesional
        </p>
        
        <div className="skills-container">
          <div className="category-tabs">
            {categories.map(category => {
              const IconComponent = category.icon;
              return (
                <button 
                  key={category.id}
                  className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                  style={activeCategory === category.id ? {
                    background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`
                  } : {}}
                >
                  <IconComponent className="category-icon" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
          
          <div className="skills-showcase">
            <div className="tech-grid">
              {activeData.techs.map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <div key={index} className="tech-card">
                    <div className="tech-icon-wrapper" style={{ 
                      background: `linear-gradient(135deg, ${tech.color}15, ${tech.color}05)`,
                      borderColor: `${tech.color}30`
                    }}>
                      <TechIcon 
                        className="tech-icon" 
                        style={{ color: tech.color }}
                      />
                    </div>
                    <div className="tech-info">
                      <h4 className="tech-name">{tech.name}</h4>
                      <div className="tech-level-bar">
                        <div 
                          className="tech-level-fill" 
                          style={{ 
                            width: `${tech.level}%`,
                            background: tech.color
                          }}
                        ></div>
                      </div>
                      <span className="tech-level-text">{tech.level}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
