import { Menu } from "../../Components/Menu/Menu"
import { SideBarAtendente } from "../../Components/sideBarAtendente/sideBarAtendente"
import { ConteudoConsulta } from "./ConteudoConsulta/ConteudoConsulta"

export const Consulta = () => {
    return (
        <>
        <Menu />
        <ConteudoConsulta />
        <SideBarAtendente />
        </>
    )
}