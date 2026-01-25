import React, { lazy, Suspense } from "react";
import Navigation from "../components/NamItem";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import '../styles/navigtion.css';
import '../styles/sections.css';

// Lazy load de componentes pesados (bundle-dynamic-imports)
const Acerca = lazy(() => import("../components/Acerca"));
const Habilidades = lazy(() => import("../components/Habilidades"));
const Proyectos = lazy(() => import("../components/Proyectos"));
const Contacto = lazy(() => import("../components/Contacto"));

function Portafolio() {
  return (
    <div className="body-content">
      <Navigation />
      <main className="main-content">
        <Inicio />
        {/* Suspense boundaries para lazy loading (async-suspense-boundaries) */}
        <Suspense fallback={<div style={{ minHeight: '400px' }} />}>
          <Acerca />
          <Habilidades />
          <Proyectos />
          <Contacto />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default Portafolio;