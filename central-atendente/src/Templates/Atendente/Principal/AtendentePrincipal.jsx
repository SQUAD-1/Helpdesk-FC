import { Menu } from "../../../Components/Menu/Menu"
import { Dados } from "./Dados/Dados"
import { Estatisticas } from "./Estatisticas/Estatisticas"

export const AtendentePrincipal = () => {
    return (
        <>  
            <Menu />
            <Dados />
            <Estatisticas />
        </>
    )
}