import styles from './sideBarAtendente.module.css'

import back from '../../assets/imgSideBar/Back.svg'
import botaoVermelho from '../../assets/imgSideBar/botaoVermelho.svg'

export const SideBarAtendente = () => {

    const now = new Date();
    const day = now.getDay();
    const year = now.getFullYear();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const month = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "julho", "Agosto", "Setembro","Outubro", "Novembro", "Dezembro"][(now.getMonth())]


    return(
        <section className={styles.container}>
            <div className={styles.hours}>
                {hours} : {minutes}
            </div>
            <div className={styles.date}>
                {day} de {month} de {year}
            </div>

            <div className={styles.lineTempo}>
                <input className={styles.click} type="checkbox" />
                <h1 className={styles.tituloLinhaTempo}>Linha do Tempo</h1>
                <img className={styles.botao} src={back} alt="Botão de abrir e fechar" />
                <ul>
                    <li>
                        <div className={styles.iconGreen}></div> Lorem ipsum dolor main <br /> 00/00/00 - 00:00
                    </li>

                    <li>
                        <div className={styles.iconGreen}></div> Lorem ipsum dolor main <br /> 00/00/00 - 00:00
                    </li>

                    <li>
                        <div className={styles.iconGreen}></div> Lorem ipsum dolor main <br /> 00/00/00 - 00:00
                    </li>

                    <li>
                        <div className={styles.iconGreen}></div> Lorem ipsum dolor main <br /> 00/00/00 - 00:00
                    </li>
                </ul>
            </div>

            <div className={styles.chamada}>
                <input className={styles.clickChamada} type="checkbox" />
                <h1 className={styles.tituloChamada}>Chamada</h1>
                <img className={styles.botaoChamada} src={back} alt="Botão de abrir e fechar" />

                <div className={styles.tempGrav}>
                    <h1 className={styles.cronometro}>00:00</h1>
                    <p> <img src={botaoVermelho} alt="Botão Vemerlho" /> gravando</p>
                </div>

                
            </div>
        </section>
    )
}