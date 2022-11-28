import { ListaChamados } from "../../../Components/Chamados/ListaChamados"
import { Menu } from "../../../Components/Menu/Menu"
import { SideBarAtendente } from "../../../Components/sideBarAtendente/sideBarAtendente"

export const ChamadosAtendente = () => {
    return (
        <>
        <Menu />
        <ListaChamados />
        <SideBarAtendente />
        </>
    )
}