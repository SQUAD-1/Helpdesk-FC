import styles from './Select.module.css'

export const Select = ({titulo, value, text}) => {

    return(
        <div className={styles.select}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <select className={styles.option}>
                <option  value={value}> {text} </option>
            </select>
        </div>
    )
}