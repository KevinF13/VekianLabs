// frontend/src/components/ServiceCard.js
import React from 'react';
import './ServiceCard.css'; // Crearemos este CSS

function ServiceCard({ service }) {
  // Asegúrate de que `service` tenga `imagen` si la usas
  const imageUrl = service.imagen ? `http://localhost:8000${service.imagen}` : '/placeholder-service.jpg'; // URL completa para la imagen desde Django

  return (
    <div className='service-card'>
      <img src={imageUrl} alt={service.nombre} className='service-card-img' />
      <div className='service-card-info'>
        <h3 className='service-card-title'>{service.nombre}</h3>
        <p className='service-card-description'>{service.descripcion}</p>
        {service.precio && <p className='service-card-price'>Precio desde: ${service.precio}</p>}
        {/* Puedes añadir un botón para ver más detalles o contactar */}
        <button className='btn btn--primary btn--small'>Ver Más</button>
      </div>
    </div>
  );
}

export default ServiceCard;