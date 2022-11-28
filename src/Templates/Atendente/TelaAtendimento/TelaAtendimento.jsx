import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor";
import { CabecalhoAtendimento } from "./CabecalhoAtendimento/CabecalhoAtendimento";
import { ConteudoAtendimento } from "./ConteudoAtendimento/ConteudoAtendimento";
import { sideBarSupervisor } from "../../../Components/sideBarSupervisor/sideBarSupervisor";


export const TelaAtendimento = () => {
    return (
        <>
            <MenuSupervisor />
            <CabecalhoAtendimento />
            <ConteudoAtendimento />
            <sideBarSupervisor />
        </>
    );
}