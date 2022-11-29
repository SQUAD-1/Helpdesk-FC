import styles from './TelaInicialAtendente.module.css'

import { Menu } from '../../../Components/Menu/Menu'
import { SideBarAtendente } from '../../../Components/sideBarAtendente/sideBarAtendente'
import Callcentercuate from '../../../assets/imagens/Callcentercuate.svg'
import Component20 from '../../../assets/imagens/Component20.svg'
import { MenuSupervisor } from '../../../Components/Menu/MenuSupervisor'
import {Atendentes} from '../../../Templates/Supervisor/ListaAtendentes/Atendentes/Atendentes'


export const TelaInicialAtendente = ({nome}) => {
    return(
        <section>
            <Menu />
            <article className={styles.container}>
                <h1>Bom dia,  {nome}</h1>
                <img className={styles.imgTela} src={Callcentercuate} alt="Imagem da Tela" />

            <Atendentes className={styles.componentAtendimento}/>
        </article>
            <SideBarAtendente />
        </section>
    )
}