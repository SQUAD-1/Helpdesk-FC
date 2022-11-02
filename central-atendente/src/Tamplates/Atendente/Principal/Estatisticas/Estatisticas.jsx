import './Estatisticas.css'

export const Estatisticas = () => {
    return(
        <section>
            <h1 className='title'>Estatísiticas</h1>

            <div className='containerEstatisticas'>
                
                <div className='comprasFeitas'>
                    <h2>Nº de compras feitas</h2>
                    <h2>01 compras feitas</h2>
                </div>

                <div className='adquiridos'>
                    <h2>Produtos Adquiridos</h2>
                    <h2>03 Produtos</h2>
                </div>

                <div className='problemas'>
                    <h2>Problemas Reportados</h2>
                    <h2>02 Problemas</h2>
                </div>

                <div>
                    <h2>Ligações Realizadas</h2>
                    <h2> 02 Ligações</h2>
                </div>

                <div className='ligacao'>
                    <h2>Última Ligação</h2>
                    <h2>18/09/22 às 10:39</h2> {/*Automação Futura*/}
                </div>
            </div>

        </section>
    )
}