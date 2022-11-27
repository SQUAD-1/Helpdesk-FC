import { CampoInformacoes } from "../../../Components/Campos/CampoInformacoes"
import { Select } from "../../../Components/Select/Select"
import styles from './AbrirAtendimento.module.css'

import tv from '../../../assets/imgItens/tv.svg'
import arCondicionado from '../../../assets/imgItens/arCondicionado.svg'
import geladeira from '../../../assets/imgItens/geladeira.svg'

import file from '../../../assets/imgItens/file.svg'
import arquivo from '../../../assets/imgItens/arquivo.svg'
import arquivo2 from '../../../assets/imgItens/arquivo2.svg'
import arquivoImg from '../../../assets/imgItens/arquivoImg.svg'
import moveFiles from '../../../assets/imgItens/moveFiles.svg'
import { Menu } from "../../../Components/Menu/Menu"

export const AtendimentoChamado = () => {
    return (
        <section>
            <Menu />
            <h1 className={styles.tituloChamado}>Abrir Atendimento</h1>

            <div className={styles.containerInfors}>

                <div className={styles.InforCpf}>
                    <CampoInformacoes titulo="CPF" informacao="702.492.125-90" />
                </div>

                <div className={styles.groupInforsII}>
                    <CampoInformacoes titulo="Nome" informacao="Luiz Henrique Motta" />
                    <CampoInformacoes className={styles.cep} titulo="CEP" informacao="05204-533" />
                    <CampoInformacoes className={styles.endereco} titulo="Endereço" informacao="Rua dos Amores, 952..." />
                </div>


                <div className={styles.groupInforsIII}>
                    <CampoInformacoes titulo="Email" informacao="luizmottok@fcx.com.br" />
                    <CampoInformacoes titulo="Telefone" informacao="(81) 98452 - 0004" />
                </div>
            </div>

            <div className={styles.selectGroupI}>
                <Select className={styles.pedido} titulo="Pedido" value="numPedido" text="Pedido nº 241-001004560" />
                <Select titulo="Canal de Vendas" value="canalVen" text="Loja Física" />
                <Select titulo="Unidade" value="unidade" text="Ferreira Costa Ibiribeira" />
            </div>

            <div className={styles.itens}>
                <h3>Itens</h3>
                <img src={tv} alt="tv" />
                <img src={arCondicionado} alt="arCondicionado" />
                <img src={geladeira} alt="geladeira" />
            </div>

            <div className={styles.selectGroupIV}>
                <Select titulo="Tipo de Chamada" value="tipoChamada" text="Reclamação" />
                <Select titulo="Incidete/Requisição" value="requisicao" text="Produto não Entregue" />
                <Select titulo="Setor Relacionamento" value="logistica" text="Logística" />
            </div>

            <div className={styles.selectGroupV}>
                <Select titulo="Impacto" value="impacto" text="Alto" />
                <Select titulo="Prioridade" value="prioridade" text="Alto" />
            </div>

            <aside className={styles.aside}>
                <h3>Anexos</h3>
                <div className={styles.asideGroup}>
                    <img className={styles.file} src={file} alt="File" />
                    <img className={styles.arquivo} src={arquivo} alt="Arquivo" />
                    <img className={styles.arquivo2} src={arquivo2} alt="Arquivo Dois" />
                    <img className={styles.arquivoImg} src={arquivoImg} alt="Aquivo Imagem" />
                    <img className={styles.moveFiles} src={moveFiles} alt="Retornar Imagem" /> {/*Isso Será um Botão */}

                </div>
            </aside>

            <article className={styles.descContainer}>
                <h3>Descrição <p className={styles.pAst}>*</p></h3>

                <div className={styles.desc}>
                    <p>O eletrodoméstico Geladeira Refrigerador Consul Frost Free Duplex 410L, que estava previsto para ser entregue no dia 17/09/22, acabou não sendo entregue.</p>
                </div>
            </article>

            <article className={styles.obsContainer}>
                <h3>Observação <p className={styles.pAst}>*</p> </h3>

                <div className={styles.obs}>
                    <p>O eletrodoméstico Geladeira Refrigerador Consul Frost Free Duplex 410L, que estava previsto para ser entregue no dia 17/09/22, acabou não sendo entregue.</p>
                </div>
            </article>

        </section>
    )
}