import styles from './CampoInformacoes.module.css'

export const CampoInformacoes = ({titulo, informacao}) => {
    return(
         <div className={styles.campoContainer} >
            <div >
               <h3>{titulo}</h3>
               <p className={styles.campoInfo}> {informacao} </p>
            </div>
         </div>
    )
}