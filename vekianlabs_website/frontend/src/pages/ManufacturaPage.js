// frontend/src/pages/ManufacturaPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './ManufacturaPage.css'; // Importa los estilos de la página

function ManufacturaPage() {
  return (
    <div className='manufactura-page'>
      {/* Sección Hero de la página Manufactura */}
      <section className='manufactura-hero-section'>
        <div className='manufactura-hero-overlay'>
          <h1>Soluciones para la Industria Manufacturera</h1>
          <p>Optimizando la producción y la cadena de suministro con tecnología inteligente.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='manufactura-content-section'>
        <div className='content-container'>
          <h2>Revolucionando la Manufactura con Tecnología</h2>
          <p>
            En Vekian Labs, entendemos que la industria manufacturera está en constante evolución,
            enfrentando desafíos como la optimización de procesos, la gestión de la cadena de suministro
            y la adopción de la Industria 4.0. Ofrecemos soluciones tecnológicas que impulsan la eficiencia
            y la innovación.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para el análisis
            de la eficiencia de la producción, la calidad, la gestión de inventarios y la previsión de la demanda.
            Desarrollamos **software a medida** para sistemas de ejecución de manufactura (MES),
            planificación de recursos empresariales (ERP), automatización de fábricas y mantenimiento predictivo.
            Además, proporcionamos expertise en la integración y optimización de **hardware especializado**
            para líneas de producción, robótica industrial y sensores inteligentes.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Automatización Industrial y Robótica</li>
            <li>Optimización de la Cadena de Suministro y Logística</li>
            <li>Sistemas de Ejecución de Manufactura (MES)</li>
            <li>Business Intelligence para la Eficiencia de Producción</li>
            <li>Mantenimiento Predictivo con IA</li>
            <li>Integración de Software y Hardware en Fábricas Inteligentes</li>
          </ul>
          <p>
            Colaboramos con fabricantes para construir sistemas que no solo mejoren la productividad,
            sino que también permitan una mayor flexibilidad y capacidad de adaptación a las nuevas
            demandas del mercado global.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ManufacturaPage;
