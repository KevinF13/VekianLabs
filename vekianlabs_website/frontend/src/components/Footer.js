// frontend/src/components/Footer.js
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import vekianLogoWhite from '../assets/images/logo-white.png'; // <--- CAMBIADO a .png

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Vekian Labs</h2>
            <Link to='/nosotros'>Quiénes Somos</Link>
            <Link to='/servicios'>Nuestros Servicios</Link>
            <Link to='/proyectos'>Portafolio</Link>
            <Link to='/privacidad'>Política de Privacidad</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contáctanos</h2>
            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Quito, Ecuador</p>
            <p><FontAwesomeIcon icon={faPhone} /> +593 99 999 9999</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> info@vekianlabs.com</p>
            <Link to='/contacto'>Agenda una Cita</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Redes Sociales</h2>
            <a href='https://instagram.com/vekianlabs' target='_blank' rel='noreferrer noopener'>
              Instagram <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href='https://facebook.com/vekianlabs' target='_blank' rel='noreferrer noopener'>
              Facebook <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='https://linkedin.com/company/vekianlabs' target='_blank' rel='noreferrer noopener'>
              LinkedIn <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href='https://twitter.com/vekianlabs' target='_blank' rel='noreferrer noopener'>
              Twitter <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <img src={vekianLogoWhite} alt="Vekian Labs Logo" className="footer-logo-img" />
            </Link>
          </div>
          <small className='website-rights'>VEKIAN LABS © {new Date().getFullYear()}</small>
          <div className='social-icons'>
            <a className='social-icon-link facebook' href='https://facebook.com/vekianlabs' target='_blank' aria-label='Facebook' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className='social-icon-link instagram' href='https://instagram.com/vekianlabs' target='_blank' aria-label='Instagram' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className='social-icon-link twitter' href='https://twitter.com/vekianlabs' target='_blank' aria-label='Twitter' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className='social-icon-link linkedin' href='https://linkedin.com/company/vekianlabs' target='_blank' aria-label='LinkedIn' rel='noreferrer noopener'>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;