import './Cabecalho.css';

export const Cabecalho = ({ nome, Titulo, Categoria1, Categoria2, Categoria3, Item1, Item2, Item3 }) => {
    return (
        <>

            <div className="content-conteiner">
                <div className="usuario">
                    &#10094;  <a>{nome}</a>
                </div>
                <div className="cabecalho">
                    <h1 className="chamado">{Titulo}</h1>
                    <div className="itens">
                        <a><span>{Categoria1}</span>{Item1}</a>
                        <a><span>{Categoria2}</span>{Item2}</a>
                        <a><span>{Categoria3}</span>{Item3}</a>
                    </div>
                </div>
                <div className="subtitulo">
                    <h2>Informações Gerais</h2>
                    <div className="infos">
                        <p className="pedido">Pedido n° 421-001004560 </p>
                        <p className="nota-fiscal">Nota fiscal: 551000 </p>
                    </div>
                </div>
            </div>

        </>

    );
}