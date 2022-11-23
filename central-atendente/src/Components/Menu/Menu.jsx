import styles from './Menu.module.css'

import logoPequeno from '../../assets/ImgBarraLateral/logoPequeno.svg'
import inicio from '../../assets/ImgBarraLateral/inicio.svg'
import atendentes from '../../assets/ImgBarraLateral/Atendentes.svg'
import Atendimentos from '../../assets/ImgBarraLateral/Atendimentos.svg'
import Chamados from '../../assets/ImgBarraLateral/Chamados.svg'
import Consulta from '../../assets/ImgBarraLateral/Consulta.svg'
import indicadores from '../../assets/ImgBarraLateral/indicadores.svg'
import Setores from '../../assets/ImgBarraLateral/Setores.svg'
import fotoAtendente from '../../assets/ImgBarraLateral/fotoAtendente.svg'

export const Menu = () => {
    return(
        <nav>
            <img className={styles.logo} src={logoPequeno} alt="Logo Ferreira costa" />
            <ul>
                <li><img src={inicio} alt="Inicio" /></li>

                <li><img className={styles.atendentes} src={atendentes} alt="Atendentes" /></li>

                <li><img src={Atendimentos} alt="Atendimentos" /></li>

                <li><img src={Chamados} alt="Chamados" /></li>

                <li><img src={Consulta} alt="Consulta" /></li>

                <li><img src={indicadores} alt="Indicadores" /></li>

                <li><img src={Setores} alt="Setores" /></li>

                <li><img className={styles.foto} src={fotoAtendente} alt="Foto do Atendente" /></li>
            </ul>
        </nav>
    )
}