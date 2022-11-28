import './Conteudo.css';

import ViewDetails from '../../../../assets/imagens/ViewDetails.svg'

export const Conteudo = () => {
    return (
        <>
            <div className="content-conteiner">
                <div className="cabecalho">
                    <h1 className="usuario">Bom dia, José Vinicius!</h1>
                    <div style="display: flex;">
                        <div className="data"><span>Hoje
                            18/09/2022</span>
                        </div>
                        <div className="data-calendar">
                            <img className="calendar" />
                        </div>
                    </div>
                </div>

                <div>
                    <div id="graficos" className="graficos">
                        <canvas id="grafico2" className="grafico2"></canvas>
                        <div className="total-atend">
                            <div className="titulo-atend">
                                <p style="color: #53565A">Total de atendimentos</p>
                                <p>94 atendimentos</p>
                                <p style="color:#e71c35">Em andamento</p>
                                <p>21 atendimentos</p>
                                <p style="color:#c1d82f">Em fila</p>
                                <p>51 atendimentos</p>
                                <p style="color:#7ac143">Concluídos</p>
                                <p>22 atendimentos</p>
                            </div>
                        </div>

                        <div className="barra"></div>

                        <div>
                            <div className="titulo-atend2">
                                <div>
                                    <p className="font-600">Chamados criados</p>
                                    <p className="font-400">17 chamados</p>
                                    <p className="font-600">Chamados fechados</p>
                                    <p className="font-400">09 chamados</p>
                                    <p className="font-600">Chamados sem interação</p>
                                    <p className="font-400">03 chamados</p>
                                </div>
                                <div id="chamados-2">
                                    <p className="font-600">Tempo médio de resposta</p>
                                    <p className="font-400">23 minutos</p>
                                    <p className="font-600">Tempo médio por ligação</p>
                                    <p className="font-400">03 minuots</p>
                                    <p className="font-600">Chamado a vencer (48h)</p>
                                    <p className="font-400">07 chamados</p>
                                </div>
                            </div>

                            <div>
                                <canvas id="grafico1" className="grafico1"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-Atend">
                    <div className="titulo3 font-600" id="principais">
                        <h3 style="margin-top: 10px;"> Principais Motivos </h3>
                    </div>

                    <div className="dados font-600-12">
                        <p>33% - Dano cosmético</p>
                        <p>21% - Entrega não... </p>
                        <p>15% - Lista de casamento</p>
                        <p>13% - Garantia de produto</p>
                        <p>5% - Produto não funciona</p>
                        <p> 13% - Outros</p>
                    </div>
                    <div id="atendimento">
                        <div className="titulo4">
                            <h2 style="font-size: 20px; font: inter;">Atendimentos em progresso</h2>
                            <p style="color: #436A25;font-size: 16px;">Mostrar tudo</p>
                        </div>
                        <div id="lista-Atendimento">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="font-600">Nº de Atendimento</th>
                                        <th className="font-600">Cliente</th>
                                        <th className="font-600">Motivo</th>
                                        <th className="font-600">Abertura</th>
                                        <th className="font-600">SLA</th>
                                        <th className="font-600">Canal</th>
                                        <th className="font-600">Prioridade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""> </img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>       <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>     <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>    <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>      
                                    <tr className="linhas">
                                        <td className="first-td font-500">00000.000-00</td>
                                        <td className="font-500">Lorem Ipsum</td>
                                        <td className="font-500">Entrega não...</td>
                                        <td className="font-500">00.00</td>
                                        <td className="font-500">0:00</td>
                                        <td className="font-500">Telefone</td>
                                        <td className="font-500">Baixa</td>
                                        <td className="img-td font-500"><img src={ViewDetails} alt=""></img></td>
                                    </tr>

                                </tbody>
                            </table>

                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}
