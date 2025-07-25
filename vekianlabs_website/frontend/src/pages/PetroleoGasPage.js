// frontend/src/pages/PetroleoGasPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './PetroleoGasPage.css'; // Importa los estilos de la página

function PetroleoGasPage() {
  return (
    <div className='petroleo-gas-page'>
      {/* Sección Hero de la página Petróleo y Gas */}
      <section className='petroleo-gas-hero-section'>
        <div className='petroleo-gas-hero-overlay'>
          <h1>Soluciones para la Industria de Petróleo y Gas</h1>
          <p>Optimizando operaciones y maximizando el rendimiento en el sector energético.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='petroleo-gas-content-section'>
        <div className='content-container'>
          <h2>Eficiencia y Seguridad en Petróleo y Gas</h2>
          <p>
            En Vekian Labs, entendemos los desafíos complejos y la necesidad de eficiencia en la industria de petróleo y gas,
            desde la exploración y producción hasta el transporte y la refinación. Ofrecemos soluciones tecnológicas que
            impulsan la productividad y la seguridad.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para el análisis de datos de perforación,
            optimización de la producción, gestión de activos y monitoreo de oleoductos.
            Desarrollamos **software a medida** para sistemas de gestión de operaciones, simulación de yacimientos,
            mantenimiento predictivo y gestión de la cadena de suministro.
            Además, proporcionamos expertise en la integración y optimización de **hardware especializado**
            para equipos de perforación, sensores remotos y sistemas de control industrial.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Optimización de la Exploración y Producción (Upstream)</li>
            <li>Gestión de la Cadena de Suministro y Logística (Midstream/Downstream)</li>
            <li>Mantenimiento Predictivo y Gestión de Activos (BI)</li>
            <li>Sistemas de Control y Automatización Industrial</li>
            <li>Ciberseguridad para Infraestructuras Críticas</li>
            <li>Integración de Software y Hardware en Operaciones de Campo</li>
          </ul>
          <p>
            Colaboramos con empresas de energía para construir sistemas robustos y escalables que les permitan
            operar de manera más segura, eficiente y rentable en un mercado global en constante cambio.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default PetroleoGasPage;
