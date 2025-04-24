import { useState, useEffect } from 'react';
import '../styles/navigtion.css';

function Navigation() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="nav-wrapper">
          <div className="theme-toggle">
            <button onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
          
          <div className="mobile-menu-button" onClick={toggleMenu}>
            <span className="hamburger-icon"></span>
          </div>
          
          <nav className={menuOpen ? 'active' : ''}>
            <ul className="menu">
              <li><a href="#Inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
              <li><a href="#Acerca" onClick={() => setMenuOpen(false)}>Acerca</a></li>
              <li><a href="#Habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
              <li><a href="#Proyectos" onClick={() => setMenuOpen(false)}>Proyectos</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navigation;