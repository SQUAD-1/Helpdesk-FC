import './NavBar.css';
import logo from '../img/ferreiracosta.svg'


// Componente que exibe o navBar dos clientes

export const NavBar = ({nome}) => {

    return(

        <nav className="navSection">

                <div className="imgSection">
                    <img src={logo} alt="Ferreira Costa" />
                </div>

                <div className='infoCliente'>
                    <div className='imgLogado' />

                    <p className='logadoName' >Olá, &nbsp; <br /> { nome } </p> 
                </div>

            </nav>

    )
}