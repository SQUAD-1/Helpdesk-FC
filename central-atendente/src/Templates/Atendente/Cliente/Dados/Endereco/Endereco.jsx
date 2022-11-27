import styles from './Endereco.module.css'

export const Endereco = ({endereco, numero, complemento, referencia, cidade, estado, cep}) => {
    return(
        <section>

            <article className={styles.endereco}>
                <h2>Endereço</h2>

                <div className={styles.enderecoContainer}>
                    <div className={styles.endereco2}>
                        <h3>Endereço</h3>
                            <p> {endereco} </p>
                    </div>

                    <div className={styles.numero}>
                        <h3>Número</h3>
                        <p> {numero} </p>
                    </div>

                    <div className={styles.complemento}>
                        <h3>Complemento</h3>
                        <p> {complemento} </p>
                    </div>

                    <div className={styles.referencia}>
                        <h3>Ponto de Referência</h3>
                        <p> {referencia} </p>
                    </div>

                </div>
                <div className={styles.enderecoContainer2}>

                    <div className={styles.cidade}>
                        <h3>Cidade</h3>
                        <p> {cidade} </p>
                    </div>

                    <div className={styles.estado}>
                        <h3>Estado</h3>
                        <p> {estado} </p>
                    </div>

                    <div className={styles.cep}>
                        <h3>CEP</h3>
                        <p> {cep} </p>
                    </div>

                <div className={styles.lineFinal}></div>

                </div>
            </article>
        </section>
    )
}