// frontend/src/pages/HomePage.js
import React from 'react';
import '../App.css'; // Asegúrate de que este archivo exista y esté en la raíz de src
import HeroSection from '../components/HeroSection';
import LogoCarousel from '../components/LogoCarousel';
import ServicesSection from '../components/ServicesSection'; // Importa la nueva sección de servicios
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <HeroSection />
      <LogoCarousel />
      <ServicesSection /> {/* Aquí se inserta la sección de Nuestros Servicios */}
      <Footer />
    </>
  );
}

export default HomePage;
