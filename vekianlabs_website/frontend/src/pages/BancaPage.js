// frontend/src/pages/BancaPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './BancaPage.css'; // Importa los estilos de la página

function BancaPage() {
  return (
    <div className='banca-page'>
      {/* Sección Hero de la página Banca */}
      <section className='banca-hero-section'>
        <div className='banca-hero-overlay'>
          <h1>Soluciones para la Industria Bancaria</h1>
          <p>Potenciando la transformación digital y la seguridad en el sector financiero con tecnología avanzada.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='banca-content-section'>
        <div className='content-container'>
          <h2>Innovación y Seguridad en Banca</h2>
          <p>
            En Vekian Labs, comprendemos la complejidad y la necesidad de innovación constante en la industria bancaria.
            Ofrecemos soluciones tecnológicas que no solo mejoran la eficiencia operativa, sino que también fortalecen la seguridad
            y optimizan la experiencia del cliente en un entorno regulado y competitivo.
          </p>
          <p>
            **Podemos implementar soluciones de Business Intelligence (BI)** para análisis de datos financieros, detección de fraude y optimización de carteras.
            Además, desarrollamos **software a medida** para banca digital, gestión de riesgos, cumplimiento normativo y automatización de procesos.
            También ofrecemos expertise en la integración y optimización de **hardware especializado** para sucursales bancarias, cajeros automáticos y centros de datos.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Banca Digital y Móvil</li>
            <li>Sistemas de Gestión de Riesgos y Cumplimiento (AML, KYC)</li>
            <li>Business Intelligence y Análisis Predictivo</li>
            <li>Automatización de Procesos Robóticos (RPA) para Operaciones Bancarias</li>
            <li>Ciberseguridad Financiera y Protección de Datos</li>
            <li>Infraestructura de Software y Hardware para Banca</li>
          </ul>
          <p>
            Nuestros equipos trabajan para ofrecer soluciones robustas y escalables que permitan a las instituciones bancarias
            adaptarse rápidamente a las nuevas tendencias del mercado y a las demandas de los clientes, manteniendo siempre la integridad y la confianza.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BancaPage;
