import { InputButton } from "../../Components/InputButton/InputButton"
import './ClienteIndex.css'

export const Cliente = ({nome}) => {
    return(
        <section>

            <nav className="navSection">

                <div className="imgSection">
                    <img src="" alt="" />
                </div>

                <div>
                    <p>Olá, {nome}</p> 
                </div>

            </nav>

            <header className="optionsSection">

                <h1>Sobre o que deseja falar?</h1>

                <div className="buttonSection" >
                    <InputButton text="Reclmações" />
                </div>

            </header>
        </section>
    )

}

