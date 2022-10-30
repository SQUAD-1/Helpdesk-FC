import './Informacoes.css'

export const Informacoes = ({nome, nomeCompleto, dataNasciemento, cpf, rg}) => {
    return(
        <section>
            <div> <h1>{nome}</h1> </div>

            <article className="inforacoesGerais">
                <h2>Informações Gerais</h2>

                <div className="nomeNascimeto">
                    <div className="nomeCompleto">
                        <h3>Nome Completo</h3>
                            {nomeCompleto}
                    </div>

                    <div className="dataNasc">
                        <h3>Data Nasciemento</h3>
                        {dataNasciemento}
                    </div>

                </div>

                <div className='cpfRg'>
                    <div className="cpf">
                        <h3>CPF</h3>
                        {cpf}
                    </div>

                    <div className="rg">
                        <h3>RG</h3>
                        {rg}
                </div>

                </div>
            </article>
        </section>
    )
}