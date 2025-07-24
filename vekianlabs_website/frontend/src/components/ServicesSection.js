// frontend/src/components/ServicesSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

// Datos de los servicios
const servicesData = [
  {
    title: 'Análisis de Datos',
    description: 'Benefíciese de nuestra experiencia en análisis de datos para abordar cualquier desafío de negocio con información significativa.',
    link: '/servicios/analisis-datos',
  },
  {
    title: 'Diseño',
    description: 'Cree productos digitales que añadan valor de negocio y mejoren las experiencias del cliente.',
    link: '/servicios/diseno',
  },
  {
    title: 'Ingeniería de Software',
    description: 'Aproveche nuestras capacidades de ingeniería de software para construir soluciones a medida y seguras.',
    link: '/servicios/ingenieria-software',
  },
  {
    title: 'Automatización QA',
    description: 'Acelere su ciclo de producción y haga que la calidad sea más eficiente con capacidades de prueba avanzadas.',
    link: '/servicios/automatizacion-qa',
  },
  {
    title: 'Modernización de Legados',
    description: 'Sea el agente de cambio y establezca un negocio próspero totalmente adaptado al entorno definido por software.',
    link: '/servicios/modernizacion-legados',
  },
  {
    title: 'Automatización Inteligente',
    description: 'Mejore la eficiencia operativa y asegure resultados de negocio medibles con servicios de automatización avanzados.',
    link: '/servicios/automatizacion-inteligente',
  },
  {
    title: 'Soluciones Cloud',
    description: 'Combine tecnología y experiencia en el dominio para ofrecer innovación en la industria a escala.',
    link: '/servicios/soluciones-cloud',
  },
];

function ServicesSection() {
  return (
    <section className='services-section'>
      <div className='services-background-animation'></div> {/* Fondo animado */}
      <div className='services-content-wrapper'>
        <h2 className='services-main-title'>Nuestros servicios</h2>
        <div className='services-grid'>
          {servicesData.map((service, index) => (
            <Link to={service.link} className='service-item' key={index}>
              <h3 className='service-title'>{service.title} <span className="arrow-icon">&gt;</span></h3>
              <p className='service-description'>{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
