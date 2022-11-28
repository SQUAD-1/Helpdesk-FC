import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor"
import { Conteudo } from "./Conteudo/Conteudo"
import { sideBarSupervisor } from "../../../Components/sideBarSupervisor/sideBarSupervisor"

export const SupervisorPrincipal = () => {
    return (
        <>
            <MenuSupervisor />
            <Conteudo />
            <sideBarSupervisor />
        </>
    )
}