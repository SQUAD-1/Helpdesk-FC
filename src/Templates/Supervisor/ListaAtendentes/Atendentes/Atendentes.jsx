import styles from './Atendentes.module.css';

import imgperfil from '../../../../assets/imagens/atendimentos/imgperfil.svg'
import Enter from '../../../../assets/imagens/atendimentos/Enter.svg'
import Star from '../../../../assets/imagens/atendimentos/Star.svg'

export const Atendentes = () => {
    return (
        <>
            <div className={styles.containerAtend}>
                <div className={styles.atendimento}>
                    <div>
                        <h1 className={styles.usuario}>Lista de Atendentes</h1>
                    </div>
                    <div className={styles.listaAtendimento}>
                        <table>
                            <thead>
                                <tr>
                                    <th className={styles.font600}></th>
                                    <th className={styles.font600}>Nome</th>
                                    <th className={styles.font600}>Equipe</th>
                                    <th className={styles.font600}>N° Atendimentos</th>
                                    <th className={styles.font600}>SLA médio</th>
                                    <th className={styles.font600}><img src={Star} alt=""/></th>
                                    <th className={styles.font600}>Status</th>

                                </tr>
                            </thead>
                            <tbody>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Alisson Jesus</td>
                                <td className={styles.font500}>Back Office</td>
                                <td className={styles.font500}>14 Atendimento</td>
                                <td className={styles.font500}>12 minutos</td>
                                <td className={styles.font500}>4,3</td>
                                <td className={styles.font500}>Em chamada</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Camylla Oliveira</td>
                                <td className={styles.font500}>Atendimento</td>
                                <td className={styles.font500}>16 atendimentos</td>
                                <td className={styles.font500}> 15 minutos</td>
                                <td className={styles.font500}> 4,7</td>
                                <td className={styles.font500}>Em pausa</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Larissa Alves</td>
                                <td className={styles.font500}>Atendimento</td>
                                <td className={styles.font500}>22 atendimentos</td>
                                <td className={styles.font500}>6 minutos </td>
                                <td className={styles.font500}>4,2</td>
                                <td className={styles.font500}>Em chamada</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Lívia Almeilda</td>
                                <td className={styles.font500}>Atendimento</td>
                                <td className={styles.font500}>10 atendimentos</td>
                                <td className={styles.font500}>14 minutos</td>
                                <td className={styles.font500}>4,1</td>
                                <td className={styles.font500}>Vendo emails</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Marcus Pontes</td>
                                <td className={styles.font500}>Back Office</td>
                                <td className={styles.font500}>12 atendimentos</td>
                                <td className={styles.font500}>12 minutos</td>
                                <td className={styles.font500}>4,0</td>
                                <td className={styles.font500}>Em pausa</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Pedro Sampaio</td>
                                <td className={styles.font500}>Atendimento</td>
                                <td className={styles.font500}>16 atendimentos</td>
                                <td className={styles.font500}>11 minutos </td>
                                <td className={styles.font500}>4,3</td>
                                <td className={styles.font500}>Em chamada</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Raul Severo</td>
                                <td className={styles.font500}>Atendimento</td>
                                <td className={styles.font500}>21 atendimentos</td>
                                <td className={styles.font500}>6 minutos</td>
                                <td className={styles.font500}>4,2</td>
                                <td className={styles.font500}>Vendo emails</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Roberta Larissa</td>
                                <td className={styles.font500}>Atendimento</td>
                                <td className={styles.font500}>11 atendimentos</td>
                                <td className={styles.font500}>13 minutos</td>
                                <td className={styles.font500}>4,6</td>
                                <td className={styles.font500}>Em chamada</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Sabrina Rob...</td>
                                <td className={styles.font500}>Atendimento</td>
                                <td className={styles.font500}>17 atendimentos</td>
                                <td className={styles.font500}>9 minutos</td>
                                <td className={styles.font500}>4.9</td>
                                <td className={styles.font500}>Vendo emails</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                            <tr className={styles.linhas}>
                                <td className={styles.firstTd}><img src={imgperfil} alt=""/></td>
                                <td className={styles.font500}>Wellington Br...</td>
                                <td className={styles.font500}>Back Office</td>
                                <td className={styles.font500}>24 atendimentos</td>
                                <td className={styles.font500}>5 minutos </td>
                                <td className={styles.font500}>4,3</td>
                                <td className={styles.font500}>Em pausa</td>
                                <td className={styles.imgtdfont500}><img src={Enter} alt=""/></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
            
        </>
    );
}