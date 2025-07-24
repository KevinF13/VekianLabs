// frontend/src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './HeroSection.css';

// Datos para las diapositivas del carrusel del HeroSection
// Cada objeto incluye la URL de la imagen (oscura), título, subtítulo y botones.
const heroSlides = [
  {
    image: 'https://beirama.com.br/wp-content/uploads/2024/11/Business-Inteligence.jpeg', // Imagen oscura de ciudad
    title: 'INNOVANDO EL FUTURO DIGITAL', // Corregido: Separado con coma
    subtitle: 'Soluciones tecnológicas de vanguardia para su negocio.',
    button1: { text: 'VER SERVICIOS', path: '/servicios', type: 'outline' },
    button2: { text: 'AGENDA UNA CITA', path: '/contacto', type: 'primary' },
  },
  {
    image: 'https://www.shutterstock.com/image-photo/bibusiness-intelligence-business-people-can-600nw-2290168151.jpg', // Imagen oscura de tecnología (URL corregida)
    title: 'TRANSFORMACIÓN DIGITAL A SU ALCANCE', // Corregido: Separado con coma
    subtitle: 'Impulsamos el crecimiento con estrategias innovadoras.',
    button1: { text: 'CONOCER MÁS', path: '/nosotros', type: 'outline' },
    button2: { text: 'NUESTROS PROYECTOS', path: '/proyectos', type: 'primary' },
  },
  {
    image: 'https://media.istockphoto.com/id/1354205065/es/foto/programador-de-ti-blanco-entusiasta-que-trabaja-en-computadoras-de-escritorio-especialista.jpg?s=612x612&w=0&k=20&c=T3Uuenmjq1nW8LQxteiXzGr_MMazkJ_Xl1TO97KBAI8=', // Imagen oscura de código/desarrollo
    title: 'INGENIERÍA DE SOFTWARE DE ÉLITE', // Corregido: Separado con coma
    subtitle: 'Construimos el software que su empresa necesita para triunfar.',
    button1: { text: 'CONTACTO', path: '/contacto', type: 'primary' },
    button2: { text: 'EXPLORAR SERVICIOS', path: '/servicios', type: 'outline' },
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = heroSlides.length;

  // Función para ir a la siguiente diapositiva
  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  // Función para ir a la diapositiva anterior
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide + 1);
  };

  // Efecto para el cambio automático de diapositivas (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Cambia cada 8 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
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
    // Capa oscura para mejorar la legibilidad del texto
    boxShadow: 'inset 0 0 0 1000px rgba(0, 0, 0, 0.6)', // Más oscuro para imágenes oscuras
    objectFit: 'contain',
    color: 'var(--color-text-light)',
    textAlign: 'center',
    transition: 'background-image 1s ease-in-out', // Transición suave para la imagen de fondo
  };

  return (
    <div className='hero-container' style={heroStyles}>
      {/* Flechas de navegación del carrusel */}
      <FontAwesomeIcon icon={faChevronLeft} className='hero-arrow left' onClick={prevSlide} />
      <FontAwesomeIcon icon={faChevronRight} className='hero-arrow right' onClick={nextSlide} />

      {/* Contenido de la diapositiva actual */}
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

      {/* Indicadores de diapositivas (puntos) */}
      <div className="slide-indicators">
        {heroSlides.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
