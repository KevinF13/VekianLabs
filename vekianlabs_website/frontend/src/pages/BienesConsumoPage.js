// frontend/src/pages/BienesConsumoPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './BienesConsumoPage.css'; // Importa los estilos de la página

function BienesConsumoPage() {
  return (
    <div className='bienes-consumo-page'>
      {/* Sección Hero de la página Bienes de Consumo */}
      <section className='bienes-consumo-hero-section'>
        <div className='bienes-consumo-hero-overlay'>
          <h1>Soluciones para la Industria de Bienes de Consumo</h1>
          <p>Optimizando la cadena de valor y la experiencia del cliente en el sector de consumo masivo.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='bienes-consumo-content-section'>
        <div className='content-container'>
          <h2>Innovación y Eficiencia en Bienes de Consumo</h2>
          <p>
            En Vekian Labs, entendemos la naturaleza acelerada y las demandas del mercado de bienes de consumo.
            Ofrecemos soluciones tecnológicas que ayudan a las empresas a adaptarse rápidamente, mejorar la eficiencia
            y crear experiencias de cliente excepcionales.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para análisis de tendencias de consumo,
            gestión de inventarios y optimización de precios. Desarrollamos **software a medida** para la gestión de la cadena de suministro,
            plataformas de e-commerce, sistemas de fidelización de clientes y automatización de marketing.
            Además, proporcionamos expertise en la integración y optimización de **hardware** para puntos de venta,
            almacenes inteligentes y soluciones de logística.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Gestión de la Cadena de Suministro y Logística</li>
            <li>E-commerce y Experiencia Digital del Cliente</li>
            <li>Análisis de Consumidores y Tendencias del Mercado (BI)</li>
            <li>Automatización de Marketing y Ventas</li>
            <li>Sistemas de Punto de Venta (POS) y Gestión de Inventarios</li>
            <li>Integración de Software y Hardware para Operaciones Minoristas</li>
          </ul>
          <p>
            Colaboramos con fabricantes y minoristas para construir sistemas robustos y escalables que les permitan
            responder eficazmente a las demandas del mercado y mantener una ventaja competitiva.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BienesConsumoPage;
