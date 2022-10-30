import mute from '../imgComponents/BlockMicrophone.svg'
import transfer from '../imgComponents/CallTransfer.svg'
import altoFalante from '../imgComponents/Speaker.svg'
import desligar from '../imgComponents/Rectangle134.svg'

export const InfoChamada = () => {
    return(
        <article className="infoChamada">
                <div className='detalheChamada'>
                    <h4>Chamada</h4>
                    <h1> 00 : 00 </h1> {/*Cronometro da ligação */}
                    <h6>Nº de telefone</h6>
                        <h5>+55 (81)9 9999 - 9999</h5>
                    <h6>Ligou para</h6>
                        <h5>Ferreira Costa Ibiribeira</h5>
                </div>

                    <div className="iconLigacao">
                            <img className="iconMute" src={mute} alt="Mute" />
                            <img className='iconTranfer' src={transfer} alt="Transferir Mute" />
                            <img className='iconAlto' src={altoFalante} alt="Alto Falante" />
                            <img className='iconDesligar' src={desligar} alt="Desligar" />

                    </div>
            </article>
    )
}