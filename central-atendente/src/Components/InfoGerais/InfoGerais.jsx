import './InfoGerais.css';

export const InfoGerais = ({ detalhe, conclusao, ConteudoDetalhe, ConteudoConclusao1, ConteudoConclusao2}) => {
    return (
        <>
            <div className="Informacoes">
                <div className="conteudo-esquerda">
                    <div className="primeiro-item">
                        <div className="produto">
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
                        <div className="produto">
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
                </div>
            </div>
        </>
    );
};