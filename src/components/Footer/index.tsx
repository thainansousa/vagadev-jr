import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.logo}>
                <img src="/svgs/logo_agencia.svg" alt="" />
            </div>
            <span>Agência N1 - Todos os diretos reservados</span>
        </footer>
    )
}