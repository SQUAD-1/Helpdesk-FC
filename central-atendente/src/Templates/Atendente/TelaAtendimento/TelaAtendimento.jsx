import { CabecalhoAtendimento } from "./CabecalhoAtendimento/CabecalhoAtendimento";
import { ConteudoAtendimento } from "./ConteudoAtendimento/ConteudoAtendimento";


export const TelaAtendimento = () => {
    return (
        <>
            <CabecalhoAtendimento />
            <ConteudoAtendimento/>
        </>
    );
}