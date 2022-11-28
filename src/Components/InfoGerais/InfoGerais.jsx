import './InfoGerais.css';

import arquivo2 from '../../assets/imgItens/arquivo2.svg'
import arquivoImg from '../../assets/imgItens/arquivoImg.svg'
import moveFiles from '../../assets/imgItens/moveFiles.svg'
import financeiro from '../../assets/imagens/financeiro.svg'
import logisticaicon from '../../assets/imagens/logisticaicon.svg'
import voltar from '../../assets/imagens/voltar.svg'

export const InfoGerais = ({ detalhe, conclusao, ConteudoDetalhe, ConteudoConclusao1, ConteudoConclusao2, Transportadora, InfoTransportadora, InfoAdicional1, InfoAdicional2, DescAdicional1, DescAdicional2 }) => {
    return (
        <>
            <div className="Informacoes">
                <div className="conteudo-esquerda">
                    <div className="primeiro-item">
                        <div className="item">
                            <h3>Smart TV LED 50" LG 4K/Ultra HD 50UQ8050PSB...</h3>
                        </div>
                        <div className="itens-pedido">
                            <p>Código: 738YGE9O </p>
                            <p>Status: Entregue </p>
                            <p>Quant: 1</p>
                            <p>Preço: 2.699,00</p>
                            <p>Entregue em: 18/09/22</p>
                        </div>
                    </div>
                    <div className="segundo-item">
                        <div className="item">
                            <h3>Geladeira Refrigerador Consul Frost Free Duplex 410L...</h3>
                        </div>
                        <div className="itens-pedido">
                            <p>Código: 7388UFGA  </p>
                            <p>Status: No armazém </p>
                            <p>Quant: 1</p>
                            <p>Preço: 3.514,05</p>
                            <p>Estimativa da entrega: 09/09/22</p>
                        </div>
                    </div>
                    <article className="InfoAdicionais">
                        <div className="info1">
                            <div className="info-transportadora">
                                <h3>{Transportadora}</h3>
                                <p> {InfoTransportadora} </p>
                            </div>
                        </div>
                        <div className="info2">
                            <div className="descricao-info">
                                <h3>{InfoAdicional1}</h3>
                                <p> {DescAdicional1} </p>
                            </div>
                            <div className="descricao-info2">
                                <h3>{InfoAdicional2}</h3>
                                <p> {DescAdicional2} </p>
                            </div>
                        </div>
                        <div className="info3">
                            <div className="descricao-info3">
                                <h3>Canal de Venda</h3>
                                <p> Loja </p>
                            </div>
                            <div className="descricao-info4">
                                <h3>Unidade</h3>
                                <p> Ferreira Costa - Imbiribeira </p>
                            </div>
                        </div>
                        <div className="setores-envolvidos">
                            <h3>Setores Envolvidos</h3>
                            <img src={logisticaicon} alt="" />
                            <img src={financeiro} alt="" />
                        </div>
                    </article>
                </div>
                <div className="barra"></div>
                <div className="conteudo-direita">
                    <div className="especificacao">
                        <div className="detalhe">
                            <h3>{detalhe}</h3>
                        </div>
                        <div className="conteudo-detalhe">
                            <p>{ConteudoDetalhe}</p>
                        </div>
                    </div>
                    <div className="especificacao-dois">
                        <div className="detalhe">
                            <h3>{conclusao}</h3>
                        </div>
                        <div className="conteudo-detalhe">
                            <p>{ConteudoConclusao1}</p>
                            <p>{ConteudoConclusao2}</p>
                        </div>
                    </div>
                    <aside className="anexos">
                        <h3>Anexos</h3>
                        <div className="ItensAnexos">
                            <img className="moveFiles" src={voltar} alt="Retornar Imagem" />
                            <img className="arquivo" src={arquivoImg} alt="Arquivo" />
                            <img className="arquivoImg" src={arquivoImg} alt="Aquivo Imagem" />
                            <img className="arquivo2" src={arquivo2} alt="Arquivo Dois" />
                            <img className="arquivo2" src={arquivo2} alt="Arquivo Dois" />
                            <img className="moveFiles" src={moveFiles} alt="Retornar Imagem" />
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};