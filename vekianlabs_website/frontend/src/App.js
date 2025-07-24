// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/proyectos/:id" element={<ProjectDetailPage />} />
        <Route path="/contacto" element={<ContactPage />} />
        {/* Puedes añadir más rutas aquí si es necesario */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;