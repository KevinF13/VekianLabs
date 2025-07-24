// frontend/src/pages/ServicesPage.js
import React from 'react';
import Footer from '../components/Footer'; // Importa el Footer si lo quieres aquí

function ServicesPage() {
  return (
    <div style={{ padding: '100px 20px', textAlign: 'center' }}>
      <h1>Nuestros Servicios</h1>
      <p>Aquí irá el contenido detallado de nuestros servicios.</p>
      <Footer /> {/* Si quieres el footer en esta página */}
    </div>
  );
}

export default ServicesPage;