import './Contato.css'

export const Contato = ({tel, cel, whats, email}) => {
    return(
        <section>

            <article className="contato">
                <h2>Contato</h2>

                <div className="telCelWhats">
                    <div className="tel">
                        <h3>Telefone</h3>
                            <p> {tel} </p>
                    </div>

                    <div className="cel">
                        <h3>Celular</h3>
                        <p> {cel} </p>
                    </div>

                    <div className="whats">
                        <h3>Whatsapp</h3>
                        <p>{whats}</p>
                    </div>

                </div>

                <div className='email'>
                    <div className="emailInfo">
                        <h3>Email</h3>
                        <p> {email} </p>
                    </div>

                <div className='lineFinal'></div>

                </div>
            </article>
        </section>
    )
}