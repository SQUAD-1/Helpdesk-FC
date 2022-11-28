import styles from './sideBarAtendente.module.css'

import back from '../../assets/imgSideBar/Back.svg'
import botaoVermelho from '../../assets/imgSideBar/botaoVermelho.svg'
import mute from '../../assets/imgSideBar/mute.svg'
import transferCall from '../../assets/imgSideBar/trasferCall.svg'
import altoFalante from '../../assets/imgSideBar/altoFalante.svg'
import desligar from '../../assets/imgSideBar/desligar.svg'
import Chat from '../../assets/imgSideBar/Chat.svg'
import Mail from '../../assets/imgSideBar/Mail.svg'
import Phone from '../../assets/imgSideBar/Phone.svg'
import congelar from '../../assets/imgSideBar/congelar.svg'
import { useEffect, useState } from 'react'

export const SideBarAtendente = () => {

    const [date, setDate] = useState(new Date().toLocaleDateString("pt-Br", {weekday:'numeric', month:'long',year:'numeric'}))
    const [hours, setHours] = useState(new Date().toLocaleTimeString("pt-BR", {hours:'numeric', minute:'numeric'}))

    function updateHour(){
        const toDay = new Date();
        setHours(toDay.toLocaleTimeString("pt-BR", {hours:'numeric', minute:'numeric'}))
        setInterval(updateHour, 1000*60)
    }

    useEffect(()=> {
        updateHour()
    }, [])

    return(
        <section className={styles.container}>
            <div className={styles.hours}>
                {hours}
            </div>
            <div className={styles.date}>
                {date}
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

                <div className={styles.infoLigacao}>
                    <p className={styles.numTelefone}>Nº de telefone</p>
                    <h1 className={styles.numero}>+55 (81) 9 9999-9999</h1>
                </div>

                <div className={styles.info}>
                    <p className={styles.quemLiga}>Ligou Para</p>
                    <h1 className={styles.loja}>Ferreira Costa Imbiribeira</h1>
                </div>

                <div className={styles.iconsLigacao}>
                    <ul>
                        <li><img src={mute} alt="Mute" /></li>
                        <li><img src={transferCall} alt="Transferir Ligação" /></li>
                        <li><img src={altoFalante} alt="Alto Falante" /></li>
                        <li className={styles.desligar}><img src={desligar} alt="Desligar" /></li>
                    </ul>
                </div>                

            </div>

            <div className={styles.iconsAdd}>
                <ul>
                    <li><img src={Chat} alt="Chat" /></li>
                    <li><img src={Mail} alt="Email" /></li>
                    <li><img src={Phone} alt="Telefone" /></li>
                    <li><img src={congelar} alt="Congelar" /></li>
                </ul>
            </div>
        </section>
    )
}