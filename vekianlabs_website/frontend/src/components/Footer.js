// frontend/src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

function Footer() {
  const whatsappNumber = '+593987654321'; // Cambia por tu número de WhatsApp real
  const facebookLink = 'https://facebook.com/vekianlabs'; // Cambia por tus redes
  const instagramLink = 'https://instagram.com/vekianlabs';
  const linkedinLink = 'https://linkedin.com/company/vekianlabs';
  const emailAddress = 'info@vekianlabs.com'; // Cambia por tu email

  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          ¿Interesado en nuestros servicios? Contáctanos hoy mismo.
        </p>
        <p className='footer-subscription-text'>
          Siempre estamos listos para atenderte.
        </p>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nosotros</h2>
            <Link to='/'>Cómo trabajamos</Link>
            <Link to='/servicios'>Testimonios</Link>
            <Link to='/'>Términos de Servicio</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contacto</h2>
            <Link to='/contacto'>Formulario de contacto</Link>
            <a href={`mailto:${emailAddress}`}>Email: {emailAddress}</a>
            <a href={`tel:${whatsappNumber}`}>Teléfono: {whatsappNumber}</a>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Servicios</h2>
            <Link to='/servicios'>Desarrollo Web</Link>
            <Link to='/servicios'>Aplicaciones Móviles</Link>
            <Link to='/servicios'>Consultoría IT</Link>
            <Link to='/servicios'>Diseño UI/UX</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <a href={instagramLink} target='_blank' rel='noopener noreferrer'>
              Instagram
            </a>
            <a href={facebookLink} target='_blank' rel='noopener noreferrer'>
              Facebook
            </a>
            <a href={linkedinLink} target='_blank' rel='noopener noreferrer'>
              LinkedIn
            </a>
            <a href={`https://wa.me/${whatsappNumber.replace('+', '')}`} target='_blank' rel='noopener noreferrer'>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              VEKIANLABS
            </Link>
          </div>
          <small className='website-rights'>VEKIANLABS © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            <a
              className='social-icon-link facebook'
              href={facebookLink}
              target='_blank'
              aria-label='Facebook'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              className='social-icon-link instagram'
              href={instagramLink}
              target='_blank'
              aria-label='Instagram'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className='social-icon-link linkedin'
              href={linkedinLink}
              target='_blank'
              aria-label='LinkedIn'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className='social-icon-link whatsapp'
              href={`https://wa.me/${whatsappNumber.replace('+', '')}`}
              target='_blank'
              aria-label='WhatsApp'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
              className='social-icon-link email'
              href={`mailto:${emailAddress}`}
              aria-label='Email'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;