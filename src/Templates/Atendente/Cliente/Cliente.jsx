import { Menu} from "../../../Components/Menu/Menu"
import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor"
import { sideBarSupervisor } from "../../../Components/sideBarSupervisor/sideBarSupervisor"
import { Dados } from "./Dados/Dados"
import { Estatisticas } from "./Estatisticas/Estatisticas"

export const Cliente = () => {
    return (
        <>  
            <MenuSupervisor />
            <Dados />
            <Estatisticas />
            <sideBarSupervisor />
        </>
    )
}