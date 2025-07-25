// frontend/src/pages/IngenieriaPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './IngenieriaPage.css';

// Datos de las preguntas frecuentes para el acordeón
const faqData = [
  {
    question: '¿Qué tipo de servicios de Ingeniería ofrece Vekian Labs?',
    answer: 'Ofrecemos una amplia gama de servicios de ingeniería de software, incluyendo desarrollo de sistemas complejos, optimización de rendimiento, arquitectura de soluciones, integración de sistemas, y aseguramiento de calidad, siempre con un enfoque en la escalabilidad y robustez.'
  },
  {
    question: '¿Cómo se integra Business Intelligence (BI) en sus proyectos de ingeniería?',
    answer: 'Integramos BI para proporcionar análisis de rendimiento de sistemas, monitoreo de métricas operativas y dashboards de gestión de proyectos, permitiendo a nuestros clientes tomar decisiones informadas sobre sus soluciones de ingeniería.'
  },
  {
    question: '¿Desarrollan software a medida o trabajan con plataformas existentes?',
    answer: 'Desarrollamos software a medida desde cero para cumplir con requisitos únicos, y también trabajamos con la personalización e integración de plataformas de software existentes, asegurando la mejor solución para cada necesidad.'
  },
  {
    question: '¿Qué papel juega el hardware en sus soluciones de ingeniería?',
    answer: 'Consideramos la interacción con el hardware desde el diseño, optimizando el software para el hardware existente o recomendando y configurando hardware específico para garantizar el máximo rendimiento y compatibilidad en soluciones embebidas, IoT o de infraestructura.'
  },
  {
    question: '¿Cómo aseguran la calidad de sus entregables de ingeniería?',
    answer: 'Nuestros procesos de ingeniería incluyen metodologías ágiles, pruebas rigurosas (unitarias, de integración, de sistema), revisiones de código exhaustivas y un enfoque en la mejora continua para garantizar la entrega de soluciones de alta calidad.'
  },
];

function IngenieriaPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Estado para el acordeón de FAQ

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className='ingenieria-page'>
      {/* Sección Hero */}
      <section className='ingenieria-hero-section'>
        <div className='ingenieria-hero-overlay'>
          <h1>Ingeniería de Software de Vanguardia</h1>
          <p>Construyendo soluciones robustas y escalables para los desafíos tecnológicos más complejos.</p>
          <p className='hero-subtitle-long'>
            Desde la concepción hasta la implementación, nuestra ingeniería de software garantiza
            productos innovadores, eficientes y preparados para el futuro.
          </p>
          <Link to='/contacto' className='hero-learn-more-btn'>
            DESCUBRA MÁS
          </Link>
        </div>
      </section>

      {/* Sección de Contenido con Video */}
      <section className='ingenieria-video-content-section'>
        <div className='video-content-wrapper'>
          <div className='text-block'>
            <p>
              La ingeniería de software es el arte y la ciencia de construir sistemas que no solo
              funcionen, sino que también sean eficientes, seguros y escalables. En Vekian Labs,
              aplicamos las mejores prácticas y metodologías ágiles para desarrollar soluciones
              que superen las expectativas y impulsen la innovación en su negocio.
            </p>
          </div>
          <div className='video-block'>
            {/* Placeholder para el video de YouTube */}
            <div className='video-placeholder'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oBwzLh2_M_A?controls=0" // Reemplazar con un video real sobre ingeniería de software
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='ingenieria-benefits-section'>
          <h2>Beneficios de la Ingeniería de Software con Vekian Labs</h2>
          <p>
            Nuestros servicios de ingeniería de software le proporcionan una base sólida para el éxito digital:
          </p>
          <ul>
            <li>Desarrollo de software de alta calidad y rendimiento.</li>
            <li>Soluciones escalables y adaptables a sus necesidades futuras.</li>
            <li>Integración fluida de Business Intelligence (BI) para insights operativos.</li>
            <li>Optimización de la interacción entre software y hardware.</li>
            <li>Reducción de costos operativos a largo plazo.</li>
            <li>Implementación de las mejores prácticas de ciberseguridad.</li>
            <li>Equipos de ingeniería expertos y multidisciplinares.</li>
          </ul>
        </div>
      </section>

      {/* Sección "Por qué Vekian Labs" */}
      <section className='why-vekian-section'>
        <h2>Por qué elegir a Vekian Labs para Ingeniería</h2>
        <div className='why-vekian-grid'>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Metodologías Ágiles y DevOps</h3>
            <p>
              Adoptamos enfoques ágiles y DevOps para una entrega rápida, iterativa y de alta calidad,
              asegurando la adaptabilidad a los cambios del mercado.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Expertise en Arquitectura de Soluciones</h3>
            <p>
              Nuestros arquitectos diseñan sistemas robustos y escalables que son la base para
              soluciones de software complejas y de misión crítica.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Integración Total: BI, Software y Hardware</h3>
            <p>
              Ofrecemos un enfoque holístico que abarca desde la implementación de Business Intelligence
              hasta el desarrollo de software y la optimización del hardware subyacente.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Nuestro Equipo" (ejemplo, puedes adaptar o quitar) */}
      <section className='our-team-section'>
        <h2>Nuestro equipo de Ingeniería</h2>
        <div className='team-member-card'>
          <img src='https://via.placeholder.com/150' alt='Miembro del Equipo' className='team-member-photo' />
          <h3>Carlos Mendoza</h3>
          <p>Lead Software Engineer</p>
        </div>
      </section>

      {/* Sección "Noticias y Perspectivas" (ejemplo, puedes adaptar o quitar) */}
      <section className='news-insights-section'>
        <h2>Innovaciones y Perspectivas en Ingeniería</h2>
        <div className='news-grid'>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Ingeniería 1' className='news-image' />
            <h4>El Futuro de la Ingeniería de Software</h4>
            <p>Explorando las tendencias que definirán el desarrollo de software en los próximos años.</p>
            <Link to='/noticias/futuro-ingenieria' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Ingeniería 2' className='news-image' />
            <h4>Microservicios: Flexibilidad y Escalabilidad</h4>
            <p>Cómo la arquitectura de microservicios está transformando el desarrollo de aplicaciones.</p>
            <Link to='/noticias/microservicios' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Ingeniería 3' className='news-image' />
            <h4>La Importancia de las Pruebas Automatizadas</h4>
            <p>Asegurando la calidad y reduciendo errores con estrategias de testing avanzadas.</p>
            <Link to='/noticias/pruebas-automatizadas' className='news-link'>Leer más</Link>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className='faq-section'>
        <h2>Preguntas Frecuentes sobre Ingeniería</h2>
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

export default IngenieriaPage;
