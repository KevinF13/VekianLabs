// frontend/src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

// Datos para las diapositivas del carrusel del HeroSection
const heroSlides = [
  {
    image: 'https://beirama.com.br/wp-content/uploads/2024/11/Business-Inteligence.jpeg', // Imagen oscura de ciudad
    title: 'INNOVANDO EL FUTURO DIGITAL',
    subtitle: 'Soluciones tecnológicas de vanguardia para su negocio.',
    button1: { text: 'VER SERVICIOS', path: '/servicios', type: 'outline' },
    button2: { text: 'AGENDA UNA CITA', path: '/contacto', type: 'primary' },
  },
  {
    image: 'https://www.shutterstock.com/image-photo/bibusiness-intelligence-business-people-can-600nw-2290168151.jpg', // Imagen oscura de tecnología
    title: 'TRANSFORMACIÓN DIGITAL A SU ALCANCE',
    subtitle: 'Impulsamos el crecimiento con estrategias innovadoras.',
    button1: { text: 'CONOCER MÁS', path: '/nosotros', type: 'outline' },
    button2: { text: 'NUESTROS PROYECTOS', path: '/proyectos', type: 'primary' },
  },
  {
    image: 'https://media.istockphoto.com/id/1354205065/es/foto/programador-de-ti-blanco-entusiasta-que-trabaja-en-computadoras-de-escritorio-especialista.jpg?s=612x612&w=0&k=20&c=T3Uuenmjq1nW8LQxteiXzGr_MMazkJ_Xl1TO97KBAI8=', // Imagen oscura de código/desarrollo
    title: 'INGENIERÍA DE SOFTWARE DE ÉLITE',
    subtitle: 'Construimos el software que su empresa necesita para triunfar.',
    button1: { text: 'CONTACTO', path: '/contacto', type: 'primary' },
    button2: { text: 'EXPLORAR SERVICIOS', path: '/servicios', type: 'outline' },
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentVisible, setContentVisible] = useState(true); // Nuevo estado para la animación del contenido
  const totalSlides = heroSlides.length;

  const goToSlide = (index) => {
    if (index === currentSlide) return; // Evitar transiciones si es la misma diapositiva
    setContentVisible(false); // Ocultar contenido para la transición de salida

    setTimeout(() => {
      setCurrentSlide(index);
      setContentVisible(true); // Mostrar contenido para la transición de entrada
    }, 500); // Duración de la transición de salida del contenido
  };

  const nextSlide = () => {
    goToSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    goToSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1); // Corregido el operador
  };

  // Efecto para el cambio automático de diapositivas
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(interval);
  }, [currentSlide]); // Dependencia para reiniciar el intervalo cuando la diapositiva cambia

  const currentHero = heroSlides[currentSlide];

  const heroStyles = {
    backgroundImage: `url(${currentHero.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.6)',
    color: 'var(--color-text-light)',
    textAlign: 'center',
    transition: 'background-image 1s ease-in-out', // Transición suave para la imagen de fondo
  };

  return (
    <div className='hero-container' style={heroStyles}>
      {/* Flechas de navegación del carrusel */}
      <FontAwesomeIcon icon={faChevronLeft} className='hero-arrow left' onClick={prevSlide} />
      <FontAwesomeIcon icon={faChevronRight} className='hero-arrow right' onClick={nextSlide} />

      {/* Contenido de la diapositiva actual con clase de animación */}
      <div className={`hero-content ${contentVisible ? 'fade-in' : 'fade-out'}`}>
        <h1>{currentHero.title}</h1>
        <p>{currentHero.subtitle}</p>
        <div className='hero-btns'>
          <Link to={currentHero.button1.path} className='btn-mobile'>
            <button className={`btn btn--${currentHero.button1.type} btn--large`}>
              {currentHero.button1.text}
            </button>
          </Link>
          <Link to={currentHero.button2.path} className='btn-mobile'>
            <button className={`btn btn--${currentHero.button2.type} btn--large`}>
              {currentHero.button2.text} <i className='far fa-play-circle' />
            </button>
          </Link>
        </div>
      </div>

      {/* Indicadores de diapositivas (puntos) */}
      <div className="slide-indicators">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
