// frontend/src/pages/EstrategiaInnovacionPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './EstrategiaInnovacionPage.css';

// Datos de las preguntas frecuentes para el acordeón
const faqData = [
  {
    question: '¿Qué es la Estrategia de Innovación?',
    answer: 'La Estrategia de Innovación es un plan que define cómo una organización generará, implementará y gestionará nuevas ideas, productos, servicios o procesos para lograr sus objetivos de negocio y mantener una ventaja competitiva.'
  },
  {
    question: '¿Cómo Vekian Labs ayuda a desarrollar una Estrategia de Innovación?',
    answer: 'En Vekian Labs, ayudamos a las empresas a identificar oportunidades de innovación, definir hojas de ruta tecnológicas, fomentar una cultura de innovación, y seleccionar las herramientas y metodologías adecuadas para impulsar el crecimiento y la diferenciación.'
  },
  {
    question: '¿Qué papel juega el Business Intelligence (BI) en la innovación?',
    answer: 'El BI es fundamental para la innovación, ya que proporciona insights basados en datos sobre el mercado, los clientes y las operaciones internas, permitiendo identificar tendencias emergentes, evaluar el impacto de las innovaciones y tomar decisiones estratégicas informadas.'
  },
  {
    question: '¿Cómo se relaciona el software y hardware con la Estrategia de Innovación?',
    answer: 'El software y el hardware son habilitadores clave de la innovación. Desarrollamos software a medida para prototipado, simulación y gestión de proyectos innovadores, y optimizamos el hardware para soportar nuevas tecnologías como IA, IoT y computación avanzada, transformando las ideas en realidad.'
  },
  {
    question: '¿Ofrecen talleres o programas de capacitación en innovación?',
    answer: 'Sí, ofrecemos talleres y programas personalizados para equipos y líderes, enfocados en metodologías de innovación como Design Thinking, Lean Startup y Agile, para fomentar la creatividad y la capacidad de ejecución dentro de su organización.'
  },
];

function EstrategiaInnovacionPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Estado para el acordeón de FAQ

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className='estrategia-innovacion-page'>
      {/* Sección Hero */}
      <section className='estrategia-innovacion-hero-section'>
        <div className='estrategia-innovacion-hero-overlay'>
          <h1>Estrategia de Innovación Disruptiva</h1>
          <p>Impulsando el futuro de su negocio a través de la visión y la ejecución innovadora.</p>
          <p className='hero-subtitle-long'>
            Definimos hojas de ruta claras y accionables para la innovación,
            integrando Business Intelligence, software a medida y hardware de vanguardia.
          </p>
          <Link to='/contacto' className='hero-learn-more-btn'>
            IMPULSE SU INNOVACIÓN
          </Link>
        </div>
      </section>

      {/* Sección de Contenido con Video */}
      <section className='estrategia-innovacion-video-content-section'>
        <div className='video-content-wrapper'>
          <div className='text-block'>
            <p>
              La innovación no es solo una idea, es un proceso estratégico que requiere visión,
              planificación y la capacidad de ejecutar. En Vekian Labs, le ayudamos a construir
              una estrategia de innovación que no solo responda a los cambios del mercado,
              sino que también los anticipe y los lidere.
            </p>
          </div>
          <div className='video-block'>
            {/* Placeholder para el video de YouTube */}
            <div className='video-placeholder'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oBwzLh2_M_A?controls=0" // Reemplazar con un video real sobre estrategia de innovación
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='estrategia-innovacion-benefits-section'>
          <h2>Beneficios de una Estrategia de Innovación con Vekian Labs</h2>
          <p>
            Una estrategia de innovación bien definida es la clave para el crecimiento sostenible:
          </p>
          <ul>
            <li>Identificación de oportunidades de mercado no explotadas.</li>
            <li>Desarrollo de nuevos productos y servicios disruptivos.</li>
            <li>Optimización de procesos internos a través de la innovación.</li>
            <li>Toma de decisiones basada en Business Intelligence (BI) para la innovación.</li>
            <li>Implementación de software y hardware que habilitan nuevas capacidades.</li>
            <li>Fomento de una cultura empresarial orientada a la innovación.</li>
            <li>Mayor agilidad y capacidad de adaptación al cambio.</li>
          </ul>
        </div>
      </section>

      {/* Sección "Por qué Vekian Labs" */}
      <section className='why-vekian-section'>
        <h2>Por qué elegir a Vekian Labs para Estrategia de Innovación</h2>
        <div className='why-vekian-grid'>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Visión Estratégica y Tecnológica</h3>
            <p>
              Combinamos una profunda comprensión de las tendencias tecnológicas con una visión
              estratégica para identificar y capitalizar las oportunidades de innovación.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Metodologías Comprobadas</h3>
            <p>
              Aplicamos metodologías de innovación líderes en la industria para guiar el proceso
              desde la ideación hasta la implementación exitosa.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Integración Holística: BI, Software y Hardware</h3>
            <p>
              Nuestro enfoque integral asegura que su estrategia de innovación esté respaldada
              por las herramientas de Business Intelligence, el software y el hardware adecuados.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Nuestro Equipo" (ejemplo, puedes adaptar o quitar) */}
      <section className='our-team-section'>
        <h2>Nuestro equipo de Innovación</h2>
        <div className='team-member-card'>
          <img src='https://via.placeholder.com/150' alt='Miembro del Equipo' className='team-member-photo' />
          <h3>Ricardo Solís</h3>
          <p>Director de Innovación</p>
        </div>
      </section>

      {/* Sección "Noticias y Perspectivas" (ejemplo, puedes adaptar o quitar) */}
      <section className='news-insights-section'>
        <h2>Últimas Tendencias en Innovación</h2>
        <div className='news-grid'>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Innovación 1' className='news-image' />
            <h4>IA Generativa: Redefiniendo la Innovación</h4>
            <p>Cómo la IA generativa está abriendo nuevas fronteras para la creatividad y el desarrollo.</p>
            <Link to='/noticias/ia-generativa' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Innovación 2' className='news-image' />
            <h4>Blockchain y su Impacto en la Cadena de Suministro</h4>
            <p>Explorando cómo la tecnología blockchain está transformando la eficiencia y la transparencia.</p>
            <Link to='/noticias/blockchain-cadena-suministro' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Innovación 3' className='news-image' />
            <h4>Innovación Abierta: Colaborando para el Futuro</h4>
            <p>La importancia de la colaboración externa para acelerar el proceso de innovación.</p>
            <Link to='/noticias/innovacion-abierta' className='news-link'>Leer más</Link>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className='faq-section'>
        <h2>Preguntas Frecuentes sobre Estrategia de Innovación</h2>
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

export default EstrategiaInnovacionPage;
