import './Chamada.css'


import { HoraData } from './HoraData/HoraData'
import {HistoricoChamada} from './HistoricoChamada/HistoricoChamada'
import { Chat } from './Chat/Chat'

export const Chamada = () => {

    return(
        <section className='blockChamada'>
        
            <HoraData /> 

            <HistoricoChamada />

            <Chat />


        </section>
    )
}