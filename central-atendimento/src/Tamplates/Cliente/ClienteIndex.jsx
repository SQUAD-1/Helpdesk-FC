import { InputButton } from "../../Components/InputButton/InputButton"
import { NavBar } from "../../Components/NavBar/NavBar"
import './ClienteIndex.css'

export const Cliente = () => {
    return(
        <>

            <NavBar nome=" Josenilda " />

            <header className="optionsSection">

                <button> Voltar </button>

                <h1>Sobre o que deseja falar?</h1>

                <div className="buttonSection" >
                    <div className="button">
                        <InputButton text="Reclamações" />
                        <InputButton text="Cancelamento" />
                        <InputButton text="Horários e Datas" />
                    </div>
                    <div className="button">
                        <InputButton text="Consultar Produtos" />
                        <InputButton text="Entrega" />
                        <InputButton text="Trocas e Devoluções" />
                    </div>
                    <div className="button">
                        <InputButton text="Elogios" />
                        <InputButton text="Outros..." />
                    </div>
                </div>

            </header>
        </>
    )

}

