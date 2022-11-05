import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SegundaTela } from "./Tamplates/Atendente/SegundaTela/SegundaTela";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={< SegundaTela/>}/>
        <Route path="/cliente" element={< AtendentePrincipal/>}/>
      </Routes>
    </BrowserRouter>
  );
}

{/* <BarraLateral>
    <Route path="/" element={< SegundaTela/>}/>
    <Route path="/cliente" element={< AtendentePrincipal/>}/>
</BarraLateral> */}