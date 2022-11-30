import styles from './ConteudoSetores.module.css'

import avatar from '../../assets/imagens/avatar.svg'
import logistica from '../../assets/imagens/logistica.svg'
import pin from '../../assets/imagens/pin.svg'
import geren from '../../assets/imagens/geren.svg'
import jurid from '../../assets/imagens/jurid.svg'
import logis from '../../assets/imagens/logis.svg'
import atend from '../../assets/imagens/atend.svg'
import admin from '../../assets/imagens/admin.svg'
import vendas from '../../assets/imagens/vendas.svg'
import tesou from '../../assets/imagens/tesou.svg'
import relac from '../../assets/imagens/relac.svg'


export const ConteudoSetores = () => {
    return (
        <>
            <div className={styles.wrap}>
                <section className={styles.container}>
                    <h1 className={styles.username}> Setores</h1>
                    <h2 className={styles.description}> <img src={logistica} alt="setor" /> Logística</h2>

                    <div className={styles.containerfuncrowrowcolsmd4}>
                        <div className={styles.boxfunc}>
                            <img src={avatar} alt="avatar" />
                                <div className={styles.legendfunc}>
                                    <div className={styles.labelfunc}>
                                        <label className={styles.fontefunc}>Marina Senna</label>
                                        <label className={styles.fontecargo}>Chefe de Setor</label>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.boxfunc}>
                            <img src={avatar} alt="avatar" />
                                <div className={styles.legendfunc}>
                                    <div className={styles.labelfunc}>
                                        <label className={styles.fontefunc}>Roberto Alves</label>
                                        <label className={styles.fontecargo}>Gerente</label>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.boxfunc}>
                            <img src={avatar} alt="avatar" />
                                <div className={styles.legendfunc}>
                                    <div className={styles.labelfunc}>
                                        <label className={styles.fontefunc}>Chico Science</label>
                                        <label className={styles.fontecargo}>Motorista</label>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.boxfunc}>
                            <img src={avatar} alt="avatar" />
                                <div className={styles.legendfunc}>
                                    <div className={styles.labelfunc}>
                                        <label className={styles.fontefunc}>Laura Millan</label>
                                        <label className={styles.fontecargo}>Motorista</label>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.boxfunc}>
                            <img src={avatar} alt="avatar" />
                                <div className={styles.legendfunc}>
                                    <div className={styles.labelfunc}>
                                        <label className={styles.fontefunc}>Pedro Primeiro</label>
                                        <label className={styles.fontecargo}>Entregador</label>
                                    </div>
                                </div>
                        </div>
                        <div className={styles.boxfunc}>
                            <img src={avatar} alt="avatar" />
                                <div className={styles.legendfunc}>
                                    <div className={styles.labelfunc}>
                                        <label className={styles.fontefunc}>Luís Lins</label>
                                        <label className={styles.fontecargo}>Entregador</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className={styles.linebtn}>
                        <div className={styles.line}></div>
                        <div className={styles.btnimg}>
                            <i className={styles.bibienvelopefillicones}></i>
                            <i className={styles.bibitelephoneforwardfilltransferiricones}></i>
                            <i className={styles.bibitelephonefillicones}></i>
                        </div>
                    </div>

                </section>


                <div className={styles.sidebar}>
                    <h2 className={styles.description}> <img src={pin} alt="pin" /> Unidade</h2>

                    <div className={styles.selectgroup}>
                        <button id="button" className={styles.button}>
                            <ul id="select-label">Selecione a unidade</ul>
                            <div id="arrow" className={styles.arrow}></div>
                        </button>
                        <div className={styles.dropdownhidden} id="dropdown">
                            <input type="radio" id="select-aracaju" name="where" value="aracaju" className={styles.option} />
                                <label for="select-aracaju" className={styles.selectitem}>Aracaju - SE</label>
                                <input type="radio" id="select-caruaru" name="where" value="caruaru" className={styles.option} />
                                    <label for="select-caruaru" className={styles.selectitem}>Caruaru - PE</label>
                                    <input type="radio" id="select-garanhus" name="where" value="garanhus" className={styles.option} />
                                        <label for="select-garanhus" className={styles.selectitem}>Garanhus - PE</label>
                                        <input type="radio" id="select-imbiribeira" name="where" value="imbiribeira" className={styles.option} />
                                            <label for="select-imbiribeira" className="select-item">Imbiribeira - PE</label>
                                            <input type="radio" id="select-joaoPessoa" name="where" value="joaoPessoa" className={styles.option} />
                                                <label for="select-joaoPessoa" className="select-item">João Pessoa - PB</label>
                                                <input type="radio" id="select-natal" name="where" value="natal" className={styles.option} />
                                                    <label for="select-natal" className="select-item">Natal - RN</label>
                                                    <input type="radio" id="select-salvador" name="where" value="salvador" className={styles.option} />
                                                        <label for="select-salvador" className="select-item">Salvador - BA</label>
                                                        <input type="radio" id="select-tamarineira" name="where" value="tamarineira" className={styles.option} />
                                                            <label for="select-tamarineira" className={styles.selectitem}>Tamarineira - PE</label>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h2 className={styles.fontinter16}>Setores</h2>
                                                        <div className={styles.caixaverde}>
                                                            <div className={styles.setores}>
                                                                <li className={styles.setor}>
                                                                    <img src={admin}alt="setor" />
                                                                        <label>Administração</label>
                                                                </li>
                                                                <li className={styles.setor}>
                                                                    <img src={atend} alt="setor" />
                                                                        <label>Atendimento</label>
                                                                </li>
                                                                <li className={styles.setor}>
                                                                    <img src={geren} alt="setor" />
                                                                        <label>Gerência</label>
                                                                </li>
                                                                <li className={styles.setor}>
                                                                    <img src={jurid} alt="setor" />
                                                                        <label>Jurídico</label>
                                                                </li>
                                                                <li className={styles.setor}>
                                                                    <img src={logis} alt="setor" />
                                                                        <label>Logística</label>
                                                                </li>
                                                                <li className={styles.setor}>
                                                                    <img src={relac}alt="setor" />
                                                                        <label>Relacionamento</label>
                                                                </li>
                                                                <li className={styles.setor}>
                                                                    <img src={tesou} alt="setor" />
                                                                        <label>Tesouraria</label>
                                                                </li>
                                                                <li className={styles.setor}>
                                                                    <img src={vendas} alt="setor" />
                                                                        <label>Vendas</label>
                                                                </li>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </>
                                        )
}