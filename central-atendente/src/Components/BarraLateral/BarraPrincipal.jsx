//import { BrowserRouter, Routes, Route } from "react-router-dom"
import './BarraPrincipal.css'

import logo from './Img/logo.svg'
import inicio from './Img/inicio.svg'
import Atendimentos from './Img/Atendimentos.svg'
import Chamados from './Img/Chamados.svg'
import Consulta from './Img/Consulta.svg'
import Setores from './Img/Consulta.svg'

export const BarraLateral = () => {
    return(
        <nav>
            <section >
                <div className='logo'>
                    <img src={logo} alt="Logo" />
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