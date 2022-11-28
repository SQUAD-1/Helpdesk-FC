import './ListaChamados.css'

export const ListaChamados = () => {
    return (
        <>
                <div id="atendimento">
                    <div className="containerTopo">
                        <h1 className="usuario">Chamados</h1>
                        <div className="filtro">
                            <nav className="dp-menu-chamados">
                                <ul className="lista">

                                    <li><a href="#">Ordenar por vez <img src="images/calendario/setabaixo.svg" alt="" /></a>
                                        <ul>
                                            <li><a href="#">Nome</a></li>
                                            <li><a href="#">Motivo</a></li>
                                            <li><a href="#">SLA</a></li>
                                            <li><a href="#">Prioridade</a></li>
                                            <li><a href="#">Chamado</a></li>
                                            <li><a href="#">Nº de atendimento</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="font-600">Nº de Atendimento</th>
                                <th className="font-600">Cliente</th>
                                <th className="font-600">Motivo</th>
                                <th className="font-600">SLA</th>
                                <th className="font-600">Canal</th>
                                <th className="font-600">Prioridade</th>
                                <th className="font-600">Aberto em</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr className="linhas">
                            <td className="first-td font-500">00000.000-00</td>
                            <td className="font-500">Lorem Ipsum</td>
                            <td className="font-500">Entrega não...</td>
                            <td className="font-500">00.00</td>
                            <td className="font-500">Telefone</td>
                            <td className="font-500">Baixa</td>
                            <td className="font-500">20/11/2022</td>
                            <td className="img-td font-500"><img src="images/View Details.svg" alt="" /><img src="images/atendimentos/Live.svg" alt="" /></td>


                            </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                                <tr className="linhas">
                                    <td className="first-td font-500">00000.000-00</td>
                                    <td className="font-500">Lorem Ipsum</td>
                                    <td className="font-500">Entrega não...</td>
                                    <td className="font-500">00.00</td>
                                    <td className="font-500">Telefone</td>
                                    <td className="font-500">Baixa</td>
                                    <td className="font-500">20/11/2022</td>
                                    <td className="img-td font-500"><img src="images/View Details.svg" alt="" /></td>
                                </tr>
                            </tbody>
                    </table>
                </div>
        </>
    )
}