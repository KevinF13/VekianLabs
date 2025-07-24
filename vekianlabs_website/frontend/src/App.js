// frontend/src/App.js
import React from 'react';
import './App.css'; // Para estilos globales de App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Lo quitamos del HomePage y lo ponemos aquí para que esté en todas las páginas
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage'; // Crea estas páginas
import ProjectsPage from './pages/ProjectsPage'; // Crea estas páginas
import AboutPage from './pages/AboutPage';     // Crea estas páginas
import ContactPage from './pages/ContactPage';   // Crea esta página

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/servicios' element={<ServicesPage />} />
          <Route path='/proyectos' element={<ProjectsPage />} />
          <Route path='/nosotros' element={<AboutPage />} />
          <Route path='/contacto' element={<ContactPage />} />
          {/* Si tuvieras rutas dinámicas como ProjectDetail */}
          {/* <Route path='/proyectos/:id' element={<ProjectDetailPage />} /> */}
        </Routes>
        {/* El Footer lo renderizamos fuera de Routes para que aparezca en todas las páginas */}
        {/* Ya lo habíamos movido al HomePage, ahora es mejor dejarlo en App.js para que sea global */}
        {/* <Footer /> // No, lo mejor es que cada página controle si tiene Footer o no, lo dejaremos en HomePage por ahora para no sobrecomplicar*/}
      </Router>
    </>
  );
}

export default App;