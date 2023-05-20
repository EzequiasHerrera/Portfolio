import './App.scss'
import Header from './components/Header/Header.jsx'
import Secciones from './components/Secciones/Secciones'
import AcercaDeMi from './views/AcercaDeMi/AcercaDeMi'
import Contacto from './views/Contacto/Contacto'
import Proyectos from './views/Proyectos/Proyectos'
import { Navigate, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Secciones />
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/acerca-de-mi" element={<AcercaDeMi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/proyectos" element={<Proyectos />} />
      </Routes>
    </>
  )
}

export default App
