// frontend/src/components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
// Ya no importamos las imágenes del logo aquí

// Estructura de datos para los enlaces y submenús con columnas
const NAV_ITEMS = [
  {
    title: 'Industrias',
    path: '/industrias',
    hasSubmenu: true,
    submenuColumns: [
      [
        { title: 'Automotriz', path: '/industrias/automotriz' },
        { title: 'Banca', path: '/industrias/banca' },
        { title: 'Mercados de Capital', path: '/industrias/mercados-capital' },
        { title: 'Bienes de Consumo', path: '/industrias/bienes-consumo' },
      ],
      [
        { title: 'Energía', path: '/industrias/energia' },
        { title: 'Salud y Ciencias', path: '/industrias/salud' },
        { title: 'Seguros', path: '/industrias/seguros' },
        { title: 'Manufactura', path: '/industrias/manufactura' },
      ],
      [
        { title: 'Medios', path: '/industrias/medios' },
        { title: 'Tecnología', path: '/industrias/tecnologia' },
        { title: 'Petróleo y Gas', path: '/industrias/petroleo' },
        { title: 'Retail', path: '/industrias/retail' },
      ],
      [
        { title: 'Telecomunicaciones', path: '/industrias/telecomunicaciones' },
        { title: 'Viajes', path: '/industrias/viajes' },
        { title: 'Transporte', path: '/industrias/transporte' },
      ]
    ],
  },
  {
    title: 'Servicios',
    path: '/servicios',
    hasSubmenu: true,
    submenuColumns: [
      [
        { title: 'Soluciones Cloud', path: '/servicios/cloud' },
        { title: 'Analítica de Datos', path: '/servicios/data' },
        { title: 'Diseño', path: '/servicios/design' },
      ],
      [
        { title: 'Ingeniería', path: '/servicios/ingenieria' },
        { title: 'Desarrollo Front-end', path: '/servicios/frontend' },
        { title: 'Estrategia de Innovación', path: '/servicios/innovacion' },
      ],
      [
        { title: 'Automatización Inteligente', path: '/servicios/automation' },
        { title: 'Modernización de Legados', path: '/servicios/modernizacion' },
        { title: 'Luxoft Beyond', path: '/servicios/beyond' },
      ]
    ],
  },
  { title: 'Proyectos', path: '/proyectos', hasSubmenu: false },
  { title: 'Acerca de Nosotros', path: '/nosotros', hasSubmenu: false },
  { title: 'Contacto', path: '/contacto', hasSubmenu: false },
];

function Navbar() {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleSubmenuHover = (index) => {
    setActiveSubmenu(index);
  };

  const handleSubmenuLeave = () => {
    setActiveSubmenu(null);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className='navbar-container'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          {/* Reemplazamos la imagen por texto */}
          <span className={`logo-text ${scrolled ? 'dark-logo-text' : 'light-logo-text'}`}>
            VEKIAN LABS
          </span>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} className={scrolled ? 'dark-icon' : 'light-icon'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          {NAV_ITEMS.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${item.hasSubmenu ? 'has-submenu' : ''}`}
              onMouseEnter={() => handleSubmenuHover(index)}
              onMouseLeave={handleSubmenuLeave}
            >
              <Link to={item.path} className={`nav-links ${scrolled ? 'dark-links' : 'light-links'}`} onClick={closeMobileMenu}>
                {item.title}
                {item.hasSubmenu && <FontAwesomeIcon icon={faChevronDown} className='submenu-arrow' />}
              </Link>
              {item.hasSubmenu && activeSubmenu === index && (
                <div className='nav-submenu'>
                  {item.submenuColumns.map((column, colIndex) => (
                    <ul key={colIndex} className='nav-submenu-column'>
                      {column.map((subitem, subindex) => (
                        <li key={subindex} className='nav-submenu-item'>
                          <Link to={subitem.path} className='nav-submenu-links' onClick={closeMobileMenu}>
                            {subitem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className='navbar-actions'>
          <Link to='/contacto' className='btn-mobile'>
            <button className={`btn btn--primary btn--medium ${scrolled ? 'scrolled-btn' : ''}`}>
              AGENDA UNA CITA
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;