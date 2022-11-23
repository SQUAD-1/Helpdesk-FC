import {Link} from 'react-router-dom'
import './Menu.css'

import logoPequeno from '../../assets/ImgBarraLateral/logoPequeno.svg'
import inicio from '../../assets/ImgBarraLateral/inicio.svg'
import Atendimentos from '../../assets/ImgBarraLateral/Atendimentos.svg'
import Chamados from '../../assets/ImgBarraLateral/Chamados.svg'
import Consulta from '../../assets/ImgBarraLateral/Consulta.svg'
import Setores from '../../assets/ImgBarraLateral/Setores.svg'

export const Menu = () => {
    return(
        <nav>
            <section >
                <div className='logo'>
                    <Link to="/" ><img src={logoPequeno} alt="Logo" /> </Link>                    
                </div>
            
                <article className='iconRedirection'>
                    <div className='Bullet'>
                        <Link to="/" ><img src={inicio} alt="inicio" /></Link>                        
                    </div>

                    <div className='Bullet2'>
                        <Link to="/atendimento" ><img src={Atendimentos} alt="Atendimentos" /></Link>                            
                    </div>

                    <div className='Bullet3'>
                        <Link to="/chamados" ><img src={Chamados} alt="Chamados" /></Link>                        
                    </div>
                    
                    <div className='Bullet4'>
                        <Link to="/consulta" ><img src={Consulta} alt="Consulta" /> </Link>                                               
                    </div>

                    <div className='Bullet4'>
                        <Link to="/setores" ><img src={Setores} alt="Setores" /> </Link>                                               
                    </div>

                </article>
            </section>
        </nav>
    )
}