import { AtendentePrincipal } from "./Templates/Atendente/Principal/AtendentePrincipal";
import { SideBarAtendente } from "./Components/sideBarAtendente/sideBarAtendente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SegundaTela } from "./Templates/Atendente/TelaInicialAtendimento/TelaInicialAtendente";
import { Login } from "./Components/Login/Login";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/TelaInicialAtendente' element={<SegundaTela />} />
          <Route path='/Atendimentos' element={<AtendentePrincipal />} />
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