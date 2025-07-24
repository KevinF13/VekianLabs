// frontend/src/components/HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css'; // Asegúrate de que esta línea esté presente

function HeroSection() {
  return (
    <div className='hero-container'> {/* Aquí no habrá prop 'style' */}
      <h1>SOLUCIONES TECNOLÓGICAS INNOVADORAS</h1>
      <p>¿Qué estás esperando para llevar tu negocio al siguiente nivel?</p>
      <div className='hero-btns'>
        <Link to='/servicios' className='btn-mobile'>
          <button className='btn btn--outline btn--large'>VER SERVICIOS</button>
        </Link>
        <Link to='/contacto' className='btn-mobile'>
          <button className='btn btn--primary btn--large'>
            AGENDA UNA CITA <i className='far fa-play-circle' />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;