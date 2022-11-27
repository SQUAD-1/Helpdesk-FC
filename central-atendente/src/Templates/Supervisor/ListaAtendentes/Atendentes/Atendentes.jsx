import './Atendentes.css';

import imgperfil from '../../../../assets/imagens/atendimentos/imgperfil.svg'
import Enter from '../../../../assets/imagens/atendimentos/Enter.svg'
import Star from '../../../../assets/imagens/atendimentos/Star.svg'

export const Atendentes = () => {
    return (
        <>
            <div className="container-Atend">
                <div className="atendimento">
                    <div>
                        <h1 className="usuario">Lista de Atendentes</h1>
                    </div>
                    <div id="lista-Atendimento">
                        <table>
                            <thead>
                                <tr>
                                    <th className="font-600"></th>
                                    <th className="font-600">Nome</th>
                                    <th className="font-600">Equipe</th>
                                    <th className="font-600">N° Atendimentos</th>
                                    <th className="font-600">SLA médio</th>
                                    <th className="font-600"><img src={Star} alt=""/></th>
                                    <th className="font-600">Status</th>

                                </tr>
                            </thead>
                            <tbody>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Alisson Jesus</td>
                                <td className="font-500">Back Office</td>
                                <td className="font-500">14 Atendimento</td>
                                <td className="font-500">12 minutos</td>
                                <td className="font-500">4,3</td>
                                <td className="font-500">Em chamada</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Camylla Oliveira</td>
                                <td className="font-500">Atendimento</td>
                                <td className="font-500">16 atendimentos</td>
                                <td className="font-500"> 15 minutos</td>
                                <td className="font-500"> 4,7</td>
                                <td className="font-500">Em pausa</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Larissa Alves</td>
                                <td className="font-500">Atendimento</td>
                                <td className="font-500">22 atendimentos</td>
                                <td className="font-500">6 minutos </td>
                                <td className="font-500">4,2</td>
                                <td className="font-500">Em chamada</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Lívia Almeilda</td>
                                <td className="font-500">Atendimento</td>
                                <td className="font-500">10 atendimentos</td>
                                <td className="font-500">14 minutos</td>
                                <td className="font-500">4,1</td>
                                <td className="font-500">Vendo emails</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Marcus Pontes</td>
                                <td className="font-500">Back Office</td>
                                <td className="font-500">12 atendimentos</td>
                                <td className="font-500">12 minutos</td>
                                <td className="font-500">4,0</td>
                                <td className="font-500">Em pausa</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Pedro Sampaio</td>
                                <td className="font-500">Atendimento</td>
                                <td className="font-500">16 atendimentos</td>
                                <td className="font-500">11 minutos </td>
                                <td className="font-500">4,3</td>
                                <td className="font-500">Em chamada</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Raul Severo</td>
                                <td className="font-500">Atendimento</td>
                                <td className="font-500">21 atendimentos</td>
                                <td className="font-500">6 minutos</td>
                                <td className="font-500">4,2</td>
                                <td className="font-500">Vendo emails</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Roberta Larissa</td>
                                <td className="font-500">Atendimento</td>
                                <td className="font-500">11 atendimentos</td>
                                <td className="font-500">13 minutos</td>
                                <td className="font-500">4,6</td>
                                <td className="font-500">Em chamada</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Sabrina Rob...</td>
                                <td className="font-500">Atendimento</td>
                                <td className="font-500">17 atendimentos</td>
                                <td className="font-500">9 minutos</td>
                                <td className="font-500">4.9</td>
                                <td className="font-500">Vendo emails</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className="linhas">
                                <td className="first-td"><img src={imgperfil} alt=""/></td>
                                <td className="font-500">Wellington Br...</td>
                                <td className="font-500">Back Office</td>
                                <td className="font-500">24 atendimentos</td>
                                <td className="font-500">5 minutos </td>
                                <td className="font-500">4,3</td>
                                <td className="font-500">Em pausa</td>
                                <td className="img-td font-500"><img src={Enter} alt=""/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}