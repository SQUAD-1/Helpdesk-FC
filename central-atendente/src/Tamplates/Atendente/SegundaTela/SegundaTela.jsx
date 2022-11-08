import { BarraLateral } from '../../../Components/BarraLateral/BarraPrincipal'

import './SegundaTela.css'
import imgTela from './img/Callcenter-cuate1.svg'
import componentAtendimento from './img/Component20.svg'


export const SegundaTela = ({nome}) => {
    return(
        <section>

            <BarraLateral />

            <article className="container">
                <h1>Bom dia,  {nome}</h1>
                <img className="imgTela" src={imgTela} alt="Imagem da Tela" />

                <img className="componentAtendimento" src={componentAtendimento} alt="Componente de Lista de Atendimento" />
            </article>


        </section>
    )
}