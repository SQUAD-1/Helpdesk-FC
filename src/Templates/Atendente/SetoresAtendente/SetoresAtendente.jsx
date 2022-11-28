import { ConteudoSetores } from "../../../Components/ConteudoSetores/ConteudoSetores"
import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor"
import { sideBarSupervisor } from "../../../Components/sideBarSupervisor/sideBarSupervisor"

export const SetoresAtendente = () => {
    return (
        <>
        <MenuSupervisor />
        <ConteudoSetores />
        <sideBarSupervisor />
        </>
    )
}