// frontend/src/pages/EnergiaPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './EnergiaPage.css'; // Importa los estilos de la página

function EnergiaPage() {
  return (
    <div className='energia-page'>
      {/* Sección Hero de la página Energía */}
      <section className='energia-hero-section'>
        <div className='energia-hero-overlay'>
          <h1>Soluciones para la Industria Energética</h1>
          <p>Impulsando la eficiencia, la sostenibilidad y la innovación en el sector de la energía.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='energia-content-section'>
        <div className='content-container'>
          <h2>Optimización y Sostenibilidad Energética</h2>
          <p>
            En Vekian Labs, reconocemos la importancia crítica de la industria energética y la necesidad de soluciones
            innovadoras para enfrentar los desafíos actuales y futuros, desde la producción hasta la distribución y el consumo.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para la optimización de la red,
            la gestión de la demanda, el análisis de rendimiento de activos y la previsión de consumo.
            Desarrollamos **software a medida** para la gestión de plantas de energía, sistemas de monitoreo SCADA,
            plataformas de trading de energía y soluciones para energías renovables.
            Además, proporcionamos expertise en la integración y optimización de **hardware especializado**
            para infraestructuras críticas, sistemas de control y dispositivos inteligentes en la red.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Gestión Inteligente de Redes (Smart Grids)</li>
            <li>Optimización de la Producción y Distribución de Energía</li>
            <li>Soluciones para Energías Renovables (Solar, Eólica, Hidroeléctrica)</li>
            <li>Business Intelligence para la Eficiencia Energética</li>
            <li>Ciberseguridad en Infraestructuras Críticas</li>
            <li>Integración de Software y Hardware Industrial</li>
          </ul>
          <p>
            Trabajamos con empresas de servicios públicos, productores de energía y desarrolladores de proyectos
            para construir sistemas resilientes y eficientes que aseguren un suministro energético confiable y sostenible.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EnergiaPage;
