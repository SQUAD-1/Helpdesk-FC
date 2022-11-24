import styles from './Informacoes.css'

export const Informacoes = ({nome, nomeCompleto, dataNasciemento, cpf, rg}) => {
    return(
        <section>
            <label className='consulta'> <b>&lt;</b> Consulta</label>

            <div> <h1 className={styles.h1}>{nome}</h1> </div>

            <article className="inforacoesGerais">
                <h2 className={styles.h2}>Informações Gerais</h2>

                <div className="nomeNascimento">
                    <div className="nomeCompleto">
                        <h3>Nome Completo</h3>
                            <p> {nomeCompleto} </p>
                    </div>

                    <div className="dataNasc">
                        <h3>Data Nasciemento</h3>
                        <p> {dataNasciemento} </p>
                    </div>

                </div>

                <div className='cpfRg'>
                    <div className="cpf">
                        <h3>CPF</h3>
                        <p> {cpf} </p>
                    </div>

                    <div className="rg">
                        <h3>RG</h3>
                        <p> {rg} </p>
                </div>

                <div className='lineFinal'></div>

                </div>
            </article>
        </section>
    )
}