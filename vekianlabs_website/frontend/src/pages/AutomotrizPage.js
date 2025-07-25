// frontend/src/pages/AutomotrizPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './AutomotrizPage.css'; // Importa los estilos de la página

function AutomotrizPage() {
  return (
    <div className='automotriz-page'>
      {/* Sección Hero de la página Automotriz */}
      <section className='automotriz-hero-section'>
        <div className='automotriz-hero-overlay'>
          <h1>Soluciones para la Industria Automotriz</h1>
          <p>Impulsando la innovación y la eficiencia en el sector automotriz con tecnología de vanguardia.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='automotriz-content-section'>
        <div className='content-container'>
          <h2>Transformación Digital en Automoción</h2>
          <p>
            En Vekian Labs, entendemos los desafíos y oportunidades únicos que enfrenta la industria automotriz en la era digital.
            Nuestras soluciones están diseñadas para optimizar la cadena de valor, desde el diseño y la fabricación hasta la experiencia del cliente y los servicios conectados.
            Trabajamos con fabricantes, proveedores y empresas de movilidad para desarrollar software innovador que impulse el futuro del transporte.
          </p>
          <p>
            Nuestros servicios incluyen el desarrollo de sistemas de infoentretenimiento, plataformas de vehículos conectados, soluciones de conducción autónoma,
            optimización de la producción con IA, gestión de flotas y experiencias de usuario avanzadas para vehículos eléctricos y autónomos.
            Nos enfocamos en la seguridad, la escalabilidad y la integración perfecta con los ecosistemas existentes.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Vehículos Conectados e Infoentretenimiento</li>
            <li>Sistemas de Asistencia Avanzada al Conductor (ADAS) y Conducción Autónoma</li>
            <li>Optimización de la Fabricación y la Cadena de Suministro (Industria 4.0)</li>
            <li>Electrificación y Gestión de Baterías</li>
            <li>Experiencia Digital del Cliente y Venta al por Menor Automotriz</li>
            <li>Ciberseguridad Automotriz</li>
          </ul>
          <p>
            Colaboramos estrechamente con nuestros clientes para ofrecer soluciones personalizadas que no solo cumplan con las expectativas actuales,
            sino que también anticipen las necesidades futuras de una industria en constante evolución.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AutomotrizPage;
