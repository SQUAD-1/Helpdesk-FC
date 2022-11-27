import { Cliente } from "./Templates/Atendente/Cliente/Cliente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TelaInicialAtendente } from "./Templates/Atendente/TelaInicialAtendente/TelaInicialAtendente";
import { Login } from "./Components/Login/Login";
import { TelaAtendimento } from "./Templates/Atendente/TelaAtendimento/TelaAtendimento";
import { Consulta } from "./Templates/Consulta/Consulta";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/TelaInicial" element={<TelaInicialAtendente />} />
          <Route path="/Cliente" element={<Cliente />} />
          <Route path="/Consulta" element={<Consulta />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}