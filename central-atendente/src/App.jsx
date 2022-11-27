import { Cliente } from "./Templates/Atendente/Cliente/Cliente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TelaInicialAtendente } from "./Templates/Atendente/TelaInicialAtendente/TelaInicialAtendente";
import { Login } from "./Components/Login/Login";
import { Consulta } from "./Components/Consulta/Consulta";
import { ListaChamados } from "../src/Components/Chamados/ListaChamados";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/TelaInicial" element={<TelaInicialAtendente />} />
          <Route path="/Cliente" element={<Cliente />} />
          <Route path="/Consulta" element={<Consulta />} />
          <Route path="/Chamados" element={<ListaChamados />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}