import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SegundaTela } from "./Tamplates/Atendente/SegundaTela/SegundaTela";
import {AtendentePrincipal} from './Tamplates/Atendente/Principal/AtendentePrincipal'
import { Chamado } from "./Tamplates/Atendente/Chamado/Chamado";

export default function App() {
  return (
    <>

        <Chamado />



    </>
  );
}

{/* <BarraLateral>
<Route path="/" element={< SegundaTela/>}/>
<Route path="/cliente" element={< AtendentePrincipal/>}/>
</BarraLateral> */}

{/* <BrowserRouter>
  <Routes>
    <Route path="/" element={< SegundaTela/>}/>
    <Route path="/cliente" element={< AtendentePrincipal/>}/>
  </Routes>
</BrowserRouter> */}