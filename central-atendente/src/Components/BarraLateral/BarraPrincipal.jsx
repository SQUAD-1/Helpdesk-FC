//import { BrowserRouter, Routes, Route } from "react-router-dom"
import './BarraPrincipal.css'

import logoPequeno from '../../assets/ImgBarraLateral/logoPequeno.svg'
import inicio from '../../assets/ImgBarraLateral/inicio.svg'
import Atendimentos from '../../assets/ImgBarraLateral/Atendimentos.svg'
import Chamados from '../../assets/ImgBarraLateral/Chamados.svg'
import Consulta from '../../assets/ImgBarraLateral/Consulta.svg'
import Setores from '../../assets/ImgBarraLateral/Setores.svg'

export const BarraLateral = () => {
    return(
        <nav>
            <section >
                <div className='logo'>
                    <img src={logoPequeno} alt="Logo" />
                </div>
            
                <article className='iconRedirection'>
                    <div className='Bullet'>
                        <img src={inicio} alt="inicio" />
                    </div>

                    <div className='Bullet2'>
                        <img src={Atendimentos} alt="Atendimentos" />    
                    </div>

                    <div className='Bullet3'>
                        <img src={Chamados} alt="Chamados" />
                    </div>
                    
                    <div className='Bullet4'>
                        <img src={Consulta} alt="Consulta" />                        
                    </div>

                    <div className='Bullet4'>
                        <img src={Setores} alt="Setores" />                        
                    </div>

                </article>
            </section>
        </nav>
    )
}