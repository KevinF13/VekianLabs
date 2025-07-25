// frontend/src/pages/MercadosCapitalPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './MercadosCapitalPage.css'; // Importa los estilos de la página

function MercadosCapitalPage() {
  return (
    <div className='mercados-capital-page'>
      {/* Sección Hero de la página Mercados de Capital */}
      <section className='mercados-capital-hero-section'>
        <div className='mercados-capital-hero-overlay'>
          <h1>Soluciones para Mercados de Capital</h1>
          <p>Potenciando la agilidad y la toma de decisiones estratégicas en el sector financiero.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='mercados-capital-content-section'>
        <div className='content-container'>
          <h2>Transformación y Eficiencia en Mercados de Capital</h2>
          <p>
            En Vekian Labs, entendemos la naturaleza dinámica y de alta presión de los mercados de capital.
            Ofrecemos soluciones tecnológicas avanzadas diseñadas para mejorar la velocidad de las operaciones,
            la gestión de riesgos y la experiencia del cliente en este sector.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para análisis de trading,
            gestión de portafolios y cumplimiento regulatorio. Desarrollamos **software especializado** para plataformas de trading,
            sistemas de gestión de activos, automatización de back-office y herramientas de análisis de datos en tiempo real.
            Además, proporcionamos expertise en la integración y optimización de **hardware de alto rendimiento**
            necesario para operaciones de trading de baja latencia y procesamiento masivo de datos.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Plataformas de Trading y Corretaje</li>
            <li>Gestión de Portafolios y Activos</li>
            <li>Análisis de Riesgos y Cumplimiento Normativo</li>
            <li>Automatización de Procesos de Back-Office</li>
            <li>Business Intelligence para Decisiones Financieras</li>
            <li>Infraestructura de Software y Hardware de Alta Frecuencia</li>
          </ul>
          <p>
            Colaboramos con bancos de inversión, gestores de fondos y firmas de corretaje para construir
            sistemas robustos y escalables que les permitan operar con mayor eficiencia y competitividad en los mercados globales.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MercadosCapitalPage;
