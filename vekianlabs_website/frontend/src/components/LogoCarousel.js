// frontend/src/components/LogoCarousel.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './LogoCarousel.css';

// Las URLs de las imágenes. Puedes reemplazar estas URLs de ejemplo
// con las URLs de tus propias imágenes una vez que las tengas alojadas online.
const carouselData = [
  { 
    url: 'https://www.shutterstock.com/image-photo/bibusiness-intelligence-business-people-can-600nw-2290168151.jpg', 
    alt: 'Vekian Labs Business Intelligence' 
  },
  { 
    url: 'https://www.santanderopenacademy.com/content/dam/becasmicrosites/01-soa-blog/tics-en-la-educacion-1.jpg', 
    alt: 'Vekian Labs TICs' 
  },
  { 
    url: 'https://media.istockphoto.com/id/616902766/es/foto/dedicado-de-desarrollo-de-software.jpg?s=612x612&w=0&k=20&c=Lljz6hkQw_O_J2I81UMKRl6aNvmPKc_JOjXzQEbr5-A=', 
    alt: 'Vekian Labs Software' 
  },
  { 
    url: 'https://eures.europa.eu/sites/default/files/styles/embed_medium/public/2021-12/shutterstock_669170680.jpg?itok=ycmlg5VI', 
    alt: 'Vekian Labs ICT technical support' 
  },
  { 
    url: 'https://png.pngtree.com/thumb_back/fw800/background/20250304/pngtree-a-dimly-lit-research-lab-with-glowing-blue-screens-displaying-medical-image_17056820.jpg', 
    alt: 'Vekian Labs Investigation' 
  },
];

function LogoCarousel() {
  const [current, setCurrent] = useState(0);
  const length = carouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(carouselData) || carouselData.length <= 0) {
    return null;
  }

  return (
    <div className='carousel-section'>
      <div className='carousel-container'>
        <FontAwesomeIcon icon={faChevronLeft} className='carousel-arrow left' onClick={prevSlide} />
        <FontAwesomeIcon icon={faChevronRight} className='carousel-arrow right' onClick={nextSlide} />
        {carouselData.map((slide, index) => (
          <div className={index === current ? 'carousel-slide active' : 'carousel-slide'} key={index}>
            {index === current && (
              <img src={slide.url} alt={slide.alt} className='carousel-image' />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LogoCarousel;