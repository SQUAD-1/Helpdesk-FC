import { Menu } from "./Components/Menu/Menu";
import { AbrirChamado } from "./Tamplates/Atendente/AbrirChamado/AbrirChamado";
import { AtendimentoChamado } from "./Tamplates/Atendente/AtendimentoChamado/AtendimentoChamado";

export const App = ()=> {
  return (
    <>
      <Menu />
      <AbrirChamado />
      {/* <AtendimentoChamado /> */}
    </>
    );
}