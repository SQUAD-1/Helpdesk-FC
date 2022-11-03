//import { BrowserRouter, Routes, Route } from "react-router-dom"
import './BarraPrincipal.css'

import logo from './Img/ferreiracosta.svg'
import Bullet from './Img/Bullet.svg'
import Rectangle from './Img/Rectangle.svg'
import Rectangle2 from './Img/Rectangle2.svg'
import Rectangle3 from './Img/Rectangle3.svg'
import Rectangle4 from './Img/Rectangle4.svg'

export const BarraLateral = () => {
    return(
        <nav>
            <section >
                <div className='logo'>
                    <img src={logo} alt="Logo" />
                </div>
            
                <article className='iconRedirection'>
                    <div className='Bullet'>
                        <img src={Bullet} alt="Bullet" />
                    </div>

                    <div className='Bullet2'>
                        <img src={Rectangle} alt="Rectangle" />    
                    </div>

                    <div className='Bullet3'>
                        <img src={Rectangle2} alt="Rectangle2" />
                    </div>
                    
                    <div className='Bullet4'>
                        <img src={Rectangle3} alt="Rectangle3" />                        
                    </div>

                    <div className='Bullet4'>
                        <img src={Rectangle4} alt="Rectangle4" />                        
                    </div>

                </article>
            </section>
        </nav>
    )
}