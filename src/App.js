import './App.scss';
import {NavBar} from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { InicioContainer } from './components/InicioContainer/InicioContainer';
import { Footer } from './components/Footer/Footer';
import { ProyectosListContainer } from './components/ProyectosListContainer/ProyectosListContainer';
import { Contacto } from './components/Contacto/Contacto';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar/>
          <Routes>
            <Route path='/' element={<InicioContainer/>} /> 
            <Route path="/proyectos" element={<ProyectosListContainer/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
