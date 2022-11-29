import styles from './Menu.module.css'

import logoPequeno from '../../assets/imagens/fc_logo.svg'
import inicio from '../../assets/ImgBarraLateral/inicio.svg'
import Atendimentos from '../../assets/ImgBarraLateral/Atendimentos.svg'
import Chamados from '../../assets/ImgBarraLateral/Chamados.svg'
import Consulta from '../../assets/ImgBarraLateral/Consulta.svg'
import Setores from '../../assets/ImgBarraLateral/Setores.svg'
import indicadores from '../../assets/imagens/indicadores.svg'
import fotoAtendente from '../../assets/ImgBarraLateral/fotoAtendente.png'
import atendentes from '../../assets/imagens/atendentes.svg'
import { Link } from 'react-router-dom';

export const MenuSupervisor = () => {
    return(
        <nav>
            <Link to='/'><img className={styles.logo} src={logoPequeno} alt="Logo Ferreira costa" /></Link>
            <ul>
                <li><Link to='/InicioSupervisor'><img src={inicio} alt="Inicio" /></Link></li>

                <li><Link to='/Atendentes'><img src={atendentes} alt="atendentes" /></Link></li>

                <li><Link to='/AtendimentosSupervisor'><img src={Atendimentos} alt="Atendimentos" /></Link></li>

                <li><Link to='/ChamadosSupervisor'><img src={Chamados} alt="Chamados" /></Link></li>

                <li><Link to='/ConsultaSupervisor'><img src={Consulta} alt="Consulta" /></Link></li>

                <li><Link to='/Indicadores'><img src={indicadores} alt="indicadores"/></Link></li>

                <li><Link to='/SetoresSupervisor'><img src={Setores} alt="Setores" /></Link></li>

            </ul>
                <img className={styles.foto} src={fotoAtendente} alt="Foto do Atendente" />
        </nav>
    )
}