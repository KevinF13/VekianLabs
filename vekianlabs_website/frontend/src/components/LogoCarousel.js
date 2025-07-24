// frontend/src/components/LogoCarousel.js
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; // Importa Link para la redirección
import './LogoCarousel.css';

// Datos para el carrusel con títulos y enlaces
const carouselData = [
  {
    url: 'https://www.shutterstock.com/image-photo/bibusiness-intelligence-business-people-can-600nw-2290168151.jpg',
    alt: 'Business Intelligence',
    title: 'Business Intelligence',
    link: '/servicios/business-intelligence', // Enlace para "Leer Más"
  },
  {
    url: 'https://www.santanderopenacademy.com/content/dam/becasmicrosites/01-soa-blog/tics-en-la-educacion-1.jpg',
    alt: 'Tecnologías de la Información',
    title: 'Tecnologías de la Información',
    link: '/servicios/tics',
  },
  {
    url: 'https://media.istockphoto.com/id/616902766/es/foto/dedicado-de-desarrollo-de-software.jpg?s=612x612&w=0&k=20&c=Lljz6hkQw_O_J2I81UMKRl6aNvmPKc_JOjXzQEbr5-A=',
    alt: 'Desarrollo de Software',
    title: 'Desarrollo de Software',
    link: '/servicios/desarrollo-software',
  },
  {
    url: 'https://eures.europa.eu/sites/default/files/styles/embed_medium/public/2021-12/shutterstock_669170680.jpg?itok=ycmlg5VI',
    alt: 'Soporte Técnico ICT',
    title: 'Soporte Técnico ICT',
    link: '/servicios/soporte-ict',
  },
  {
    url: 'https://png.pngtree.com/thumb_back/fw800/background/20250304/pngtree-a-dimly-lit-research-lab-with-glowing-blue-screens-displaying-medical-image_17056820.jpg',
    alt: 'Investigación y Desarrollo',
    title: 'Investigación y Desarrollo',
    link: '/servicios/investigacion',
  },
];

const SLIDE_DURATION = 5000; // Duración de cada diapositiva en milisegundos (5 segundos)

function LogoCarousel() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0); // Estado para la barra de progreso
  const length = carouselData.length;
  const intervalRef = useRef(null); // Ref para el intervalo de cambio de diapositivas

  // Función para reiniciar el temporizador de la diapositiva
  const startSlideTimer = () => {
    clearInterval(intervalRef.current); // Limpiar cualquier temporizador existente
    setProgress(0); // Reiniciar progreso
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (100 / (SLIDE_DURATION / 100)); // Incremento basado en 100ms
        if (newProgress >= 100) {
          nextSlide(); // Cambiar a la siguiente diapositiva cuando la barra se llena
          return 0; // Reiniciar progreso para la siguiente diapositiva
        }
        return newProgress;
      });
    }, 100); // Actualizar progreso cada 100ms
  };

  // Función para ir a la siguiente diapositiva
  const nextSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === length - 1 ? 0 : prevCurrent + 1));
    startSlideTimer(); // Reiniciar el temporizador
  };

  // Función para ir a la diapositiva anterior
  const prevSlide = () => {
    setCurrent((prevCurrent) => (prevCurrent === 0 ? length - 1 : prevCurrent - 1));
    startSlideTimer(); // Reiniciar el temporizador
  };

  // Efecto para iniciar el temporizador al montar el componente y al cambiar de diapositiva
  useEffect(() => {
    startSlideTimer();
    return () => clearInterval(intervalRef.current); // Limpiar al desmontar
  }, [current]); // Dependencia para reiniciar el temporizador cuando la diapositiva cambia

  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  const currentSlideData = carouselData[current];

  return (
    <div className='carousel-section'>
      <div className='carousel-main-content'>
        <div className='carousel-image-container'>
          <img src={currentSlideData.url} alt={currentSlideData.alt} className='carousel-image' />
          <div className='carousel-overlay'>
            <div className='carousel-text-content'>
              {/* Contenido de texto y botón "Leer Más" */}
              <p className='carousel-title'>{currentSlideData.title}</p>
              <Link to={currentSlideData.link} className='read-more-link'>
                READ MORE <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>

        <div className='carousel-bottom-nav'>
          {carouselData.map((slide, index) => (
            <div
              key={index}
              className={`bottom-nav-item ${index === current ? 'active' : ''}`}
              onClick={() => {
                setCurrent(index);
                startSlideTimer(); // Reiniciar temporizador al hacer clic
              }}
            >
              <div className='progress-bar-container'>
                <div
                  className='progress-bar'
                  style={{ width: `${index === current ? progress : 0}%` }}
                ></div>
              </div>
              <span className='bottom-nav-title'>{slide.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoCarousel;
