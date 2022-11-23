import { Menu } from "./Components/Menu/Menu";
import { AtendentePrincipal } from "./Tamplates/Atendente/Principal/AtendentePrincipal";

export const App = () => {
  return (
      <> 

        <Menu />
        <AtendentePrincipal />

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