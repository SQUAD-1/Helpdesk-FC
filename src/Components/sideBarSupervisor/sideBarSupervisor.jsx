import styles from './sideBarSupervisor.module.css'

export const sideBarSupervisor = () => {
    return (
        <>
            <div className={styles.sidebarright}>
                <div className={styles.containerright}>
                    <div>
                        <div className={styles.timedate}>
                            <h1 className={styles.horario}></h1>
                        </div>
                        <div className={styles.timedatedata}></div>
                    </div>
                    <section>
                        <div className={styles.time}>
                            <input type="checkbox" className={styles.btimecheck} />
                            <div className={styles.flexbeetwen}>
                                <h1 className={styles.inlinefontcall}>Linha do tempo</h1>
                                <i className={styles.bibicaretupfillseta}></i>
                            </div>
                            <div className={styles.containertimednone}>

                            </div>
                        </div>
                        <div className={styles.chamada}>
                            <input type="checkbox" className={styles.infoscheck} />
                            <div className={styles.flexbeetwen}>
                                <h1 className={styles.inlinefontcall}>Chamada</h1>
                                <i className={styles.bibicaretupfillseta}></i>
                            </div>
                            <div className={styles.chamadasdnone}>
                                <div className={styles.hour}>
                                    <span className={styles.horas}>00:00</span>
                                    <span className={styles.text}>
                                        <div id={styles.gravando}></div>
                                        gravando
                                    </span>
                                </div>
                                <div className={styles.font60014}>N°telefone</div>
                                <div className={styles.font60015}>+55 (81) 9 9999 - 9999</div>
                                <div className={styles.font60014}>Ligou para</div>
                                <div className={styles.font400}>Ferreira Costa IMB</div>
                                <div className={styles.mt8flex}>
                                    <i className={styles.bibimicmutefillicones}></i>
                                    <abbr title="Transferir"><i
                                        className={styles.bibitelephoneforwardfilltransferiricones}></i></abbr>
                                    <i className={styles.bibivolumeupfillicones}></i>
                                    <abbr title="Desconectar"> <i className={styles.bibitelephonexfilldesconecticones}></i></abbr>
                                </div>
                            </div>
                        </div>
                        <div className={styles.mensagens}>
                            <div className={styles.callimg}>
                                <i className={styles.bibichatleftfillicones}></i>
                                <i className={styles.bibienvelopefillicones}></i>
                                <i className={styles.bibitelephonefillicones}></i>
                                <i className={styles.bibisnowicones}></i>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}