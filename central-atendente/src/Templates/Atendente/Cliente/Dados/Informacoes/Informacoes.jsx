import styles from './Informacoes.module.css'

export const Informacoes = ({nome, nomeCompleto, dataNasciemento, cpf, rg}) => {
    return(
        <section>
            <label className={styles.consulta}> <b>&lt;</b> Consulta</label>

            <div> <h1 className={styles.h1}>{nome}</h1> </div>

            <article className="inforacoesGerais">
                <h2 className={styles.h2}>Informações Gerais</h2>

                <div className={styles.nomeNascimento}>
                    <div className={styles.nomeCompleto}>
                        <h3>Nome Completo</h3>
                            <p> {nomeCompleto} </p>
                    </div>

                    <div className={styles.dataNasc}>
                        <h3>Data Nasciemento</h3>
                        <p> {dataNasciemento} </p>
                    </div>

                </div>

                <div className={styles.cpfRg}>
                    <div className={styles.cpf}>
                        <h3>CPF</h3>
                        <p> {cpf} </p>
                    </div>

                    <div className={styles.rg}>
                        <h3>RG</h3>
                        <p> {rg} </p>
                </div>

                <div className={styles.lineFinal}></div>

                </div>
            </article>
        </section>
    )
}