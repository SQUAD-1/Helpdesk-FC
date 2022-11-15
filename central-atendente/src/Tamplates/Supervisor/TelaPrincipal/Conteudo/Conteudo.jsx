import '/Conteudo.css';

export const Conteudo = () => {
    return (
        <>
            <div class="content-conteiner">
                <div class="cabecalho">
                    <h1 class="usuario">Bom dia, José Vinicius!</h1>
                    <div style="display: flex;">
                        <div class="data"><span>Hoje
                            18/09/2022</span>
                        </div>
                        <div class="data-calendar">
                            <img class="calendar"></img>
                        </div>
                    </div>
                </div>

                <div>
                    <div id="graficos" class="graficos">
                        <canvas id="grafico2" class="grafico2"></canvas>
                        <div class="total-atend">
                            <div class="titulo-atend">
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

                        <div class="barra"></div>

                        <div>
                            <div class="titulo-atend2">
                                <div>
                                    <p class="font-600">Chamados criados</p>
                                    <p class="font-400">17 chamados</p>
                                    <p class="font-600">Chamados fechados</p>
                                    <p class="font-400">09 chamados</p>
                                    <p class="font-600">Chamados sem interação</p>
                                    <P class="font-400">03 chamados</P>
                                </div>
                                <div id="chamados-2">
                                    <p class="font-600">Tempo médio de resposta</p>
                                    <p class="font-400">23 minutos</p>
                                    <p class="font-600">Tempo médio por ligação</p>
                                    <p class="font-400">03 minuots</p>
                                    <p class="font-600">Chamado a vencer (48h)</p>
                                    <P class="font-400">07 chamados</P>
                                </div>
                            </div>

                            <div>
                                <canvas id="grafico1" class="grafico1"></canvas>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-Atend">
                    <div class="titulo3 font-600" id="principais">
                        <h3 style="margin-top: 10px;"> Principais Motivos </h3>
                    </div>

                    <div class="dados font-600-12">
                        <p>33% - Dano cosmético</p>
                        <p>21% - Entrega não... </p>
                        <p>15% - Lista de casamento</p>
                        <p>13% - Garantia de produto</p>
                        <p>5% - Produto não funciona</p>
                        <p> 13% - Outros</p>
                    </div>
                    <div id="atendimento">
                        <div class="titulo4">
                            <h2 style="font-size: 20px; font: inter;">Atendimentos em progresso</h2>
                            <p style="color: #436A25;font-size: 16px;">Mostrar tudo</p>
                        </div>
                        <div id="lista-Atendimento">
                            <table>
                                <thead>
                                    <tr>
                                        <th class="font-600">Nº de Atendimento</th>
                                        <th class="font-600">Cliente</th>
                                        <th class="font-600">Motivo</th>
                                        <th class="font-600">Abertura</th>
                                        <th class="font-600">SLA</th>
                                        <th class="font-600">Canal</th>
                                        <th class="font-600">Prioridade</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""> </img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>       <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>     <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>    <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
                                    </tr>      
                                    <tr class="linhas">
                                        <td class="first-td font-500">00000.000-00</td>
                                        <td class="font-500">Lorem Ipsum</td>
                                        <td class="font-500">Entrega não...</td>
                                        <td class="font-500">00.00</td>
                                        <td class="font-500">0:00</td>
                                        <td class="font-500">Telefone</td>
                                        <td class="font-500">Baixa</td>
                                        <td class="img-td font-500"><img src="images/View Details.svg" alt=""></img></td>
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
