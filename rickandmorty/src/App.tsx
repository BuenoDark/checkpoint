
import {Routes, Route} from "react-router-dom";
import './App.css';
import Inicio from "./pages/inicio.pagina";
import Favoritos from "./pages/favoritos.pagina";
import Detalhes from "./pages/detalhes.pagina";
import Cabecalho from "./componentes/layout/cabecalho.componente";


export default function App(){
  return (

        <div className="App">
          <Cabecalho />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="favoritos" element={<Favoritos />} />
            <Route path="detalhe" element={<Detalhes />} />
          </Routes>
        </div>
   
  )
}

