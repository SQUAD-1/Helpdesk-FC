import './InputButton.css'

export const InputButton = ({text}) => {

    return(
        <section>
            <div>
                <input className="inputButton" type="button" value={text} />
            </div>
        </section>
    )

}
