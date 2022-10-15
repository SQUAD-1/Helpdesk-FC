import { InputButton } from "../../Components/InputButton/InputButton"
import { NavBar } from "../../Components/NavBar/NavBar"
import './ClienteIndex.css'

export const Cliente = () => {
    return(
        <>

            <NavBar nome=" Josenilda " />

            <header className="optionsSection">

                <h1>Sobre o que deseja falar?</h1>

                <div className="buttonSection" >
                    <InputButton text="Reclmações" />
                </div>

            </header>
        </>
    )

}

