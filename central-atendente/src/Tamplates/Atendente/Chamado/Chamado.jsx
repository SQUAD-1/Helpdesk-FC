import { BarraLateral } from "../../../Components/BarraLateral/BarraPrincipal"
import { CampoInformacoes } from "../../../Components/Input/CampoInformacoes"
import styles from './Chamado.module.css'

export const Chamado = () => {
    return(
        <section>

           <BarraLateral />

           <h1 className={styles.tituloTela}>Abrir Chamado</h1>

           <CampoInformacoes titulo="CPF" informacao="702.492.125-90" />

        </section>
    )
}