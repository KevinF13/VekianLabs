// frontend/src/pages/RetailPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './RetailPage.css'; // Importa los estilos de la página

function RetailPage() {
  return (
    <div className='retail-page'>
      {/* Sección Hero de la página Retail */}
      <section className='retail-hero-section'>
        <div className='retail-hero-overlay'>
          <h1>Soluciones para la Industria Minorista (Retail)</h1>
          <p>Transformando la experiencia de compra y optimizando las operaciones para el éxito en el comercio.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='retail-content-section'>
        <div className='content-container'>
          <h2>Innovación y Experiencia del Cliente en Retail</h2>
          <p>
            En Vekian Labs, entendemos que el sector minorista está en constante evolución, impulsado por las expectativas
            cambiantes de los consumidores y la necesidad de una eficiencia operativa sin precedentes.
            Ofrecemos soluciones tecnológicas que ayudan a las empresas a prosperar en este entorno dinámico.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para el análisis de ventas,
            gestión de inventarios, personalización de ofertas y optimización de la cadena de suministro.
            Desarrollamos **software a medida** para plataformas de e-commerce, sistemas de punto de venta (POS),
            gestión de relaciones con el cliente (CRM) y soluciones de marketing omnicanal.
            Además, proporcionamos expertise en la integración y optimización de **hardware especializado**
            para tiendas inteligentes, kioscos interactivos y sistemas de logística de última milla.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>E-commerce y Plataformas Omnicanal</li>
            <li>Sistemas de Punto de Venta (POS) y Gestión de Inventarios</li>
            <li>Business Intelligence para Retail y Análisis de Consumidores</li>
            <li>Personalización de la Experiencia del Cliente</li>
            <li>Optimización de la Cadena de Suministro y Logística</li>
            <li>Integración de Software y Hardware para Tiendas Inteligentes</li>
          </ul>
          <p>
            Colaboramos con minoristas de todos los tamaños para construir soluciones que no solo mejoren la rentabilidad,
            sino que también creen experiencias de compra memorables y fidelicen a los clientes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RetailPage;
