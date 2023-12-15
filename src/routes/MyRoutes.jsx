import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page404 from "../pages/Page404";
import Home from '../pages/Home';
import Dashbord from '../pages/Dashbord';
import Notificacoes from '../pages/BarraMenu/Notificacoes';
import Ajustes from '../pages/BarraMenu/Ajustes';
import Auteticacao from '../pages/auteticacao';
import Pedidos from "../pages/BarraMenu/pedidos";
import Perfil from "../pages/BarraMenu/Perfil";

export default function MyRoutes() {
  return (
      <Routes>
          <Route path='/*' element={<Page404 />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/dashboard' element={<Dashbord />}/>
          <Route path='/notificacoes' element={<Notificacoes />}/>
          <Route path='/pedidos' element={<Pedidos />}/>
          <Route path='/perfil' element={<Perfil />}/>
          <Route path='/ajustes' element={<Ajustes />}/>
          <Route path='/autenticacao' element={<Auteticacao />}/>
      </Routes>
  )
}
