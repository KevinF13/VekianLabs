// frontend/src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AutomotrizPage from './pages/AutomotrizPage'; // Importa la nueva página
import BancaPage from './pages/BancaPage';
import MercadosCapitalPage from './pages/MercadosCapitalPage';
import BienesConsumoPage from './pages/BienesConsumoPage';
import EnergiaPage from './pages/EnergiaPage';
import SaludCienciasPage from './pages/SaludCienciasPage';
import SegurosPage from './pages/SegurosPage';
import ManufacturaPage from './pages/ManufacturaPage';
import MediosPage from './pages/MediosPage';
import TecnologiaPage from './pages/TecnologiaPage';
import PetroleoGasPage from './pages/PetroleoGasPage';
import RetailPage from './pages/RetailPage';

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
          {/* Nueva ruta para la página de Automotriz */}
          <Route path='/industrias/automotriz' element={<AutomotrizPage />} />
          <Route path='/industrias/banca' element={<BancaPage />} />
          <Route path='/industrias/mercados-capital' element={<MercadosCapitalPage />} />
          <Route path='/industrias/bienes-consumo' element={<BienesConsumoPage/>} />
          <Route path='/industrias/energia' element={<EnergiaPage/>} />
          <Route path='/industrias/salud' element={<SaludCienciasPage/>} />
          <Route path='/industrias/seguros' element={<SegurosPage/>} />
          <Route path='/industrias/manufactura' element={<ManufacturaPage/>} />
          <Route path='/industrias/medios' element={<MediosPage/>} />
          <Route path='/industrias/tecnologia' element={<TecnologiaPage/>} />
          <Route path='/industrias/petroleo' element={<PetroleoGasPage/>} />
          <Route path='/industrias/retail' element={<RetailPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
