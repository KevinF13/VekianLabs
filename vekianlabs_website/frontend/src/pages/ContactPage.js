// frontend/src/pages/ContactPage.js
import React from 'react';
import { InlineWidget } from 'react-calendly'; // Para el widget de Calendly
import './ContactPage.css'; // Crearemos este CSS

function ContactPage() {
  return (
    <div className='page-container contact-page'>
      <h1>Contáctanos y Agenda una Cita</h1>
      <p>Estamos ansiosos por escucharte y discutir tu próximo proyecto.</p>

      <div className="contact-form-section">
        <h2>Envíanos un Mensaje</h2>
        {/* Aquí irá tu formulario de contacto de React */}
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre Completo</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Tu Mensaje</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="btn btn--primary">Enviar Mensaje</button>
        </form>
      </div>

      <div className="calendly-section">
        <h2>Agenda una Reunión Rápida</h2>
        <p>Usa nuestro calendario para reservar un espacio que te convenga.</p>
        <InlineWidget url="https://calendly.com/tu-nombre-de-usuario/30min" />
        {/* !IMPORTANTE!: Reemplaza "https://calendly.com/tu-nombre-de-usuario/30min"
            con la URL de tu propio evento de Calendly. */}
      </div>

      <div className="contact-info">
        <h2>Información de Contacto Adicional</h2>
        <p>Email: info@vekianlabs.com</p>
        <p>Teléfono: +593 987 654 321</p>
        <p>Dirección: Tu Dirección de Oficina, Quito, Ecuador</p>
      </div>
    </div>
  );
}

export default ContactPage;