// frontend/src/pages/DesarrolloFrontendPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './DesarrolloFrontendPage.css';

// Datos de las preguntas frecuentes para el acordeón
const faqData = [
  {
    question: '¿Qué es el Desarrollo Front-end y por qué es crucial?',
    answer: 'El Desarrollo Front-end se enfoca en la parte de un sitio web o aplicación con la que los usuarios interactúan directamente. Es crucial porque determina la experiencia del usuario, la usabilidad y la primera impresión, impactando directamente en la retención y conversión de clientes.'
  },
  {
    question: '¿Cómo Vekian Labs optimiza el rendimiento del Front-end?',
    answer: 'Optimizamos el rendimiento del front-end mediante la implementación de las mejores prácticas de código, la optimización de imágenes, la carga diferida de recursos, el uso de redes de entrega de contenido (CDN) y la minimización de archivos, asegurando una experiencia de usuario rápida y fluida.'
  },
  {
    question: '¿Qué tecnologías de Front-end utilizan?',
    answer: 'Trabajamos con las tecnologías más modernas y robustas, incluyendo React, Angular, Vue.js, HTML5, CSS3, JavaScript, TypeScript, y frameworks como Tailwind CSS, asegurando soluciones escalables y de alto rendimiento.'
  },
  {
    question: '¿Cómo se integra el Business Intelligence (BI) con el desarrollo Front-end?',
    answer: 'Integramos BI en el front-end a través de dashboards interactivos y visualizaciones de datos que permiten a los usuarios finales acceder y analizar información clave directamente desde la interfaz de usuario, facilitando la toma de decisiones en tiempo real.'
  },
  {
    question: '¿Ofrecen servicios de mantenimiento y soporte post-lanzamiento?',
    answer: 'Sí, ofrecemos servicios completos de mantenimiento y soporte para asegurar que su aplicación front-end funcione sin problemas, incluyendo actualizaciones, monitoreo de rendimiento, resolución de errores y mejoras continuas.'
  },
];

function DesarrolloFrontendPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Estado para el acordeón de FAQ

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className='desarrollo-frontend-page'>
      {/* Sección Hero */}
      <section className='desarrollo-frontend-hero-section'>
        <div className='desarrollo-frontend-hero-overlay'>
          <h1>Desarrollo Front-end Excepcional</h1>
          <p>Creando interfaces de usuario intuitivas y experiencias digitales cautivadoras.</p>
          <p className='hero-subtitle-long'>
            Transformamos sus ideas en soluciones web y móviles de alto rendimiento,
            centradas en el usuario y optimizadas para el éxito digital.
          </p>
          <Link to='/contacto' className='hero-learn-more-btn'>
            EXPLORE NUESTROS SERVICIOS
          </Link>
        </div>
      </section>

      {/* Sección de Contenido con Video */}
      <section className='desarrollo-frontend-video-content-section'>
        <div className='video-content-wrapper'>
          <div className='text-block'>
            <p>
              El desarrollo front-end es la cara de su negocio en el mundo digital.
              Nos especializamos en construir interfaces de usuario que no solo son visualmente
              atractivas, sino también altamente funcionales, responsivas y optimizadas para
              proporcionar la mejor experiencia posible a sus usuarios en cualquier dispositivo.
            </p>
          </div>
          <div className='video-block'>
            {/* Placeholder para el video de YouTube */}
            <div className='video-placeholder'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oBwzLh2_M_A?controls=0" // Reemplazar con un video real sobre desarrollo front-end
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='desarrollo-frontend-benefits-section'>
          <h2>Beneficios de un Front-end Desarrollado por Vekian Labs</h2>
          <p>
            Un front-end robusto y bien diseñado es fundamental para el éxito de su presencia digital:
          </p>
          <ul>
            <li>Interfaces de usuario altamente intuitivas y atractivas.</li>
            <li>Experiencias de usuario fluidas y de alto rendimiento.</li>
            <li>Diseño responsivo para una visualización perfecta en todos los dispositivos.</li>
            <li>Integración de Business Intelligence (BI) para visualización de datos en tiempo real.</li>
            <li>Desarrollo de software front-end a medida con las últimas tecnologías.</li>
            <li>Optimización de la interacción con el hardware para una experiencia sin interrupciones.</li>
            <li>Mayor compromiso del usuario y tasas de conversión.</li>
          </ul>
        </div>
      </section>

      {/* Sección "Por qué Vekian Labs" */}
      <section className='why-vekian-section'>
        <h2>Por qué elegir a Vekian Labs para Desarrollo Front-end</h2>
        <div className='why-vekian-grid'>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Expertos en UX/UI y Desarrollo</h3>
            <p>
              Nuestro equipo combina la maestría en diseño de experiencia de usuario (UX) e interfaz de usuario (UI)
              con habilidades de desarrollo de vanguardia para crear productos excepcionales.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Tecnologías Modernas y Escalables</h3>
            <p>
              Utilizamos frameworks y bibliotecas modernas como React, Angular y Vue.js para construir
              aplicaciones front-end escalables, mantenibles y preparadas para el futuro.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Enfoque Integral: BI, Software y Hardware</h3>
            <p>
              Consideramos la integración de Business Intelligence, el desarrollo de software
              y la optimización del hardware para ofrecer soluciones front-end completas y de alto rendimiento.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Nuestro Equipo" (ejemplo, puedes adaptar o quitar) */}
      <section className='our-team-section'>
        <h2>Nuestro equipo de Desarrollo Front-end</h2>
        <div className='team-member-card'>
          <img src='https://via.placeholder.com/150' alt='Miembro del Equipo' className='team-member-photo' />
          <h3>Laura Pérez</h3>
          <p>Lead Front-end Developer</p>
        </div>
      </section>

      {/* Sección "Noticias y Perspectivas" (ejemplo, puedes adaptar o quitar) */}
      <section className='news-insights-section'>
        <h2>Tendencias y Perspectivas en Front-end</h2>
        <div className='news-grid'>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Front-end 1' className='news-image' />
            <h4>Web Components: El Futuro de la Reutilización</h4>
            <p>Descubre cómo los Web Components están revolucionando el desarrollo front-end.</p>
            <Link to='/noticias/web-components' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Front-end 2' className='news-image' />
            <h4>Performance Web: Clave para la Experiencia del Usuario</h4>
            <p>Estrategias para optimizar la velocidad y la eficiencia de tus aplicaciones web.</p>
            <Link to='/noticias/performance-web' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Front-end 3' className='news-image' />
            <h4>Accesibilidad en el Desarrollo Front-end</h4>
            <p>Creando experiencias digitales inclusivas para todos los usuarios.</p>
            <Link to='/noticias/accesibilidad-frontend' className='news-link'>Leer más</Link>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className='faq-section'>
        <h2>Preguntas Frecuentes sobre Desarrollo Front-end</h2>
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

export default DesarrolloFrontendPage;
