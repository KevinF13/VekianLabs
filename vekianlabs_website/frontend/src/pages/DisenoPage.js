// frontend/src/pages/DisenoPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './DisenoPage.css';

// Datos de las preguntas frecuentes para el acordeón
const faqData = [
  {
    question: '¿Qué abarca el servicio de Diseño en Vekian Labs?',
    answer: 'Nuestro servicio de Diseño abarca desde la investigación de usuarios y la estrategia de UX/UI hasta el diseño de interacción, prototipado y pruebas de usabilidad, asegurando que sus productos digitales sean intuitivos y atractivos.'
  },
  {
    question: '¿Cómo el diseño impacta en el Business Intelligence (BI)?',
    answer: 'Un buen diseño de interfaces de BI es crucial para la legibilidad y comprensión de los datos. Diseñamos dashboards y visualizaciones que son intuitivos y permiten a los usuarios extraer insights rápidamente, mejorando la toma de decisiones.'
  },
  {
    question: '¿Desarrollan software de diseño o utilizan herramientas existentes?',
    answer: 'Utilizamos una combinación de herramientas de diseño estándar de la industria y, cuando es necesario, desarrollamos software a medida para crear soluciones de diseño únicas o integrar flujos de trabajo específicos, optimizando el proceso creativo.'
  },
  {
    question: '¿Cómo se aseguran de que el diseño sea adaptable a diferentes dispositivos (responsive)?',
    answer: 'Adoptamos un enfoque de diseño "mobile-first" y utilizamos técnicas de diseño responsivo para garantizar que la interfaz de usuario se adapte y funcione perfectamente en cualquier tamaño de pantalla, desde móviles hasta grandes monitores.'
  },
  {
    question: '¿Ofrecen consultoría en estrategia de diseño?',
    answer: 'Sí, ofrecemos consultoría estratégica para ayudarle a definir la visión de su producto, entender a su audiencia, identificar oportunidades de diseño y alinear sus objetivos de diseño con sus metas de negocio.'
  },
];

function DisenoPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Estado para el acordeón de FAQ

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className='diseno-page'>
      {/* Sección Hero */}
      <section className='diseno-hero-section'>
        <div className='diseno-hero-overlay'>
          <h1>Diseño Centrado en el Usuario</h1>
          <p>Creando experiencias digitales intuitivas y atractivas que impulsan el compromiso y el valor.</p>
          <p className='hero-subtitle-long'>
            Transformamos ideas en productos digitales excepcionales a través de un diseño estratégico
            y centrado en las necesidades de sus usuarios, integrando BI, software y hardware.
          </p>
          <Link to='/contacto' className='hero-learn-more-btn'>
            DESCUBRA MÁS
          </Link>
        </div>
      </section>

      {/* Sección de Contenido con Video */}
      <section className='diseno-video-content-section'>
        <div className='video-content-wrapper'>
          <div className='text-block'>
            <p>
              El diseño es más que estética; es la columna vertebral de la interacción del usuario
              con su producto. En Vekian Labs, nos enfocamos en crear soluciones de diseño que no solo
              sean visualmente atractivas, sino que también sean altamente funcionales, intuitivas
              y que resuelvan problemas reales para sus usuarios.
            </p>
          </div>
          <div className='video-block'>
            {/* Placeholder para el video de YouTube */}
            <div className='video-placeholder'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oBwzLh2_M_A?controls=0" // Reemplazar con un video real sobre diseño UX/UI
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='diseno-benefits-section'>
          <h2>Beneficios de un Diseño Estratégico con Vekian Labs</h2>
          <p>
            Un diseño bien ejecutado es clave para el éxito de su producto digital. Con Vekian Labs, obtendrá:
          </p>
          <ul>
            <li>Interfaces de usuario intuitivas y fáciles de usar.</li>
            <li>Experiencias de usuario que fidelizan y convierten.</li>
            <li>Diseños optimizados para la integración de Business Intelligence (BI).</li>
            <li>Desarrollo de software de diseño a medida para necesidades específicas.</li>
            <li>Consideración del hardware para una experiencia de usuario fluida.</li>
            <li>Reducción de la curva de aprendizaje para nuevos usuarios.</li>
            <li>Mayor satisfacción del cliente y retención.</li>
          </ul>
        </div>
      </section>

      {/* Sección "Por qué Vekian Labs" */}
      <section className='why-vekian-section'>
        <h2>Por qué elegir a Vekian Labs para Diseño</h2>
        <div className='why-vekian-grid'>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Enfoque Centrado en el Usuario</h3>
            <p>
              Nuestra metodología de diseño se basa en una profunda investigación y comprensión
              de las necesidades y comportamientos de sus usuarios.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Expertise en UX/UI y Prototipado</h3>
            <p>
              Contamos con diseñadores expertos en la creación de experiencias de usuario (UX)
              e interfaces de usuario (UI) atractivas y funcionales, con prototipos interactivos.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Integración con BI, Software y Hardware</h3>
            <p>
              Consideramos la implementación de Business Intelligence, el desarrollo de software
              y las capacidades del hardware desde las etapas iniciales del diseño para soluciones holísticas.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Nuestro Equipo" (ejemplo, puedes adaptar o quitar) */}
      <section className='our-team-section'>
        <h2>Nuestro equipo de Diseño</h2>
        <div className='team-member-card'>
          <img src='https://via.placeholder.com/150' alt='Miembro del Equipo' className='team-member-photo' />
          <h3>Sofía Ramos</h3>
          <p>Lead UX/UI Designer</p>
        </div>
      </section>

      {/* Sección "Noticias y Perspectivas" (ejemplo, puedes adaptar o quitar) */}
      <section className='news-insights-section'>
        <h2>Tendencias y Perspectivas en Diseño</h2>
        <div className='news-grid'>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Diseño 1' className='news-image' />
            <h4>El Futuro del Diseño de Interacción</h4>
            <p>Explorando las innovaciones que darán forma a las experiencias de usuario del mañana.</p>
            <Link to='/noticias/diseno-interaccion' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Diseño 2' className='news-image' />
            <h4>Diseño Inclusivo: Creando para Todos</h4>
            <p>La importancia de la accesibilidad y la inclusión en el proceso de diseño.</p>
            <Link to='/noticias/diseno-inclusivo' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Diseño 3' className='news-image' />
            <h4>UX Research: La Base de un Gran Producto</h4>
            <p>Cómo la investigación de usuarios impulsa el éxito de los productos digitales.</p>
            <Link to='/noticias/ux-research' className='news-link'>Leer más</Link>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className='faq-section'>
        <h2>Preguntas Frecuentes sobre Diseño</h2>
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

export default DisenoPage;
