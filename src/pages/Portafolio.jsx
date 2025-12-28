import React from "react";
import Navigation from "../components/NamItem";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import '../styles/navigtion.css';
import '../styles/sections.css';
import Acerca from "../components/Acerca";
import Habilidades from "../components/Habilidades";
import Proyectos from "../components/Proyectos";
import Contacto from "../components/Contacto";

function Portafolio() {
  return (
    <div className="body-content">
      <Navigation />
      <main className="main-content">
        <Inicio />
        <Acerca />
        <Habilidades />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default Portafolio;