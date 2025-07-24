// frontend/src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            VEKIANLABS
            {/* Si tienes un logo de imagen, puedes usarlo aquí: */}
            {/* <img src="/logo-vekianlabs.png" alt="Vekianlabs Logo" className="logo-img" /> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <FontAwesomeIcon icon={click ? faTimes : faBars} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/servicios' className='nav-links' onClick={closeMobileMenu}>
                Servicios
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/proyectos' className='nav-links' onClick={closeMobileMenu}>
                Proyectos
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contacto' className='nav-links' onClick={closeMobileMenu}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;