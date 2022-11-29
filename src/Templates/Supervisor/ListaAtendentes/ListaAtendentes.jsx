import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor";
import { Atendentes } from "./Atendentes/Atendentes";
import { SideBarAtendente } from "../../../Components/sideBarAtendente/sideBarAtendente"

export const ListaAtendentes = () => {
    return (
        <>
            <MenuSupervisor />
            <Atendentes />
            <SideBarAtendente />
        </>
    )
}