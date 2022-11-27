import './Endereco.css'

export const Endereco = ({endereco, numero, complemento, referencia, cidade, estado, cep}) => {
    return(
        <section>

            <article className="endereco">
                <h2>Endereço</h2>

                <div className="enderecoContainer">
                    <div className="endereco2">
                        <h3>Endereço</h3>
                            <p> {endereco} </p>
                    </div>

                    <div className="numero">
                        <h3>Número</h3>
                        <p> {numero} </p>
                    </div>

                    <div className="complemento">
                        <h3>Complemento</h3>
                        <p> {complemento} </p>
                    </div>

                    <div className="referencia">
                        <h3>Ponto de Referência</h3>
                        <p> {referencia} </p>
                    </div>

                </div>
                <div className="enderecoContainer2">

                    <div className="cidade">
                        <h3>Cidade</h3>
                        <p> {cidade} </p>
                    </div>

                    <div className="estado">
                        <h3>Estado</h3>
                        <p> {estado} </p>
                    </div>

                    <div className="cep">
                        <h3>CEP</h3>
                        <p> {cep} </p>
                    </div>

                <div className='lineFinal'></div>

                </div>
            </article>
        </section>
    )
}