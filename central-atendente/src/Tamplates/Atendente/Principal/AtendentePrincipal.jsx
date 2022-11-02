import { BarraLateral } from "./BarraLateral/BarraPrincipal"
import { Dados } from "./Dados/Dados"
import { Estatisticas } from "./Estatisticas/Estatisticas"

export const AtendentePrincipal = () => {
    return(
        <>

            <BarraLateral />
            
            <Dados />

            <Estatisticas />
        </>
    )
}