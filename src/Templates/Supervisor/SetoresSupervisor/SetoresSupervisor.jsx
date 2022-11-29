import { MenuSupervisor } from "../../../Components/Menu/MenuSupervisor"
import { ConteudoSetores } from "../../../Components/ConteudoSetores/ConteudoSetores"
import { sideBarSupervisor } from "../../../Components/sideBarSupervisor/sideBarSupervisor"

export const SetoresSupervisor = () => {
    return (
        <>
        <MenuSupervisor />
        <ConteudoSetores />
        <sideBarSupervisor />
        </>
    )
}