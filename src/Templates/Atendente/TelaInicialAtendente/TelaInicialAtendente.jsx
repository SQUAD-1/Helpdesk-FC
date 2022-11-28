import './TelaInicialAtendente.css'
import { Menu } from '../../../Components/Menu/Menu'
import { sideBarSupervisor } from '../../../Components/sideBarSupervisor/sideBarSupervisor'
import Callcentercuate from '../../../assets/imagens/Callcentercuate.svg'
import Component20 from '../../../assets/imagens/Component20.svg'
import { MenuSupervisor } from '../../../Components/Menu/MenuSupervisor'


export const TelaInicialAtendente = () => {
    return(
        <section>
            <MenuSupervisor />
            <article className="container">
                <h1>Bom dia,  José Vinícius</h1>
                <img className="imgTela" src={Callcentercuate} alt="Imagem da Tela" />

                <img className="componentAtendimento" src={Component20} alt="Componente de Lista de Atendimento" />
            </article>
            <sideBarSupervisor />
        </section>
    )
}