import './InputButton.css'

export const InputButton = ({text}) => {

    return(
        <section>
            <input className="inputButton" type="button" value={text} />
        </section>
    )

}
