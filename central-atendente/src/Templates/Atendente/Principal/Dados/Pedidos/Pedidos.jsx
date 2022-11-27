import './Pedidos.css'

export const Pedidos = () => {
    return(
        <section>

            <article className="pedidosContainer">
                <h2>Pedidos</h2>

                <div className="Pedidos">

                    <div className='detalhePedido'>
                        <div className="totalPedidos">
                            <h3>Total de Pedidos</h3>
                            <p> 1 Pedido (s) </p>
                        </div>

                        <div className='finalizado'>
                        <h3>Pedidos Finalizado</h3>
                            <p> 0 Pedido (s) </p>
                        </div>

                    </div>
                        
                    <div className='squarPedidos'> <legend>#1</legend>
                        <div className='infoPedido'>
                            <p>Pedido n° 421-001004560 </p>

                            <div className='detalhes'>
                               <p>Status: Em andamento</p> 
                               <p>Canal de Venda: Loja</p>
                               <p>Preço: R$ 7.827,10</p>
                               <p>Estimativa da entrega: 23/09/22</p>
                            </div>
                        </div>
                    </div>

                    <div className='lineFinall'></div>

                </div>
            </article>
        </section>
    )
}