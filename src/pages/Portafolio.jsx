import React from "react";
import Navigation from "../components/NamItem";
import Footer from "../components/Footer";
import Inicio from "../components/Inicio";
import '../styles/navigtion.css';
import Acerca from "../components/Acerca";
import Habilidades from "../components/Habilidades";
import Proyectos from "../components/Proyectos";
function Portafolio(){
    return(
         <div className="body-content">
        <Navigation/>
        <Inicio/>
        <Acerca/>
        <Habilidades/>
        <Proyectos/>
        <Footer/>
       </div>
      
    );
}

export default Portafolio;