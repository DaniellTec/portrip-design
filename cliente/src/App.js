
import './App.css';
import ListaUsuario from './ListaUsuario';
import AgregarUsuario from './AgregarUsuario';
import EditarUsuario from './EditarUsuario';
import HacerPedido from './HacerPedido';


import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
           <a className="navbar-brand" href="/">BATMAN PARTE PIERNAS</a>
           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
           </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="agregarusuario">Agregar Usuario</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="HacerPedido">Hacer pedido</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="apiMap">Calcular distancia</a>
            </li>
           </ul>
         </div>
       </div>
     </nav>
      <BrowserRouter>
        <Routes>
           <Route path='/' element={<ListaUsuario/>} exact></Route>
           <Route path='/AgregarUsuario' element={<AgregarUsuario/>} exact></Route>
           <Route path='/HacerPedido' element={<HacerPedido/>} exact></Route>
           <Route path='/EditarUsuario/:idusuario' element={<EditarUsuario/>} exact></Route>
           <Route path='/apiMap' element={<apiMap/>} exact></Route>
         </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
