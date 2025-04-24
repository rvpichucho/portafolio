import React, { useEffect } from 'react';
import './App.css';
import Portafolio from './pages/Portafolio';

function App() {
  // Verificar el tema al cargar la aplicación
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="App">
      <Portafolio />
    </div>
  );
}

export default App;
