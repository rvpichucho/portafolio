import React, { useEffect } from 'react';
import './App.css';
import Portafolio from './pages/Portafolio';

function App() {
  // Verificar el tema al cargar la aplicación (client-localstorage-schema)
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      document.body.setAttribute('data-theme', savedTheme);
    } catch (error) {
      // Fallback si localStorage no está disponible
      document.body.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <div className="App">
      <Portafolio />
    </div>
  );
}

export default App;
