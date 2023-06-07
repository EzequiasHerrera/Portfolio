import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Secciones from './components/Secciones/Secciones';
import AcercaDeMi from './views/AcercaDeMi/AcercaDeMi';
import Contacto from './views/Contacto/Contacto';
import Proyectos from './views/Proyectos/Proyectos';
import ProyectosAnimacion from './views/ProyectosAnimacion/ProyectosAnimacion';
import SeleccionProyectos from './components/SeleccionProyectos/SeleccionProyectos';
import Inicio from './views/Inicio/inicio';

function App() {
  return (
    <Router>
      <Header />
      <Secciones />
      <Routes>
        <Route path="/*" element={<Navigate to="/Portfolio/home" />} />
        <Route path="/Portfolio/home" element={<Inicio />} />
        <Route path="/Portfolio/acerca-de-mi" element={<AcercaDeMi />} />
        <Route path="/Portfolio/contacto" element={<Contacto />} />
        <Route path="/Portfolio/proyectos/animacion" element={<><SeleccionProyectos /><ProyectosAnimacion /></>} />
        <Route path="/Portfolio/proyectos/programacion" element={<><SeleccionProyectos /><Proyectos /></>} />
      </Routes>
    </Router>
  );
}

export default App;
