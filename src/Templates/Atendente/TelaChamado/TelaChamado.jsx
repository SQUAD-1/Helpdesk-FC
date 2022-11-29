import { Menu } from "../../../Components/Menu/Menu";
import { SideBarAtendente } from "../../../Components/sideBarAtendente/sideBarAtendente";
import { CabecalhoChamado } from "./CabecalhoChamado/CabecalhoChamado";
import { ConteudoChamado } from "./ConteudoChamado/ConteudoChamado";

export const TelaChamado = () => {
    return(
        <>
        <Menu />
        <CabecalhoChamado/>
        <ConteudoChamado />
        <SideBarAtendente />
        </>
    );
}