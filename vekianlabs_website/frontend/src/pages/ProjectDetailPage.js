// frontend/src/pages/ProjectDetailPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectDetailPage.css'; // Crearemos este CSS

function ProjectDetailPage() {
  let { id } = useParams(); // Obtener el ID del proyecto de la URL

  return (
    <div className='page-container project-detail-page'>
      <h1>Detalle del Proyecto {id}</h1>
      <p>Aquí se mostrarán los detalles específicos del proyecto con ID: {id}.</p>
      {/* En el futuro, harías una llamada a la API de Django para obtener los datos de este proyecto */}
    </div>
  );
}

export default ProjectDetailPage;