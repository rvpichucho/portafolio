import { useState, useEffect, useCallback } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navigtion.css';

function Navigation() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevenir scroll cuando el menú está abierto en móvil
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  const handleMenuClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Obtener el ID del target
    const targetId = e.currentTarget.getAttribute('href');
    
    // Cerrar el menú inmediatamente
    setMenuOpen(false);
    
    if (targetId && targetId.startsWith('#')) {
      // Scroll después de cerrar el menú - dejamos que CSS maneje el offset con scroll-margin-top
      setTimeout(() => {
        const element = document.querySelector(targetId);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, []);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      setMenuOpen(false);
    }
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="nav-wrapper">
          <div className="logo">
            <span className="logo-text">RP</span>
          </div>
          
          {/* Overlay separado */}
          {menuOpen && <div className="menu-overlay" onClick={handleOverlayClick} />}
          
          <nav className={menuOpen ? 'active' : ''}>
            <ul className="menu">
              <li><a href="#Inicio" onClick={handleMenuClick}>Inicio</a></li>
              <li><a href="#Acerca" onClick={handleMenuClick}>Acerca</a></li>
              <li><a href="#Habilidades" onClick={handleMenuClick}>Habilidades</a></li>
              <li><a href="#Proyectos" onClick={handleMenuClick}>Proyectos</a></li>
              <li><a href="#Contacto" onClick={handleMenuClick}>Contacto</a></li>
            </ul>
          </nav>
          
          <div className="nav-actions">
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
            
            <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Menu">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navigation;