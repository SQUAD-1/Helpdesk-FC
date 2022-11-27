import styles from './Contato.module.css'

export const Contato = ({tel, cel, whats, email}) => {
    return(
        <section>

            <article className={styles.contato}>
                <h2>Contato</h2>

                <div className={styles.telCelWhats}>
                    <div className={styles.tel}>
                        <h3>Telefone</h3>
                            <p> {tel} </p>
                    </div>

                    <div className={styles.cel}>
                        <h3>Celular</h3>
                        <p> {cel} </p>
                    </div>

                    <div className={styles.whats}>
                        <h3>Whatsapp</h3>
                        <p>{whats}</p>
                    </div>

                </div>

                <div className={styles.email}>
                    <div className={styles.emailInfo}>
                        <h3>Email</h3>
                        <p> {email} </p>
                    </div>

                <div className={styles.lineFinalContato}></div>

                </div>
            </article>
        </section>
    )
}