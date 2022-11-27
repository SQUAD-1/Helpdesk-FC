import './ConteudoConsulta.css'

import lupa from '../../../assets/imagens/lupa.svg'
import product from '../../../assets/imagens/product.svg'
import MaleUser from '../../../assets/imagens/MaleUser.svg'
import TV from '../../../assets/imagens/TV.jpg'

export const ConteudoConsulta = () => {
    return (
        <>
            <div className="container-Atend">
                <div id="atendimento">
                    <div>
                        <h1 className="usuario">Consulta</h1>
                    </div>
                    <div id="lista-Atendimento">
                        <div id="atendimento1">
                            <div className="container-topo">
                                <div className="inputWithIcon">
                                    <input type="text" placeholder="tv lg 4k 50 polegadas" />
                                        <img id="lupa" className="icone" src={lupa} alt="lupa" />
                                        </div>
                                        <div className="container-icons">
                                            <img className="icones" src={product} alt="produto" />
                                                <div className="botao">
                                                    <input type="checkbox" id="chk" className="cardsCheck" />
                                                    <label for="chk" className="switch">
                                                        <span className="slider"></span>
                                                    </label>
                                                </div>
                                                <img className="icones" src={MaleUser} alt="produto" />
                                                </div>
                                        </div>
                                        <div className="resultado">
                                            <div className="Tela-Itens">
                                                <div className="box1">
                                                    <img src={TV} alt="TV" />

                                                </div>
                                                <div className="box2">
                                                    <h1>Smart Tv LED 50’’ LG 4k...</h1>
                                                    <p>738YGE9O</p>
                                                    <p>Eletrodoméstico</p>
                                                    <p>LG</p>

                                                </div>
                                            </div>
                                            <div className="Tela-Itens">
                                                <div className="box1">
                                                    <img src={TV} alt="TV" />

                                                </div>
                                                <div className="box2">
                                                    <h1>Smart Tv LED 50’’ LG 4k...</h1>
                                                    <p>738YGE9O</p>
                                                    <p>Eletrodoméstico</p>
                                                    <p>LG</p>

                                                </div>
                                            </div>
                                            <div className="Tela-Itens">
                                                <div className="box1">
                                                    <img src={TV} alt="TV" />

                                                </div>
                                                <div className="box2">
                                                    <h1>Smart Tv LED 50’’ LG 4k...</h1>
                                                    <p>738YGE9O</p>
                                                    <p>Eletrodoméstico</p>
                                                    <p>LG</p>

                                                </div>
                                            </div>
                                            <div className="Tela-Itens">
                                                <div className="box1">
                                                    <img src={TV} alt="TV" />

                                                </div>
                                                <div className="box2">
                                                    <h1>Smart Tv LED 50’’ LG 4k...</h1>
                                                    <p>738YGE9O</p>
                                                    <p>Eletrodoméstico</p>
                                                    <p>LG</p>

                                                </div>
                                            </div>

                                        </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
                )
}