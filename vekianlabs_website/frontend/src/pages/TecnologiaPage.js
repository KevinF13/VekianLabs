// frontend/src/pages/TecnologiaPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './TecnologiaPage.css'; // Importa los estilos de la página

function TecnologiaPage() {
  return (
    <div className='tecnologia-page'>
      {/* Sección Hero de la página Tecnología */}
      <section className='tecnologia-hero-section'>
        <div className='tecnologia-hero-overlay'>
          <h1>Soluciones para la Industria de Tecnología</h1>
          <p>Impulsando la innovación y el desarrollo de vanguardia en el ecosistema tecnológico.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='tecnologia-content-section'>
        <div className='content-container'>
          <h2>Liderando la Transformación Tecnológica</h2>
          <p>
            En Vekian Labs, estamos a la vanguardia de la innovación tecnológica, ofreciendo soluciones que
            permiten a las empresas de tecnología desarrollar productos y servicios disruptivos.
            Ayudamos a nuestros clientes a navegar por el complejo panorama digital y a capitalizar las nuevas oportunidades.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para el análisis de mercado,
            optimización de productos, gestión de proyectos de I+D y análisis de rendimiento de infraestructura.
            Desarrollamos **software a medida** para aplicaciones empresariales, plataformas de desarrollo,
            soluciones de ciberseguridad y sistemas de inteligencia artificial/machine learning.
            Además, proporcionamos expertise en la integración y optimización de **hardware** para centros de datos,
            dispositivos IoT y sistemas de computación de alto rendimiento.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Desarrollo de Software a Medida y Plataformas</li>
            <li>Inteligencia Artificial y Machine Learning</li>
            <li>Ciberseguridad y Protección de Datos</li>
            <li>Computación en la Nube y DevOps</li>
            <li>Business Intelligence para la Innovación Tecnológica</li>
            <li>Integración de Software y Hardware de Última Generación</li>
          </ul>
          <p>
            Colaboramos con startups, empresas de software, proveedores de servicios en la nube y fabricantes de hardware
            para construir el futuro de la tecnología, asegurando escalabilidad, rendimiento y seguridad.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default TecnologiaPage;
