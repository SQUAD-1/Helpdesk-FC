import { Menu } from "./Components/Menu/Menu";
import { AtendentePrincipal } from "./Tamplates/Atendente/Principal/AtendentePrincipal";
import {SideBarAtendente} from "./Components/sideBarAtendente/sideBarAtendente";

export const App = () => {
  return (
      <> 

        <Menu />
        <AtendentePrincipal />
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