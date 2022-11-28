import { ListaChamados } from "../../../Components/Chamados/ListaChamados"
import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor"
import { sideBarSupervisor } from "../../../Components/sideBarSupervisor/sideBarSupervisor"

export const ChamadosAtendente = () => {
    return (
        <>
        <MenuSupervisor />
        <ListaChamados />
        <sideBarSupervisor />
        </>
    )
}