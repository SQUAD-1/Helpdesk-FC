import { Consulta } from '../../../Components/Consulta/Consulta'
import { Menu } from '../../../Components/Menu/Menu'
import { MenuSupervisor } from '../../../Components/Menu/MenuSupervisor'
import { sideBarSupervisor } from '../../../Components/sideBarSupervisor/sideBarSupervisor'

export const ConsultaAtendente = () => {
    return (
        <>
        <MenuSupervisor />
        <Consulta />
        <sideBarSupervisor />
        </>
    )
}