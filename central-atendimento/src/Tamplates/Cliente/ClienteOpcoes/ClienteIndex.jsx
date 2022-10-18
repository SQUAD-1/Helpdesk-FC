import { InputButton } from "../../../Components/InputButton/InputButton"
import { NavBar } from "../../../Components/NavBar/NavBar"
import './ClienteIndex.css'

// Componente Responsável por exibir as opções para os clientes
export const ClienteIndex = () => {
    return(
        <>
            {/* Componente do navBAr */}
            <NavBar nome=" Josenilda Arruda" />

            {/* Seção das opções */}
            <header className="optionsSection">

                <button> Voltar </button>

                <h1>Sobre o que deseja falar?</h1>

                {/* Importações dos Botões */}
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

