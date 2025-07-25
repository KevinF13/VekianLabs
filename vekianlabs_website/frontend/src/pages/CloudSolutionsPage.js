// frontend/src/pages/CloudSolutionsPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './CloudSolutionsPage.css';

// Datos de las preguntas frecuentes para el acordeón
const faqData = [
  {
    question: '¿Cuál es la diferencia entre la nube pública, privada e híbrida?',
    answer: 'La nube pública es operada por un proveedor externo y compartida entre múltiples usuarios. La nube privada es dedicada a una sola organización, ya sea alojada internamente o por un tercero. La nube híbrida combina elementos de ambas, permitiendo que los datos y las aplicaciones se muevan entre ellas.'
  },
  {
    question: '¿Qué industrias atiende Vekian Labs en soluciones cloud?',
    answer: 'Vekian Labs ofrece soluciones cloud a una amplia gama de industrias, incluyendo banca, automotriz, retail, energía, salud, manufactura y medios, adaptando nuestras estrategias a las necesidades específicas de cada sector.'
  },
  {
    question: '¿Cuáles son los beneficios de usar soluciones cloud de Vekian Labs?',
    answer: 'Nuestras soluciones cloud ofrecen escalabilidad, reducción de costos operativos, mayor agilidad empresarial, seguridad mejorada, acceso a innovaciones tecnológicas y la capacidad de implementar Business Intelligence (BI) y software/hardware optimizado.'
  },
  {
    question: '¿Cómo garantiza Vekian Labs la seguridad en la nube?',
    answer: 'Implementamos las mejores prácticas de seguridad, incluyendo cifrado de datos, gestión de identidades y accesos (IAM), monitoreo continuo, cumplimiento normativo y arquitecturas de seguridad robustas para proteger sus activos en la nube.'
  },
  {
    question: '¿Vekian Labs ofrece servicios de migración a la nube?',
    answer: 'Sí, ofrecemos servicios completos de migración a la nube, desde la evaluación inicial y la planificación estratégica hasta la ejecución de la migración y la optimización post-migración, asegurando una transición fluida y eficiente.'
  },
];

function CloudSolutionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Estado para el acordeón de FAQ

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className='cloud-solutions-page'>
      {/* Sección Hero */}
      <section className='cloud-solutions-hero-section'>
        <div className='cloud-solutions-hero-overlay'>
          <h1>Vekian Labs Soluciones Cloud</h1>
          <p>Más predecible, más repetible, más ágil.</p>
          <p className='hero-subtitle-long'>
            Nuestros servicios de TI en la nube permiten una entrega cada vez más eficiente con
            estabilidad, escalabilidad y control de costos mejorados.
          </p>
          <Link to='/contacto' className='hero-learn-more-btn'>
            LEARN MORE
          </Link>
        </div>
      </section>

      {/* Sección de Contenido con Video */}
      <section className='cloud-solutions-video-content-section'>
        <div className='video-content-wrapper'>
          <div className='text-block'>
            <p>
              La transición a la nube no se trata solo de velocidad. Como una carrera de Fórmula 1,
              requiere estrategia y una coordinación excelente para mantenerse a la cabeza, con
              refinamientos realizados en cada vuelta de la migración. El marco de adopción de la nube
              de Vekian Labs garantiza que su migración se ejecute de manera eficiente, segura e innovadora.
            </p>
          </div>
          <div className='video-block'>
            {/* Placeholder para el video de YouTube */}
            <div className='video-placeholder'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" // Reemplazar con un video real
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='cloud-benefits-section'>
          <h2>A la vanguardia en la nube</h2>
          <p>
            Vekian Labs ayuda a las organizaciones a adoptar tecnología de vanguardia basada en la nube.
            Los modelos de servicio en la nube permiten un conjunto de reacciones, que incluyen:
          </p>
          <ul>
            <li>DevOps permite una respuesta rápida y continua a las necesidades del cliente.</li>
            <li>Las plataformas son virtualizadas y contenerizadas, proporcionando mayores niveles de escalabilidad.</li>
            <li>Los componentes principales de las arquitecturas de microservicios se pueden actualizar rápidamente.</li>
            <li>La ciberseguridad juega un papel cada vez más crucial en la gestión de datos.</li>
            <li>La prevención de fugas de datos permite soluciones más controlables.</li>
          </ul>
        </div>
      </section>

      {/* Sección "Por qué Vekian Labs" */}
      <section className='why-vekian-section'>
        <h2>Por qué Vekian Labs</h2>
        <div className='why-vekian-grid'>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Experiencia tecnológica profunda</h3>
            <p>
              Entendemos el papel que juega DevOps para asegurar que una organización tenga la velocidad
              y agilidad para adaptarse rápidamente a los requisitos cambiantes del cliente y a los
              paisajes tecnológicos en evolución.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Historial comprobado</h3>
            <p>
              Nuestros expertos tienen una vasta experiencia en el diseño e implementación de pipelines
              de despliegue que brindan a los clientes control total sobre el proceso de construcción y despliegue.
              Estos principios infunden la confianza para ejecutar despliegues de producción diarios múltiples.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Conocimiento del dominio</h3>
            <p>
              Vekian Labs combina la consultoría de soluciones en la nube con experiencia práctica a escala,
              proporcionando una profunda comprensión del dominio de entornos de infraestructura altamente
              complejos y de ritmo rápido. Nuestro modelo de compromiso flexible ofrece un servicio global
              de extremo a extremo y una innovación constante.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Nuestro Equipo" */}
      <section className='our-team-section'>
        <h2>Nuestro equipo</h2>
        <div className='team-member-card'>
          <img src='https://via.placeholder.com/150' alt='Miembro del Equipo' className='team-member-photo' />
          <h3>Dmytro Elperin</h3>
          <p>Solution Lead, Cloud</p>
        </div>
      </section>

      {/* Sección "Noticias y Perspectivas" */}
      <section className='news-insights-section'>
        <h2>Noticias y perspectivas</h2>
        <div className='news-grid'>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia 1' className='news-image' />
            <h4>Título de la Noticia 1</h4>
            <p>Breve descripción de la noticia o perspectiva relevante.</p>
            <Link to='/noticias/noticia-1' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia 2' className='news-image' />
            <h4>Título de la Noticia 2</h4>
            <p>Breve descripción de la noticia o perspectiva relevante.</p>
            <Link to='/noticias/noticia-2' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia 3' className='news-image' />
            <h4>Título de la Noticia 3</h4>
            <p>Breve descripción de la noticia o perspectiva relevante.</p>
            <Link to='/noticias/noticia-3' className='news-link'>Leer más</Link>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className='faq-section'>
        <h2>Preguntas frecuentes</h2>
        <div className='faq-accordion'>
          {faqData.map((item, index) => (
            <div className='faq-item' key={index}>
              <div className='faq-question' onClick={() => toggleFaq(index)}>
                <span>{item.question}</span>
                <FontAwesomeIcon icon={openFaqIndex === index ? faMinus : faPlus} />
              </div>
              {openFaqIndex === index && (
                <div className='faq-answer'>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default CloudSolutionsPage;
