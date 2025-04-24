import "../styles/habilidades.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import angular from '../assets/angular.png';
import laravel from '../assets/laravel.png';
import reactjs from '../assets/reactjs.png';
import reactnt from '../assets/reactnt.png';
import flask from '../assets/flask.png';
import pytorch from '../assets/pytorch.png';
import sklear from '../assets/sklearn.png';
import flutter from '../assets/flutter.png';
import fast from '../assets/fast.png';
import node from '../assets/nodejs-removebg-preview.png';
import html from '../assets/html.png';
import css from '../assets/CSS.png';
import dart from '../assets/dart.png';
import numpy from '../assets/numpy.png';
import opencv from '../assets/opencv.png';
import axios from '../assets/axios.png';
import { useState } from "react";

function Habilidades() {
  const [activeCategory, setActiveCategory] = useState('backend');

  const categories = [
    {
      id: 'backend',
      name: 'Back-End',
      techs: [
        { name: 'Laravel', image: laravel },
        { name: 'Node.js', image: node },
        { name: 'FastAPI', image: fast },
        { name: 'Flask', image: flask }
      ]
    },
    {
      id: 'frontend',
      name: 'Front-End',
      techs: [
        { name: 'Angular', image: angular },
        { name: 'React', image: reactjs },
        { name: 'HTML', image: html },
        { name: 'CSS', image: css }
      ]
    },
    {
      id: 'mobile',
      name: 'App-Movil',
      techs: [
        { name: 'React Native', image: reactnt },
        { name: 'Flutter', image: flutter },
        { name: 'Dart', image: dart },
        { name: 'Axios', image: axios }
      ]
    },
    {
      id: 'ai',
      name: 'Inteligencia',
      techs: [
        { name: 'Scikit-learn', image: sklear },
        { name: 'PyTorch', image: pytorch },
        { name: 'NumPy', image: numpy },
        { name: 'OpenCV', image: opencv }
      ]
    }
  ];

  // Selecciona la categoría activa
  const activeData = categories.find(cat => cat.id === activeCategory);

  return (
    <section id="Habilidades" className="habilidades-section">
      <div className="habilidades-content">
        <h2 className="section-title">Mis habilidades</h2>
        
        <div className="skills-container">
          <div className="category-tabs">
            {categories.map(category => (
              <button 
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="skills-showcase">
            <h3 className="category-title">{activeData.name}</h3>
            
            <div className="tech-grid">
              {activeData.techs.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div className="tech-image-container">
                    <img 
                      className="tech-image" 
                      src={tech.image} 
                      alt={tech.name} 
                    />
                  </div>
                  <div className="tech-name">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
