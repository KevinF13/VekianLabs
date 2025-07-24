// frontend/src/pages/HomePage.js
import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import LogoCarousel from '../components/LogoCarousel'; // Importa el nuevo componente
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCarousel /> {/* Añade el carrusel aquí */}
      {/* Aquí podrías añadir otras secciones de la página de inicio */}
      <Footer />
    </>
  );
}

export default HomePage;