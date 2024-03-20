import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [procesoEnEjecucion, setProcesoEnEjecucion] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const estudiantesPorPagina = 10; // Número de estudiantes por página

  const handleStartProceso = () => {
    if (!procesoEnEjecucion) {
      axios.get('https://innovapreu.onrender.com/start_proceso')
        .then(response => {
          console.log(response.data.message);
          setMensaje(response.data.message);
          setProcesoEnEjecucion(true);
        })
        .catch(error => {
          console.error('Error al iniciar el proceso:', error);
        });
    }
  };

  const handleStopProceso = () => {
    if (procesoEnEjecucion) {
      axios.get('https://innovapreu.onrender.com/stop_proceso')
        .then(response => {
          console.log(response.data.message);
          setMensaje(response.data.message);
          setProcesoEnEjecucion(false);
        })
        .catch(error => {
          console.error('Error al detener el proceso:', error);
        });
    }
  };

  const handleRefreshTable = () => {
    obtenerEstudiantes();
  };

  useEffect(() => {
    obtenerEstudiantes();
  }, []); // El segundo argumento [] significa que este efecto se ejecutará solo una vez al montar el componente

  const obtenerEstudiantes = () => {
    axios.get('https://innovapreu.onrender.com/estudiantes')
      .then(response => {
        console.log(response.data); // Verifica los datos recibidos en la consola
        setEstudiantes(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los estudiantes:', error);
      });
  };

  // Calcular el índice del último estudiante en la página actual
  const indiceUltimoEstudiante = paginaActual * estudiantesPorPagina;
  // Calcular el índice del primer estudiante en la página actual
  const indicePrimerEstudiante = indiceUltimoEstudiante - estudiantesPorPagina;
  // Obtener los estudiantes de la página actual
  const estudiantesActuales = estudiantes.slice(indicePrimerEstudiante, indiceUltimoEstudiante);

  // Cambiar a la siguiente página
  const nextPage = () => {
    if (paginaActual < Math.ceil(estudiantes.length / estudiantesPorPagina)) {
      setPaginaActual(paginaActual + 1);
    }
  };

  // Cambiar a la página anterior
  const prevPage = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  return (
    <div className='container'>
      <div className='mensaje'>{mensaje}</div>
      <div className='button-container'>
        <button className='boton' onClick={handleStartProceso} disabled={procesoEnEjecucion}>
          {procesoEnEjecucion ? 'Proceso en ejecución' : 'Iniciar Proceso'}
        </button>
        <button className='boton' onClick={handleStopProceso} disabled={!procesoEnEjecucion}>
          Detener Proceso
        </button>
      </div>
      <button className='boton_actualizar' onClick={handleRefreshTable}>
        Actualizar Tabla
      </button>
      <h1 className='titulo'>Lista de Estudiantes</h1>
      <div className='table-container'>
     
        <table className='tabla'>
          <thead>
            <tr>
              <th >Nombre</th>
              <th >Apellido</th>
              <th >Cédula</th>
              <th >Celular</th>
              <th >Correo</th>
            </tr>
          </thead>
          <tbody>
            {estudiantesActuales.map(estudiante => (
              <tr key={estudiante.id}>
                <td >{estudiante.nombre}</td>
                <td >{estudiante.apellido}</td>
                <td >{estudiante.cedula}</td>
                <td >{estudiante.celular}</td>
                <td >{estudiante.correo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button onClick={prevPage}>Anterior</button>
        <button onClick={nextPage}>Siguiente</button>
        
      </div>
      
    </div>
  );
}


export default App;
