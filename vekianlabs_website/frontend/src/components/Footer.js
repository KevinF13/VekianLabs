// frontend/src/components/Footer.js
import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF, // Usamos faFacebookF para un estilo más limpio
  faInstagram,
  faLinkedinIn, // Usamos faLinkedinIn para un estilo más limpio
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Para el botón de scroll to top

// Datos para las columnas del footer
const FOOTER_COLUMNS = [
  {
    title: 'DESCUBRE VEKIAN',
    links: [
      { text: 'Quiénes Somos', path: '/nosotros' },
      { text: 'Carreras', path: '/carreras' }, // Ejemplo de enlace nuevo
      { text: 'Contacto', path: '/contacto' },
      { text: 'Eventos', path: '/eventos' },
      { text: 'Impacto Social', path: '/esg' }, // Ejemplo de enlace nuevo
      { text: 'Presencia Global', path: '/global' },
      { text: 'Noticias', path: '/noticias' },
      { text: 'Alianzas', path: '/partners' },
      { text: 'Actualizaciones', path: '/updates' },
    ],
  },
  {
    title: 'SERVICIOS',
    links: [
      { text: 'Soluciones Cloud', path: '/servicios/cloud' },
      { text: 'Análisis de Datos', path: '/servicios/data' },
      { text: 'Diseño', path: '/servicios/design' },
      { text: 'Ingeniería', path: '/servicios/engineering' },
      { text: 'Desarrollo Front-end', path: '/servicios/frontend' },
      { text: 'Estrategia de Innovación', path: '/servicios/innovation' },
      { text: 'Automatización Inteligente', path: '/servicios/automation' },
      { text: 'Modernización de Legados', path: '/servicios/legacy' },
      { text: 'Machine Learning', path: '/servicios/ml' },
      { text: 'QA Automation', path: '/servicios/qa' },
    ],
  },
  {
    title: 'INDUSTRIAS',
    links: [
      { text: 'Automotriz', path: '/industrias/automotriz' },
      { text: 'Banca', path: '/industrias/banca' },
      { text: 'Mercados de Capital', path: '/industrias/capital' },
      { text: 'Bienes de Consumo', path: '/industrias/consumo' },
      { text: 'Energía y Utilities', path: '/industrias/energia' },
      { text: 'Salud y Ciencias', path: '/industrias/salud' },
      { text: 'Seguros', path: '/industrias/seguros' },
      { text: 'Manufactura', path: '/industrias/manufactura' },
      { text: 'Medios', path: '/industrias/media' },
      { text: 'Tecnología y Redes', path: '/industrias/tech' },
      { text: 'Petróleo y Gas', path: '/industrias/oil' },
      { text: 'Retail y E-commerce', path: '/industrias/retail' },
      { text: 'Telecomunicaciones', path: '/industrias/telecom' },
      { text: 'Viajes y Hospitalidad', path: '/industrias/travel' },
      { text: 'Transporte y Logística', path: '/industrias/transporte' },
    ],
  },
];

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className='footer-container'>
      <div className='footer-main-content'>
        {/* Columna izquierda: Título y botón de contacto */}
        <div className='footer-left-column'>
          <h2 className='footer-cta-title'>
            Habilite su ventaja digital con Vekian Labs
          </h2>
          <Link to='/contacto' className='footer-connect-btn'>
            <button className='btn btn--outline btn--large'>CONÉCTESE CON NOSOTROS</button>
          </Link>
          <div className='footer-social-icons'>
            <a href='https://facebook.com/vekianlabs' target='_blank' aria-label='Facebook' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href='https://twitter.com/vekianlabs' target='_blank' aria-label='Twitter' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='https://linkedin.com/company/vekianlabs' target='_blank' aria-label='LinkedIn' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href='https://instagram.com/vekianlabs' target='_blank' aria-label='Instagram' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        {/* Columnas de enlaces */}
        <div className='footer-right-columns'>
          {FOOTER_COLUMNS.map((col, colIndex) => (
            <div className='footer-link-group' key={colIndex}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Sección inferior de copyright y enlaces legales */}
      <div className='footer-bottom-bar'>
        <div className='footer-copyright'>
          © {new Date().getFullYear()} VEKIAN LABS. Todos los derechos reservados.
        </div>
        <div className='footer-legal-links'>
          <Link to='/privacidad'>Política de Privacidad</Link>
          <Link to='/terminos'>Términos de Uso</Link>
          <Link to='/sitemap'>Mapa del Sitio</Link>
        </div>
      </div>

      {/* Botón de Scroll to Top */}
      {showScroll && (
        <button className='scroll-to-top-btn' onClick={scrollTop}>
          <FontAwesomeIcon icon={faChevronUp} />
        </button>
      )}
    </div>
  );
}

export default Footer;
