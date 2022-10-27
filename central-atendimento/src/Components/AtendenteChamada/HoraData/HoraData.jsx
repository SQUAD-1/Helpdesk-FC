import {hours, minutes, day, month, year} from './Date'

import './HoraData.css'

export const HoraData = () => {
    return(
        <header className="horaData">
                <div className="hora">
                    <h1>{hours}:{minutes}</h1>
                </div>
                <div className="data">
                    <p>{day} de {month} de {year}</p>
                </div>
            </header>
    )
}