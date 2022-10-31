import { Contato } from "./Contato/Contato"
import { Endereco } from "./Endereco/Endereco"
import { Informacoes } from "./Informacoes/Informacoes"

export const Dados = () => {
    return(
        <>

            <Informacoes nome="Luiz Mota" nomeCompleto="Luiz Henrique Mota" dataNasciemento="24/11/1978" cpf="081.340.051-01" rg="513.431-02" />
            
            <Contato tel="Não disponibilizado" cel="(81) 98452 - 0004" whats="Sim" email="luizmottak@fcx.com.br" />

            <Endereco endereco="Rua dos Amores" numero="952" complemento="Sem Complemento" referencia="Próximo ao Chão" cidade="Recife" estado="Pernambuco" cep="05204-533" />

        </>
    )
}