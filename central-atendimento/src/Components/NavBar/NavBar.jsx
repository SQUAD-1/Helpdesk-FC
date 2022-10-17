import './NavBar.css'

// Componente que exibe o navBar dos clientes

export const NavBar = ({nome}) => {

    return(

        <nav className="navSection">

                <div className="imgSection">
                    <img src="../../../img/ferreiracosta.svg" alt="" />
                </div>

                <div className='infoCliente'>
                    <div className='imgLogado' />

                    <p className='logadoName' >Olá, &nbsp; { nome }</p> 
                </div>

            </nav>

    )
}