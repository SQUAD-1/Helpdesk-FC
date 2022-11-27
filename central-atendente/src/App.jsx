import { Cliente } from "./Templates/Atendente/Cliente/Cliente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SegundaTela } from "./Templates/Atendente/TelaInicialAtendimento/TelaInicialAtendente";
import { Login } from "./Components/Login/Login";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/TelaInicialAtendente' element={<SegundaTela />} />
          <Route path='/Atendimentos' element={<Cliente />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// <BrowserRouter>
      // <Menu />
      //   <Routes>
      //     <Route path='/' element={<AtendentePrincipal />} />
      //     <Route path='/atendimentos' element={<SegundaTela />} />
      //     <Route path='/chamados' element={<AtendimentoChamado />} />
      //   </Routes>
      // </BrowserRouter>