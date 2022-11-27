import { Cliente } from "./Templates/Atendente/Cliente/Cliente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SegundaTela } from "./Templates/Atendente/TelaInicialAtendente/TelaInicialAtendente";
import { Login } from "./Components/Login/Login";
import { TelaAtendimento } from "./Templates/Atendente/TelaAtendimento/TelaAtendimento";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/TelaInicialAtendente' element={<SegundaTela />} />
          <Route path='/Atendimentos' element={<Cliente />} />
        </Routes>
      </BrowserRouter>*
    </>
  );
}