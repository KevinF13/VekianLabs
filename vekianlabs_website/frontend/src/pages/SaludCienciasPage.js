// frontend/src/pages/SaludCienciasPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer
import './SaludCienciasPage.css'; // Importa los estilos de la página

function SaludCienciasPage() {
  return (
    <div className='salud-ciencias-page'>
      {/* Sección Hero de la página Salud y Ciencias */}
      <section className='salud-ciencias-hero-section'>
        <div className='salud-ciencias-hero-overlay'>
          <h1>Soluciones para Salud y Ciencias de la Vida</h1>
          <p>Innovando en la atención al paciente, investigación y gestión de datos en el sector de la salud.</p>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className='salud-ciencias-content-section'>
        <div className='content-container'>
          <h2>Transformación Digital en Salud y Ciencias de la Vida</h2>
          <p>
            En Vekian Labs, estamos comprometidos con la mejora de la atención médica y la aceleración de la investigación
            en el sector de Salud y Ciencias de la Vida. Ofrecemos soluciones tecnológicas que abordan los desafíos
            de la gestión de datos, la eficiencia operativa y la experiencia del paciente.
          </p>
          <p>
            Nuestra experiencia incluye la implementación de **Business Intelligence (BI)** para análisis de datos clínicos,
            gestión de poblaciones, optimización de recursos hospitalarios y seguimiento de ensayos clínicos.
            Desarrollamos **software a medida** para sistemas de gestión de información de salud (HIS),
            registros electrónicos de salud (EHR), telemedicina y plataformas de investigación.
            Además, proporcionamos expertise en la integración y optimización de **hardware especializado**
            para dispositivos médicos, laboratorios y centros de diagnóstico.
          </p>
          <h3>Nuestras Áreas de Expertise:</h3>
          <ul>
            <li>Sistemas de Información Hospitalaria y Registros Electrónicos de Salud (EHR)</li>
            <li>Telemedicina y Salud Digital</li>
            <li>Análisis de Datos Clínicos y Gestión de Poblaciones (BI)</li>
            <li>Optimización de Procesos y Gestión de Recursos</li>
            <li>Sistemas de Soporte a la Decisión Clínica</li>
            <li>Integración de Dispositivos Médicos y Hardware de Laboratorio</li>
          </ul>
          <p>
            Colaboramos con hospitales, clínicas, laboratorios farmacéuticos y centros de investigación
            para construir soluciones que mejoren la calidad de la atención, impulsen la innovación
            y aseguren el cumplimiento normativo.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default SaludCienciasPage;
