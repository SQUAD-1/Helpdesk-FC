import { Menu } from "../../../Components/Menu/Menu";
import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor";
import { CabecalhoAtendimento } from "./CabecalhoAtendimento/CabecalhoAtendimento";
import { ConteudoAtendimento } from "./ConteudoAtendimento/ConteudoAtendimento";


export const TelaAtendimento = () => {
    return (
        <>  
            <CabecalhoAtendimento />
            <ConteudoAtendimento/>
        </>
    );
}