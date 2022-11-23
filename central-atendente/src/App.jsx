import {BrowserRouter, Routes, Route} from 'react-router-dom'

import { Menu } from "./Components/Menu/Menu";
import { AtendimentoChamado } from "./Tamplates/Atendente/AtendimentoChamado/AtendimentoChamado";
import {AtendentePrincipal} from './Tamplates/Atendente/Principal/AtendentePrincipal'
import {SegundaTela} from './Tamplates/Atendente/SegundaTela/SegundaTela'

export const App = ()=> {
  return (
      <BrowserRouter>
      <Menu />
        <Routes>
          <Route path='/' element={<AtendentePrincipal />} />
          <Route path='/atendimentos' element={<SegundaTela />} />
          <Route path='/chamados' element={<AtendimentoChamado />} />
        </Routes>
      </BrowserRouter>
    );
}

{/* <> */}
    //   
    //   <AbrirChamado />
    //   {/* <AtendimentoChamado /> */}
    // </>