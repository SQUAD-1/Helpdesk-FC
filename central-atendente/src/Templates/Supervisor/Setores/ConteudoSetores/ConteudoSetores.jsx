import './ConteudoSetores.css'

export const ConteudoSetores = () => {
    return (
        <>
            <div className="wrap">
                <section className="container">
                    <h1 className="username"> Setores</h1>
                    <h2 className="description"> <img src="images/logistica.svg" alt="setor" /> Logística</h2>

                    <div className="container-func row row-cols-md-4">
                        <div className="box-func ">
                            <img src="images/avatar.svg" alt="avatar" />
                                <div className="legend-func">
                                    <div className="label-func">
                                        <label className="fonte-func">Marina Senna</label>
                                        <label className="fonte-cargo">Chefe de Setor</label>
                                    </div>
                                </div>
                        </div>
                        <div className="box-func">
                            <img src="images/avatar.svg" alt="avatar" />
                                <div className="legend-func">
                                    <div className="label-func">
                                        <label className="fonte-func">Roberto Alves</label>
                                        <label className="fonte-cargo">Gerente</label>
                                    </div>
                                </div>
                        </div>
                        <div className="box-func">
                            <img src="images/avatar.svg" alt="avatar" />
                                <div className="legend-func">
                                    <div className="label-func">
                                        <label className="fonte-func">Chico Science</label>
                                        <label className="fonte-cargo">Motorista</label>
                                    </div>
                                </div>
                        </div>
                        <div className="box-func">
                            <img src="images/avatar.svg" alt="avatar" />
                                <div className="legend-func">
                                    <div className="label-func">
                                        <label className="fonte-func">Laura Millan</label>
                                        <label className="fonte-cargo">Motorista</label>
                                    </div>
                                </div>
                        </div>
                        <div className="box-func">
                            <img src="images/avatar.svg" alt="avatar" />
                                <div className="legend-func">
                                    <div className="label-func">
                                        <label className="fonte-func">Pedro Primeiro</label>
                                        <label className="fonte-cargo">Entregador</label>
                                    </div>
                                </div>
                        </div>
                        <div className="box-func">
                            <img src="images/avatar.svg" alt="avatar" />
                                <div className="legend-func">
                                    <div className="label-func">
                                        <label className="fonte-func">Luís Lins</label>
                                        <label className="fonte-cargo">Entregador</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="line-btn">
                        <div className="line"></div>
                        <div className="btn-img ">
                            <i className="bi bi-envelope-fill icones"></i>
                            <i className="bi bi-telephone-forward-fill transferir icones"></i>
                            <i className="bi bi-telephone-fill icones"></i>
                        </div>
                    </div>

                </section>


                <div className="sidebar">
                    <h2 className="description"> <img src="images/pin.svg" alt="pin" /> Unidade</h2>

                    <div className="select-group">
                        <button id="button" className="button">
                            <ul id="select-label">Selecione a unidade</ul>
                            <div id="arrow" className="arrow"></div>
                        </button>
                        <div className="dropdown hidden" id="dropdown">
                            <input type="radio" id="select-aracaju" name="where" value="aracaju" className="option" />
                                <label for="select-aracaju" className="select-item">Aracaju - SE</label>
                                <input type="radio" id="select-caruaru" name="where" value="caruaru" className="option" />
                                    <label for="select-caruaru" className="select-item">Caruaru - PE</label>
                                    <input type="radio" id="select-garanhus" name="where" value="garanhus" className="option" />
                                        <label for="select-garanhus" className="select-item">Garanhus - PE</label>
                                        <input type="radio" id="select-imbiribeira" name="where" value="imbiribeira" className="option" />
                                            <label for="select-imbiribeira" className="select-item">Imbiribeira - PE</label>
                                            <input type="radio" id="select-joaoPessoa" name="where" value="joaoPessoa" className="option" />
                                                <label for="select-joaoPessoa" className="select-item">João Pessoa - PB</label>
                                                <input type="radio" id="select-natal" name="where" value="natal" className="option" />
                                                    <label for="select-natal" className="select-item">Natal - RN</label>
                                                    <input type="radio" id="select-salvador" name="where" value="salvador" className="option" />
                                                        <label for="select-salvador" className="select-item">Salvador - BA</label>
                                                        <input type="radio" id="select-tamarineira" name="where" value="tamarineira" className="option" />
                                                            <label for="select-tamarineira" className="select-item">Tamarineira - PE</label>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <h2 className="font-inter16">Setores</h2>
                                                        <div className="caixa-verde">
                                                            <div className="setores">
                                                                <li className="setor">
                                                                    <img src="images/admin.svg" alt="setor" />
                                                                        <label>Administração</label>
                                                                </li>
                                                                <li className="setor">
                                                                    <img src="images/atend.svg" alt="setor" />
                                                                        <label>Atendimento</label>
                                                                </li>
                                                                <li className="setor">
                                                                    <img src="images/geren.svg" alt="setor" />
                                                                        <label>Gerência</label>
                                                                </li>
                                                                <li className="setor">
                                                                    <img src="images/jurid.svg" alt="setor" />
                                                                        <label>Jurídico</label>
                                                                </li>
                                                                <li className="setor">
                                                                    <img src="images/logis.svg" alt="setor" />
                                                                        <label>Logística</label>
                                                                </li>
                                                                <li className="setor">
                                                                    <img src="images/relac.svg" alt="setor" />
                                                                        <label>Relacionamento</label>
                                                                </li>
                                                                <li className="setor">
                                                                    <img src="images/tesou.svg" alt="setor" />
                                                                        <label>Tesouraria</label>
                                                                </li>
                                                                <li className="setor">
                                                                    <img src="images/vendas.svg" alt="setor" />
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