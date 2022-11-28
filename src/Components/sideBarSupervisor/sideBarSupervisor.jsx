import './sideBarSupervisor.css'

export const sideBarSupervisor = () => {
    return (
        <>
            <div className="sidebar-right">
                <div className="container-right">
                    <div>
                        <div className="timedate">
                            <h1 id="horario"></h1>
                        </div>
                        <div className="timedate data"></div>
                    </div>
                    <section>
                        <div className="time">
                            <input type="checkbox" className="b-time check" />
                            <div className="flex-beetwen">
                                <h1 className="inline font-call">Linha do tempo</h1>
                                <i className="bi bi-caret-up-fill seta"></i>
                            </div>
                            <div className="container-time d-none">

                            </div>
                        </div>
                        <div className="chamada">
                            <input type="checkbox" className="infos check" />
                            <div className="flex-beetwen">
                                <h1 className="inline font-call">Chamada</h1>
                                <i className="bi bi-caret-up-fill seta"></i>
                            </div>
                            <div className="chamadas d-none">
                                <div className="hour">
                                    <span className="horas">00:00</span>
                                    <span className="text">
                                        <div id="gravando"></div>
                                        gravando
                                    </span>
                                </div>
                                <div className="font-600-14">N°telefone</div>
                                <div className="font-600-15">+55 (81) 9 9999 - 9999</div>
                                <div className="font-600-14">Ligou para</div>
                                <div className="font-400">Ferreira Costa IMB</div>
                                <div className="mt-8 flex">
                                    <i className="bi bi-mic-mute-fill icones"></i>
                                    <abbr title="Transferir"><i
                                        className="bi bi-telephone-forward-fill transferir icones"></i></abbr>
                                    <i className="bi bi-volume-up-fill icones"></i>
                                    <abbr title="Desconectar"> <i className="bi bi-telephone-x-fill desconect icones"></i></abbr>
                                </div>
                            </div>
                        </div>
                        <div className="mensagens">
                            <div className="call-img ">
                                <i className="bi bi-chat-left-fill icones"></i>
                                <i className="bi bi-envelope-fill icones"></i>
                                <i className="bi bi-telephone-fill icones"></i>
                                <i className="bi bi-snow icones"></i>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}