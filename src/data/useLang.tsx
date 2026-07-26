import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

type Lang = "es" | "en";

const translations: Record<string, { es: string; en: string }> = {
  // Hero
  "hero.badge": { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  "hero.desc": {
    es: "Ingeniero en Software con experiencia en desarrollo full stack, aplicaciones móviles e inteligencia artificial. Especializado en Python, React, TypeScript y arquitecturas cloud. Apasionado por desarrollar soluciones tecnológicas que resuelven problemas reales.",
    en: "Software Engineer experienced in full stack development, mobile applications, and artificial intelligence. Specialized in Python, React, TypeScript, and cloud architectures. Passionate about building technology solutions that solve real-world problems.",
  },
  "hero.cv": { es: "Descargar CV", en: "Download CV" },
  "hero.contact": { es: "Contáctame", en: "Contact Me" },

  // About
  "about.badge": { es: "Acerca de mí", en: "About Me" },
  "about.title": {
    es: "Ingeniero de software comprometido con la calidad y la innovación",
    en: "Software engineer committed to quality and innovation",
  },
  "about.desc": {
    es: "Con más de 4 años de experiencia en desarrollo de software, he trabajado como desarrollador full stack, ingeniero de software y desarrollador móvil en diversos proyectos. Mi experiencia abarca backend con Python y Django, frontend con React y Angular, aplicaciones móviles con React Native y Flutter, e inteligencia artificial con PyTorch y scikit-learn. He desarrollado sistemas de re-identificación de personas para CCTV, aplicaciones de delivery, y soluciones de lectura automática de medidores con deep learning. Apasionado por crear APIs robustas con Laravel, FastAPI y NestJS, y por construir dashboards modernos con React, TypeScript y Vite. También tengo experiencia en automatización de procesos, integración de sistemas y consultoría tecnológica para startups.",
    en: "With over 4 years of software development experience, I've worked as a full stack developer, software engineer, and mobile developer across various projects. My expertise spans backend with Python and Django, frontend with React and Angular, mobile apps with React Native and Flutter, and AI with PyTorch and scikit-learn. I have built person re-identification systems for CCTV, delivery applications, and deep learning-based automatic meter reading solutions. Passionate about crafting robust APIs with Laravel, FastAPI, and NestJS, and building modern dashboards with React, TypeScript, and Vite. I also have experience in process automation, system integration, and technology consulting for startups.",
  },
  "about.years": { es: "Años Exp.", en: "Years Exp." },
  "about.projects_count": { es: "Proyectos", en: "Projects" },
  "about.tech_count": { es: "Tech Stack", en: "Tech Stack" },
  "about.clients": { es: "Clientes Felices", en: "Happy Clients" },
  "about.services_title": {
    es: "Servicios Especializados",
    en: "Core Specialized Services",
  },
  "services.badge": {
    es: "Capacidades",
    en: "Capabilities",
  },
  "sv.0.title": { es: "Desarrollo Web", en: "Web Development" },
  "sv.0.desc": { es: "Aplicaciones web modernas y responsivas con React, Angular y CSS.", en: "Building responsive, lightning-fast web apps using React, Angular, and modern CSS." },
  "sv.1.title": { es: "Apps Móviles", en: "Mobile Solutions" },
  "sv.1.desc": { es: "Apps nativas y multiplataforma con Flutter y React Native.", en: "Native-feel cross-platform apps with Flutter and React Native for iOS/Android." },
  "sv.2.title": { es: "Backend Architecture", en: "Backend Architecture" },
  "sv.2.desc": { es: "Lógica de servidor robusta con Laravel, NestJS y FastAPI.", en: "Robust server-side logic using Laravel, NestJS, and high-performance FastAPI." },
  "sv.3.title": { es: "Diseño de APIs", en: "API Design" },
  "sv.3.desc": { es: "APIs RESTful y GraphQL limpias, documentadas y seguras.", en: "Designing clean, documented, and secure RESTful and GraphQL interfaces." },
  "sv.4.title": { es: "Integración de Sistemas", en: "System Integration" },
  "sv.4.desc": { es: "Conexión de ecosistemas de software en plataformas cohesivas.", en: "Connecting fragmented software ecosystems into cohesive, synced platforms." },
  "sv.5.title": { es: "IA & ML", en: "AI & ML" },
  "sv.5.desc": { es: "Modelos predictivos y visión por computadora con PyTorch y Scikit-learn.", en: "Implementing predictive models and computer vision using PyTorch and Scikit-Learn." },
  "sv.6.title": { es: "Automatización", en: "Process Automation" },
  "sv.6.desc": { es: "Automatización de tareas vía CI/CD y scripts personalizados.", en: "Automating repetitive tasks via CI/CD pipelines and custom script solutions." },
  "sv.7.title": { es: "Consultoría Tecnológica", en: "Tech Consulting" },
  "sv.7.desc": { es: "Roadmap técnico estratégico para startups y empresas.", en: "Strategic technical roadmap planning for startups and enterprise clients." },
  "sv.show_all": { es: "Ver todos los servicios", en: "View all services" },
  "sv.show_less": { es: "Mostrar menos", en: "Show less" },

  // Skills
  "skills.badge": { es: "Technical Arsenal", en: "Technical Arsenal" },
  "skills.title": { es: "Mis Habilidades", en: "My Skills" },
  "skills.desc": {
    es: "Las herramientas y lenguajes que uso para dar vida a las ideas.",
    en: "The tools and languages I use to bring ideas to life.",
  },

  // Experience
  "exp.badge": { es: "Career Journey", en: "Career Journey" },
  "exp.title": {
    es: "Experiencia Profesional",
    en: "Professional Experience",
  },
  "exp.0.role": { es: "Desarrollador FullStack", en: "FullStack Developer" },
  "exp.0.desc": { es: "Desarrollo de API REST con Python/Django. Modelado de base de datos relacional en PostgreSQL. Diseño e implementación de aplicación móvil de delivery en React Native con carrito de compras. Gestión de usuarios y autenticación. Panel administrativo con React + Vite + TypeScript.", en: "REST API development with Python/Django. Relational database modeling in PostgreSQL. Design and implementation of a delivery mobile app in React Native with shopping cart. User management and authentication. Admin panel with React + Vite + TypeScript." },
  "exp.1.role": { es: "Ingeniero de Software", en: "Software Engineer" },
  "exp.1.desc": { es: "Desarrollo de sistema de Re-identificación de personas (Person Re-ID) aplicado a CCTV. Implementación de modelos de Machine Learning y Deep Learning con PyTorch y scikit-learn. Evaluación mediante métricas de clasificación, curvas ROC, precisión, recall y F1-score. Preprocesamiento de imágenes con OpenCV.", en: "Development of a Person Re-Identification system applied to CCTV. Implementation of Machine Learning and Deep Learning models with PyTorch and scikit-learn. Evaluation using classification metrics, ROC curves, precision, recall and F1-score. Image preprocessing with OpenCV." },
  "exp.2.role": { es: "Desarrollador FullStack", en: "FullStack Developer" },
  "exp.2.desc": { es: "Desarrollo de sistema móvil y web para lectura automática de medidores de agua usando Deep Learning. Entrenamiento de modelo de visión con PyTorch y OCR. API REST con FastAPI y MongoDB. Panel administrativo con React.", en: "Development of mobile and web system for automatic water meter reading using Deep Learning. Vision model training with PyTorch and OCR. REST API with FastAPI and MongoDB. Admin panel with React." },
  "exp.3.role": { es: "Desarrollador Móvil", en: "Mobile Developer" },
  "exp.3.desc": { es: "Desarrollo de aplicación móvil con Flutter para gestión de inventario de tienda. Almacenamiento de datos con Firebase.", en: "Mobile app development with Flutter for store inventory management. Data storage with Firebase." },
  "exp.4.role": { es: "Desarrollador FrontEnd", en: "FrontEnd Developer" },
  "exp.4.desc": { es: "Maquetación de sistema web para gestión de contenedores de exportación. Pruebas de funcionalidad y depuración de código. Implementación de nuevas APIs con Angular y TypeScript.", en: "Web system layout for export container management. Functionality testing and code debugging. Implementation of new APIs with Angular and TypeScript." },
  "exp.5.role": { es: "Pasantías - Desarrollador Backend", en: "Internship - Backend Developer" },
  "exp.5.desc": { es: "Creación de APIs para sistema de ventas con Laravel. Modelamiento de base de datos MySQL. Almacenamiento de tickets con Firebase. Evaluación y pruebas de APIs en producción. Documentación técnica.", en: "API creation for sales system with Laravel. MySQL database modeling. Ticket storage with Firebase. Evaluation and testing of APIs in production. Technical documentation." },
  "exp.6.role": { es: "Técnico Informático", en: "IT Technician" },
  "exp.6.desc": { es: "Reparación de impresoras de tinta continua y matriciales. Reparación de laptops y PC de escritorio. Redes de datos estructurales. Instalación de cámaras de seguridad. Configuración de antenas de radio enlace marca Ubiquiti.", en: "Repair of continuous ink and dot matrix printers. Laptop and desktop PC repair. Structural data networks. Security camera installation. Configuration of Ubiquiti radio link antennas." },
  "exp.show_all": { es: "Ver experiencia completa ({count} más)", en: "View full experience ({count} more)" },
  "exp.show_less": { es: "Mostrar menos", en: "Show less" },

  // Projects
  "proj.badge": { es: "Selected Works", en: "Selected Works" },
  "proj.title": { es: "Proyectos Destacados", en: "Featured Projects" },
  "proj.techs": { es: "Tecnologías", en: "Technologies" },
  "proj.github": { es: "Ver en GitHub", en: "View on GitHub" },
  "proj.close": { es: "Cerrar", en: "Close" },
  "gallery.prev": { es: "Imagen anterior", en: "Previous image" },
  "gallery.next": { es: "Siguiente imagen", en: "Next image" },
  "gallery.image": { es: "Imagen", en: "Image" },

  // Contact
  "contact.badge": { es: "Contacto", en: "Contact" },
  "contact.title": {
    es: "Construyamos algo extraordinario",
    en: "Let's build something extraordinary",
  },
  "contact.desc": {
    es: "Disponible para consultorías selectas y roles arquitectónicos senior. Contáctame por correo o WhatsApp.",
    en: "Available for select consulting engagements and senior architectural roles. Reach out via email or WhatsApp.",
  },

  "contact.email_label": { es: "Email", en: "Email" },
  "contact.location_label": { es: "Ubicación", en: "Location" },
  "contact.whatsapp_label": { es: "WhatsApp", en: "WhatsApp" },
  "contact.send_email": { es: "Enviar correo electrónico", en: "Send email" },
  "contact.send_whatsapp": { es: "Enviar mensaje por WhatsApp", en: "Send WhatsApp message" },

  // Footer
  "footer.built": {
    es: "Built with precision",
    en: "Built with precision",
  },
};

/* ─── Context ─── */
interface LangContextValue {
  lang: Lang;
  t: (key: string) => string;
  toggleLang: () => void;
}

const LangContext = createContext<LangContextValue | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("lang");
    return saved === "en" ? "en" : "es";
  });

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "es" ? "en" : "es";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  const t = useCallback((key: string): string => {
    return translations[key]?.[lang] ?? key;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LangProvider");
  return ctx;
}
