// ─── Personal Info ───
export const personalInfo = {
  name: "Romel Pichucho",
  title: "Ingeniero en Software",
  headline: "Full Stack Developer | Mobile Architect | AI Enthusiast",
  description:
    "Apasionado por crear soluciones tecnológicas innovadoras con experiencia en desarrollo web, móvil e inteligencia artificial. Especializado en arquitecturas cloud de alto rendimiento y experiencias móviles inteligentes.",
  email: "romelpichucho@gmail.com",
  location: "Quito, Ecuador",
  phone: "+593 98 478 0077",
  cvUrl:
    "https://drive.google.com/file/d/1I49Pw2bfLX5pIEGQSCrmzjqbl0JtcACw/view?usp=sharing",
  social: {
    linkedin:
      "https://www.linkedin.com/in/romel-vinicio-pichucho-tandalla-302212185",
    github: "https://github.com/rvpichucho",
    instagram: "/",
    facebook: "/",
  },
};

// ─── Services ───
export const services = [
  {
    icon: "web",
    title: "Desarrollo Web",
    desc: "Aplicaciones web modernas y responsivas con React, Angular y CSS.",
  },
  {
    icon: "smartphone",
    title: "Apps Móviles",
    desc: "Apps nativas y multiplataforma con Flutter y React Native.",
  },
  {
    icon: "dns",
    title: "Backend Architecture",
    desc: "Lógica de servidor robusta con Laravel, NestJS y FastAPI.",
  },
  {
    icon: "api",
    title: "Diseño de APIs",
    desc: "APIs RESTful y GraphQL limpias, documentadas y seguras.",
  },
  {
    icon: "hub",
    title: "Integración de Sistemas",
    desc: "Conexión de ecosistemas de software en plataformas cohesivas.",
  },
  {
    icon: "precision_manufacturing",
    title: "IA & ML",
    desc: "Modelos predictivos y visión por computadora con PyTorch y Scikit-learn.",
  },
  {
    icon: "settings_suggest",
    title: "Automatización",
    desc: "Automatización de tareas vía CI/CD y scripts personalizados.",
  },
  {
    icon: "query_stats",
    title: "Consultoría Tecnológica",
    desc: "Roadmap técnico estratégico para startups y empresas.",
  },
];

// ─── Skills ───
export interface Tech {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  techs: Tech[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    name: "Backend",
    icon: "code",
    color: "#10b981",
    techs: [
      { name: "Laravel", level: 90 },
      { name: "Django", level: 85 },
      { name: "Node.js", level: 85 },
      { name: "FastAPI", level: 80 },
      { name: "Flask", level: 75 },
      { name: "NestJS", level: 80 },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    icon: "terminal",
    color: "#3b82f6",
    techs: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Angular", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    id: "mobile",
    name: "App Móvil",
    icon: "smartphone",
    color: "#8b5cf6",
    techs: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 80 },
      { name: "Dart", level: 75 },
    ],
  },
  {
    id: "databases",
    name: "Bases de Datos",
    icon: "database",
    color: "#f97316",
    techs: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 75 },
      { name: "Firebase", level: 80 },
    ],
  },
  {
    id: "ai",
    name: "Inteligencia Artificial",
    icon: "brain",
    color: "#f59e0b",
    techs: [
      { name: "Scikit-learn", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "NumPy", level: 90 },
      { name: "OpenCV", level: 82 },
    ],
  },
];

// ─── Experience ───
export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  techs: string[];
}

export const experiences: Experience[] = [
  {
    period: "JUL 2024 — JUN 2025",
    role: "Desarrollador FullStack",
    company: "Kaizen Software S.A.S",
    description:
      "Desarrollo de API REST con Python/Django. Modelado de base de datos relacional en PostgreSQL. Diseño e implementación de aplicación móvil de delivery en React Native con carrito de compras. Gestión de usuarios y autenticación. Panel administrativo con React + Vite + TypeScript.",
    techs: ["Python", "Django", "React Native", "React", "Vite", "TypeScript", "PostgreSQL"],
  },
  {
    period: "MAY 2023 — JUN 2024",
    role: "Ingeniero de Software",
    company: "Universidad de las Fuerzas Armadas - ESPE",
    description:
      "Desarrollo de sistema de Re-identificación de personas (Person Re-ID) aplicado a CCTV. Implementación de modelos de Machine Learning y Deep Learning con PyTorch y scikit-learn. Evaluación mediante métricas de clasificación, curvas ROC, precisión, recall y F1-score. Preprocesamiento de imágenes con OpenCV.",
    techs: ["Python", "PyTorch", "Scikit-learn", "OpenCV"],
  },
  {
    period: "FEB 2023 — JUN 2023",
    role: "Desarrollador FullStack",
    company: "Freelancer",
    description:
      "Desarrollo de sistema móvil y web para lectura automática de medidores de agua usando Deep Learning. Entrenamiento de modelo de visión con PyTorch y OCR. API REST con FastAPI y MongoDB. Panel administrativo con React.",
    techs: ["Python", "PyTorch", "FastAPI", "MongoDB", "React"],
  },
  {
    period: "DIC 2022 — FEB 2023",
    role: "Desarrollador Móvil",
    company: "Freelancer",
    description:
      "Desarrollo de aplicación móvil con Flutter para gestión de inventario de tienda. Almacenamiento de datos con Firebase.",
    techs: ["Flutter", "Firebase"],
  },
  {
    period: "NOV 2022 — MAR 2023",
    role: "Desarrollador FrontEnd",
    company: "Pulpo",
    description:
      "Maquetación de sistema web para gestión de contenedores de exportación. Pruebas de funcionalidad y depuración de código. Implementación de nuevas APIs con Angular y TypeScript.",
    techs: ["Angular", "TypeScript"],
  },
  {
    period: "MAR 2022 — JUN 2022",
    role: "Pasantías - Desarrollador Backend",
    company: "ADS Software",
    description:
      "Creación de APIs para sistema de ventas con Laravel. Modelamiento de base de datos MySQL. Almacenamiento de tickets con Firebase. Evaluación y pruebas de APIs en producción. Documentación técnica.",
    techs: ["Laravel", "MySQL", "Firebase"],
  },
  {
    period: "ENE 2019 — ENE 2022",
    role: "Técnico Informático",
    company: "Saccompu",
    description:
      "Reparación de impresoras de tinta continua y matriciales. Reparación de laptops y PC de escritorio. Redes de datos estructurales. Instalación de cámaras de seguridad. Configuración de antenas de radio enlace marca Ubiquiti.",
    techs: [],
  },
];

// ─── Projects ───
export interface Project {
  imagen: string;
  imagenes?: string[];
  titulo: { es: string; en: string };
  descripcion: { es: string; en: string };
  tecnologias?: string[];
  github?: string | null;
}

import arma from "../assets/armas.jpg";
import kaizen from "../assets/kaizen-1-1@2x.png";
import detect from "../assets/Circuito.jpg";
import panel from "../assets/panel.png";
import animeapp from "../assets/animeapp.png";
import deportivo from "../assets/deportivo.png";
import seniales from "../assets/seniales.png";
import transformador from "../assets/transformador.png";
import peloteo1 from "../assets/peloteo1.jpg";
import peloteo2 from "../assets/peloteo2.jpg";
import peloteo3 from "../assets/peloteo3.jpg";
import peloteo4 from "../assets/peloteo4.jpg";
import peloteo5 from "../assets/peloteo5.jpg";
import panelreid from "../assets/panelreid.jpg";
import arma1 from "../assets/arma1.jpeg";
import arma2 from "../assets/arma2.jpeg";
import arma3 from "../assets/arma3.jpeg";
import vial1 from "../assets/vial1.jpg";
import vial2 from "../assets/vial2.jpg";
import vial3 from "../assets/vial3.jpg";
import vial4 from "../assets/vial4.jpg";

export const projects: Project[] = [
  {
    imagen: detect,
    imagenes: [detect, panelreid],
    titulo: { es: "Sistema de Re-identificación", en: "Re-identification System" },
    descripcion: {
      es: "Sistema multi-cámara (5 cámaras IP) desarrollado en Python para control de acceso en instituciones educativas. Combina reconocimiento facial y análisis soft-biométrico para identificación precisa de personas.",
      en: "Multi-camera system (5 IP cameras) developed in Python for access control in educational institutions. Combines facial recognition and soft-biometric analysis for accurate person identification.",
    },
    tecnologias: ["python", "scikitlearn", "mysql", "opencv"],
    github: null,
  },
  {
    imagen: kaizen,
    titulo: { es: "Kasper", en: "Kasper" },
    descripcion: {
      es: "Aplicación API desarrollada con FastAPI en Python para consultar información mediante cédula de identidad. Incluye base de datos en Firebase.",
      en: "API application developed with FastAPI in Python to query information by ID number. Includes Firebase database.",
    },
    tecnologias: ["python", "fastapi", "firebase"],
    github: null,
  },
  {
    imagen: arma,
    imagenes: [arma, arma1, arma2, arma3],
    titulo: { es: "Detección de armas", en: "Weapon Detection" },
    descripcion: {
      es: "Sistema de detección de personas con armas de fuego y armas blancas. API en Flask para procesar frames de cámaras IP en tiempo real.",
      en: "Detection system for people carrying firearms and knives. Flask API to process IP camera frames in real time.",
    },
    tecnologias: ["python", "scikitlearn", "flask", "react", "opencv"],
    github: null,
  },
  {
    imagen: panel,
    titulo: { es: "Sistema administrativo", en: "Administrative System" },
    descripcion: {
      es: "Sistema administrativo para registro y matrícula de estudiantes en preuniversitarios. Desarrollado completamente en Laravel con MySQL.",
      en: "Administrative system for student registration and enrollment in pre-university programs. Fully developed in Laravel with MySQL.",
    },
    tecnologias: ["laravel", "mysql"],
    github: null,
  },
  {
    imagen: animeapp,
    titulo: { es: "Aplicación de anime", en: "Anime App" },
    descripcion: {
      es: "Aplicación móvil y web para ver series y películas favoritas sin publicidad.",
      en: "Mobile and web app to watch favorite series and movies without ads.",
    },
    github: "https://github.com/kimise19/AnimeFlv_Front.git",
  },
  {
    imagen: deportivo,
    titulo: { es: "Aplicación deportiva", en: "Sports App" },
    descripcion: {
      es: "Aplicación móvil para transmisiones gratuitas de partidos de fútbol, estadísticas de equipos, jugadores y ligas.",
      en: "Mobile app for free soccer match streaming, team stats, players, and leagues.",
    },
    github: "https://github.com/kimise19/futbol_app.git",
  },
  {
    imagen: seniales,
    imagenes: [seniales, vial1, vial2, vial3, vial4],
    titulo: { es: "Señales de tránsito", en: "Traffic Signs" },
    descripcion: {
      es: "App móvil en React Native para educación vial. Incluye visión por computadora: el usuario toma una foto de una señal y recibe información detallada.",
      en: "Mobile app in React Native for traffic education. Includes computer vision: the user takes a photo of a sign and receives detailed information.",
    },
    tecnologias: ["reactnative", "fastapi", "python", "pytorch", "opencv", "postgresql"],
    github: null,
  },
  {
    imagen: transformador,
    titulo: { es: "Análisis de gases", en: "Gas Analysis" },
    descripcion: {
      es: "Aplicación de escritorio para ingenieros eléctricos orientada al mantenimiento preventivo de transformadores de potencia mediante análisis DGA.",
      en: "Desktop application for electrical engineers focused on preventive maintenance of power transformers through DGA analysis.",
    },
    tecnologias: ["python", "pytorch", "postgresql"],
    github: null,
  },
  {
    imagen: peloteo1,
    imagenes: [peloteo1, peloteo2, peloteo3, peloteo4, peloteo5],
    titulo: { es: "Peloteo", en: "Peloteo" },
    descripcion: {
      es: "Sistema completo para reservas de canchas deportivas. App móvil con Flutter, backend NestJS, PostgreSQL y panel administrativo con React + Vite.",
      en: "Complete system for sports court reservations. Mobile app with Flutter, NestJS backend, PostgreSQL, and admin panel with React + Vite.",
    },
    tecnologias: ["flutter", "nestjs", "postgresql", "react", "vite"],
    github: null,
  },
];

// ─── Certifications ───
export const certifications = [
  {
    icon: "verified_user",
    title: "Certified Cybersecurity Professional",
    subtitle: "CompTIA Security+ equivalent",
  },
  {
    icon: "groups",
    title: "Scrum Master Certified",
    subtitle: "Professional Scrum Master I",
  },
  {
    icon: "developer_mode_tv",
    title: "Google Mobile Expert",
    subtitle: "Advanced Flutter & Dart Certificate",
  },
];
