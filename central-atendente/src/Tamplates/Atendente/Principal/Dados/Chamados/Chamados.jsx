import './Chamados.css'

export const Chamados = () => {
    return(
        <section>

            <article className="chamadosContainer">
                <h2>Chamados</h2>

                <div className="Chamados">

                    <div className='tiposChamados'>

                        <div className="totalChamados">
                            <h3>Total de Chamados</h3>
                            <p> 2 Camados (s) </p>
                        </div>

                        <div className='chamadosAberto'>
                            <h3>Chamados em Aberto</h3>
                            <p> 2 Chamados (s) </p>
                        </div>

                        <div className='chamadosFeito'>
                            <h3>Chamados Feito</h3>
                            <p> 0 Chamados (s) </p>
                        </div>

                    </div>

                    <div className='squarContainer'>                    
                        <div className='squarPedidos'> <legend>#1</legend>
                            <div className='infoPedido'>
                                <p>Chamado n° 14241.004-10</p>

                                <div className='detalhes'>
                                <p>Status: Em andamento</p> 
                                <p>Canal de Venda: Loja</p>
                                <p>Preço: R$ 7.827,10</p>
                                <p>Estimativa da entrega: 23/09/22</p>
                                </div>
                            </div>
                        </div>

                        <div className='squarPedidosTwo'> <legend>#2</legend>
                            <div className='infoPedido'>
                                <p>Chamado n° 14761.005-86</p>

                                <div className='detalhes'>
                                <p>Status: Em andamento</p> 
                                <p>Canal de Venda: Loja</p>
                                <p>Preço: R$ 7.827,10</p>
                                <p>Estimativa da entrega: 23/09/22</p>
                                </div>
                            </div>
                        </div>
                    </div> 

                    <div className='lineFinall'></div>

                </div>
            </article>
        </section>
    )
}