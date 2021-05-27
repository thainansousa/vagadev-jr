import styles from './header.module.scss'

export default function Header(props) {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <img src="/svgs/icon_hamburguer.svg" alt="icon menu" />
                <img src="/svgs/logo.svg" alt="Logo N1RUSH" />
            </div>
            <div className={styles.menu_icons}>
                <img src="/svgs/paper-plane.svg" alt="send" />
                <span className={styles.visible}>Contato</span>
                <img src="/svgs/search-solid.svg" alt="search" />
                <span className={styles.visible}>Buscar</span>
                <div>
                    <img src="/svgs/shopping-bag-solid.svg" alt="bag" />
                    <span>{props.item}</span>
                </div>
            </div>
        </header>
    )
}