// frontend/src/pages/MediosPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './MediosPage.css'; // Importa los estilos de la página

function MediosPage() {
  return (
    <div className='medios-page'>
      {/* Sección Hero de la página Medios */}
      <section className='medios-hero-section'>
        <div className='medios-hero-overlay'>
          <h1>Soluciones para la Industria de Medios</h1>
          <p>Potenciando la creación, distribución y monetización de contenido en la era digital.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='medios-content-section'>
        <div className='content-container'>
          <h2>Innovación y Contenido en la Industria de Medios</h2>
          <p>
            En Vekian Labs, entendemos que la industria de medios está experimentando una transformación sin precedentes,
            impulsada por la digitalización, el consumo bajo demanda y la personalización.
            Ofrecemos soluciones tecnológicas que ayudan a las empresas a crear, gestionar y distribuir contenido
            de manera más eficiente y atractiva.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para el análisis de audiencias,
            tendencias de consumo, optimización de ingresos por publicidad y gestión de derechos de contenido.
            Desarrollamos **software a medida** para plataformas de streaming, sistemas de gestión de activos digitales (DAM),
            herramientas de edición colaborativa y soluciones de personalización de contenido.
            Además, proporcionamos expertise en la integración y optimización de **hardware** para estudios de producción,
            servidores de streaming y dispositivos de reproducción de medios.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Plataformas de Streaming y Distribución de Contenido</li>
            <li>Gestión de Activos Digitales (DAM)</li>
            <li>Análisis de Audiencias y Monetización (BI)</li>
            <li>Herramientas de Producción y Edición de Contenido</li>
            <li>Personalización y Recomendación de Contenido</li>
            <li>Integración de Software y Hardware para Medios</li>
          </ul>
          <p>
            Colaboramos con cadenas de televisión, estudios de cine, editoriales y empresas de publicidad
            para construir sistemas que les permitan innovar en la forma en que el contenido es creado,
            entregado y consumido, maximizando su impacto y rentabilidad.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MediosPage;
