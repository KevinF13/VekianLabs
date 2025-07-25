// frontend/src/pages/AnaliticaDatosPage.js
import React, { useState } from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './AnaliticaDatosPage.css';

// Datos de las preguntas frecuentes para el acordeón
const faqData = [
  {
    question: '¿Qué es la Analítica de Datos y por qué es importante?',
    answer: 'La Analítica de Datos es el proceso de examinar conjuntos de datos para sacar conclusiones sobre la información que contienen. Es crucial para la toma de decisiones basada en evidencia, la identificación de patrones, la optimización de procesos y la predicción de tendencias futuras.'
  },
  {
    question: '¿Cómo puede Vekian Labs ayudar a mi empresa con la Analítica de Datos?',
    answer: 'Vekian Labs ofrece servicios completos de analítica de datos, desde la recolección y limpieza de datos hasta la creación de modelos predictivos y la visualización de datos. Implementamos soluciones de Business Intelligence (BI), desarrollamos software a medida y optimizamos el hardware para sus necesidades de procesamiento de datos.'
  },
  {
    question: '¿Qué tipo de datos pueden analizar con sus soluciones?',
    answer: 'Podemos analizar una amplia variedad de datos, incluyendo datos de ventas, comportamiento del cliente, operaciones, financieros, de mercado, redes sociales y datos de sensores, entre otros, adaptándonos a las necesidades específicas de su industria.'
  },
  {
    question: '¿Ofrecen capacitación en el uso de herramientas de Analítica de Datos?',
    answer: 'Sí, además de implementar soluciones, proporcionamos capacitación a su equipo para que puedan utilizar eficazmente las herramientas y plataformas de analítica de datos, asegurando una adopción exitosa y un uso continuo.'
  },
  {
    question: '¿Cómo se integra la Analítica de Datos con Business Intelligence (BI)?',
    answer: 'La analítica de datos es la base de Business Intelligence. BI utiliza los resultados del análisis para crear dashboards, informes y visualizaciones interactivas que permiten a los usuarios de negocio comprender rápidamente el rendimiento y tomar decisiones informadas.'
  },
];

function AnaliticaDatosPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Estado para el acordeón de FAQ

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className='analitica-datos-page'>
      {/* Sección Hero */}
      <section className='analitica-datos-hero-section'>
        <div className='analitica-datos-hero-overlay'>
          <h1>Analítica de Datos Inteligente</h1>
          <p>Convirtiendo datos en decisiones estratégicas y ventajas competitivas.</p>
          <p className='hero-subtitle-long'>
            Aproveche el poder de sus datos para obtener información valiosa, optimizar operaciones
            y predecir tendencias futuras con nuestras soluciones avanzadas de analítica.
          </p>
          <Link to='/contacto' className='hero-learn-more-btn'>
            DESCUBRA MÁS
          </Link>
        </div>
      </section>

      {/* Sección de Contenido con Video */}
      <section className='analitica-datos-video-content-section'>
        <div className='video-content-wrapper'>
          <div className='text-block'>
            <p>
              En la era actual, los datos son el activo más valioso de cualquier organización.
              Nuestras soluciones de analítica de datos están diseñadas para desentrañar patrones
              ocultos, predecir comportamientos y ofrecer una visión 360 grados de su negocio,
              permitiendo una toma de decisiones proactiva y basada en evidencia.
            </p>
          </div>
          <div className='video-block'>
            {/* Placeholder para el video de YouTube */}
            <div className='video-placeholder'>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oBwzLh2_M_A?controls=0" // Reemplazar con un video real sobre data analytics
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className='analitica-datos-benefits-section'>
          <h2>Beneficios de la Analítica de Datos con Vekian Labs</h2>
          <p>
            Vekian Labs le ayuda a transformar sus datos en una ventaja estratégica, incluyendo:
          </p>
          <ul>
            <li>Toma de decisiones informada y basada en datos.</li>
            <li>Optimización de procesos y operaciones.</li>
            <li>Identificación de nuevas oportunidades de negocio.</li>
            <li>Mejora de la experiencia del cliente a través de la personalización.</li>
            <li>Predicción de tendencias y comportamientos futuros.</li>
            <li>Implementación de Business Intelligence (BI) para dashboards interactivos.</li>
            <li>Desarrollo de software de análisis de datos a medida.</li>
            <li>Optimización de hardware para el procesamiento de grandes volúmenes de datos.</li>
          </ul>
        </div>
      </section>

      {/* Sección "Por qué Vekian Labs" */}
      <section className='why-vekian-section'>
        <h2>Por qué elegir Vekian Labs para Analítica de Datos</h2>
        <div className='why-vekian-grid'>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Expertise en Big Data y Machine Learning</h3>
            <p>
              Contamos con especialistas en el manejo de grandes volúmenes de datos y la aplicación
              de algoritmos de aprendizaje automático para extraer valor.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Soluciones Personalizadas</h3>
            <p>
              Diseñamos e implementamos soluciones de analítica de datos que se adaptan
              específicamente a sus desafíos y objetivos de negocio, garantizando resultados relevantes.
            </p>
          </div>
          <div className='why-vekian-item'>
            <div className='icon-placeholder'></div> {/* Icono placeholder */}
            <h3>Integración BI, Software y Hardware</h3>
            <p>
              Ofrecemos un enfoque integral, desde la implementación de herramientas de Business Intelligence
              hasta el desarrollo de software analítico y la optimización del hardware para un rendimiento superior.
            </p>
          </div>
        </div>
      </section>

      {/* Sección "Nuestro Equipo" (ejemplo, puedes adaptar o quitar) */}
      <section className='our-team-section'>
        <h2>Nuestro equipo de Analítica</h2>
        <div className='team-member-card'>
          <img src='https://via.placeholder.com/150' alt='Miembro del Equipo' className='team-member-photo' />
          <h3>Ana García</h3>
          <p>Lead Data Scientist</p>
        </div>
      </section>

      {/* Sección "Noticias y Perspectivas" (ejemplo, puedes adaptar o quitar) */}
      <section className='news-insights-section'>
        <h2>Últimas Perspectivas en Datos</h2>
        <div className='news-grid'>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Datos 1' className='news-image' />
            <h4>El Futuro de la IA en el Análisis de Datos</h4>
            <p>Explora cómo la inteligencia artificial está redefiniendo el campo de la analítica.</p>
            <Link to='/noticias/ia-analisis-datos' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Datos 2' className='news-image' />
            <h4>Big Data: Desafíos y Oportunidades</h4>
            <p>Un análisis profundo sobre cómo las empresas pueden aprovechar el Big Data.</p>
            <Link to='/noticias/big-data-desafios' className='news-link'>Leer más</Link>
          </div>
          <div className='news-item'>
            <img src='https://via.placeholder.com/300x200' alt='Noticia Datos 3' className='news-image' />
            <h4>Visualización de Datos para la Toma de Decisiones</h4>
            <p>La importancia de presentar los datos de forma clara y efectiva.</p>
            <Link to='/noticias/visualizacion-datos' className='news-link'>Leer más</Link>
          </div>
        </div>
      </section>

      {/* Sección de Preguntas Frecuentes */}
      <section className='faq-section'>
        <h2>Preguntas Frecuentes sobre Analítica de Datos</h2>
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

export default AnaliticaDatosPage;
