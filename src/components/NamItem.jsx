

import '../styles/navigtion.css'
function Navigation(){

    return(
        <div className="header">
        <div className="header-container">
          <nav>
            <ul className="menu">
              <li><a href="#Inicio">Inicio</a></li>
              <li><a href="#Acerca">Acerca</a></li>
              <li><a href="#Habilidades">Habilidades</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
}

export default Navigation;