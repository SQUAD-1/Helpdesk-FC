import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor"
import { ConteudoSetores } from "./ConteudoSetores/ConteudoSetores"
import { sideBarSupervisor } from "../../../Components/sideBarSupervisor/sideBarSupervisor"

export const Setores = () => {
    return (
        <>
        <MenuSupervisor />
        <ConteudoSetores />
        <sideBarSupervisor />
        </>
    )
}