import './NavBar.css'

export const NavBar = ({nome}) => {

    return(

        <nav className="navSection">

                <div className="imgSection">
                    <img src="../../img/ferreiracosta.svg" alt="Ferreira Costa" />
                </div>

                <div className='infoAtendente'>
                    <div className='imgLogado' />

                    <p className='atendenteName' >Olá, &nbsp; { nome }</p> 
                </div>

            </nav>

    )
}