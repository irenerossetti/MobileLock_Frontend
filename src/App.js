import React, { useEffect, useState } from 'react';
import api from './api'; // Importamos el "puente" que creaste
import './App.css';

function App() {
  const [mensaje, setMensaje] = useState("Conectando con MobileLock Backend...");
  const [error, setError] = useState(false);

  useEffect(() => {
    // Intentamos hacer una petición simple al backend al cargar
    api.get('/') 
      .then(response => {
        setMensaje("¡Conexión Exitosa! MobileLock AI está en línea.");
        setError(false);
      })
      .catch(err => {
        setMensaje("Error: No se pudo conectar con el Backend de Django.");
        setError(true);
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MobileLock AI - Frontend</h1>
        <div style={{ 
          padding: '20px', 
          backgroundColor: error ? '#721c24' : '#155724', 
          borderRadius: '10px',
          color: 'white' 
        }}>
          {mensaje}
        </div>
        <p>Estado de la Tarea T005: <b>Configuración de API Completa</b></p>
      </header>
    </div>
  );
}

export default App;