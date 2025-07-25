// frontend/src/pages/SegurosPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './SegurosPage.css'; // Importa los estilos de la página

function SegurosPage() {
  return (
    <div className='seguros-page'>
      {/* Sección Hero de la página Seguros */}
      <section className='seguros-hero-section'>
        <div className='seguros-hero-overlay'>
          <h1>Soluciones para la Industria de Seguros</h1>
          <p>Modernizando operaciones y mejorando la experiencia del cliente en el sector asegurador.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='seguros-content-section'>
        <div className='content-container'>
          <h2>Innovación y Eficiencia en Seguros</h2>
          <p>
            En Vekian Labs, entendemos la necesidad de agilidad y precisión en la industria de seguros.
            Ofrecemos soluciones tecnológicas que optimizan la gestión de pólizas, la evaluación de riesgos
            y la interacción con el cliente, impulsando la eficiencia y la rentabilidad.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para análisis de siniestros,
            segmentación de clientes, evaluación de riesgos y optimización de productos.
            Desarrollamos **software a medida** para plataformas de gestión de pólizas, automatización de reclamaciones,
            portales de clientes y sistemas de suscripción.
            Además, proporcionamos expertise en la integración y optimización de **hardware** para la captura de datos,
            la gestión documental y la infraestructura de centros de contacto.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Gestión de Pólizas y Clientes</li>
            <li>Automatización de Reclamaciones y Siniestros</li>
            <li>Análisis de Riesgos y Fraude (BI)</li>
            <li>Portales de Cliente y Experiencia Digital</li>
            <li>Sistemas de Suscripción y Precios Dinámicos</li>
            <li>Integración de Software y Hardware para Operaciones de Seguros</li>
          </ul>
          <p>
            Colaboramos con aseguradoras para construir sistemas robustos y flexibles que les permitan
            responder a las demandas del mercado, mejorar la eficiencia operativa y ofrecer un servicio excepcional.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SegurosPage;
