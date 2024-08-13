import React from 'react';
import '../CSS/Home.css';
import logo from '../img/logo.jpeg';
import icono from '../img/icono.png';

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="logo-section">
            <img src={icono} alt="Logo" className="logo" />
            <div className="title">TerApp</div>
          </div>
          <div className="buttons">
            <a href="/iniciosesion2/iniciosesion2.html">
              <button className="btn">Iniciar sesión</button>
            </a>
            <a href="/registro/registrosesion.html">
              <button className="btn">Registrarse</button>
            </a>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="text-center">
          <img src={logo} alt="Logo de la aplicación" className="main-logo" />
          <h2 className="subtitle">TerApp Movil</h2>
          <p className="description">
            TerApp es una aplicación de acompañamiento para la rehabilitación, enfocada en personas que hayan sufrido fracturas. 
            Contiene inteligencia artificial que colaborará para medir el avance de la recuperación. Incluye módulos específicos 
            para cada tipo de rehabilitación. <br /><br /> ¡Descarga Aquí!
          </p>
        </div>
        <div className="text-center">
          <a href="/inicio/descarga.html">
            <button className="btn download-btn">Descargar</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
