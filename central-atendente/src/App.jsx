import { AtendentePrincipal } from "./Tamplates/Atendente/Principal/AtendentePrincipal";
import { SideBarAtendente } from "./Components/sideBarAtendente/sideBarAtendente";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SegundaTela } from "./Tamplates/Atendente/SegundaTela/SegundaTela";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SegundaTela />} />
          <Route path='/Atendimentos' element={<AtendentePrincipal />} />
        </Routes>
      </BrowserRouter>
    <SideBarAtendente />
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