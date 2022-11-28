import styles from './Menu.module.css'

import logoPequeno from '../../assets/ImgBarraLateral/logoPequeno.svg'
import inicio from '../../assets/ImgBarraLateral/inicio.svg'
import Atendimentos from '../../assets/ImgBarraLateral/Atendimentos.svg'
import Chamados from '../../assets/ImgBarraLateral/Chamados.svg'
import Consulta from '../../assets/ImgBarraLateral/Consulta.svg'
import Setores from '../../assets/ImgBarraLateral/Setores.svg'
import fotoAtendente from '../../assets/ImgBarraLateral/fotoAtendente.png'
import { Link } from 'react-router-dom';

export const Menu = () => {
    return(
        <nav>
        <img className={styles.logo} src={logoPequeno} alt="Logo Ferreira costa" />
            <ul>
                <li><Link to='/TelaInicial'><img src={inicio} alt="Inicio" /></Link></li>

                <li><Link to='/Cliente'><img src={Atendimentos} alt="Atendimentos" /></Link></li>

                <li><Link to='/Chamados'><img src={Chamados} alt="Chamados" /></Link></li>

                <li><Link to='/Consulta'><img src={Consulta} alt="Consulta" /></Link></li>

                <li><Link to='/Setores'><img src={Setores} alt="Setores" /></Link></li>

                <li><img className={styles.foto} src={fotoAtendente} alt="Foto do Atendente" /></li>
            </ul>
        </nav>
    )
}