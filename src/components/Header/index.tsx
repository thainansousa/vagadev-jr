import styles from './header.module.scss'

export default function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.logo}>
                <img src="/svgs/icon_hamburguer.svg" alt="icon menu" />
                <img src="/svgs/logo.svg" alt="Logo N1RUSH" />
            </div>
            <div className={styles.menu_icons}>
                <img src="/svgs/paper-plane.svg" alt="send" />
                <img src="/svgs/search-solid.svg" alt="search" />
                <img src="/svgs/shopping-bag-solid.svg" alt="Logo N1RUSH" />
            </div>
        </header>
    )
}