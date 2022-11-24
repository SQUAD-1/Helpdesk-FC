import styles from './sideBarAtendente.module.css'

export const SideBarAtendente = () => {

    const now = new Date();
    const dia = now.getDay();
    const mes = now.getMonth();
    const ano = now.getFullYear();
    const hours = now.getHours();

    return(
        <section className={styles.container}>
            <div className={styles.hours}>
                {hours}
            </div>
        </section>
    )
}