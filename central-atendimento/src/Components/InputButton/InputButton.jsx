import './InputButton.css'


// Componente que Exibe os Botões na página do cliente

export const InputButton = ({text}) => {

    return(
        <section>
            <div>
                <input className="inputButton" type="button" value={text} />
            </div>
        </section>
    )

}
