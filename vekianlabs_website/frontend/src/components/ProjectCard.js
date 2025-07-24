// frontend/src/components/ProjectCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css'; // Crearemos este CSS

function ProjectCard({ project }) {
  const imageUrl = project.imagen ? `http://localhost:8000${project.imagen}` : '/placeholder-project.jpg'; // URL completa

  return (
    <div className='project-card'>
      <img src={imageUrl} alt={project.nombre} className='project-card-img' />
      <div className='project-card-info'>
        <h3 className='project-card-title'>{project.nombre}</h3>
        <p className='project-card-description'>{project.descripcion_corta}</p>
        <Link to={`/proyectos/${project.id}`} className='btn-mobile'>
          <button className='btn btn--outline btn--small'>Ver Detalles</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;