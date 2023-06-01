import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Secciones from './components/Secciones/Secciones';
import AcercaDeMi from './views/AcercaDeMi/AcercaDeMi';
import Contacto from './views/Contacto/Contacto';
import Proyectos from './views/Proyectos/Proyectos';

function App() {
  return (
    <Router>
      <Header />
      <Secciones />
      <Routes>
        <Route path="/acerca-de-mi" element={<AcercaDeMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </Router>
  );
}

export default App;
