import { useContext, useState } from 'react'
import { BagContext } from '../../Context/BagContext'
import styles from './header.module.scss'

export default function Header(props) {

    const { bagFineshed } = useContext(BagContext)

    const [menuMobile, setMenuMobile] = useState(false)

    function openMenu() {
        setMenuMobile(true)
    }
    function closeMenu() {
        setMenuMobile(false)
    }

    return (
        <>
            <header className={styles.container}>
                <div className={styles.menu_itens}>
                    <div className={styles.logo}>
                        {menuMobile ? (
                            <img src="/svgs/close_btn.svg" alt="icon menu" onClick={closeMenu} />
                        ) : (
                            <img src="/svgs/icon_hamburguer.svg" alt="icon menu" onClick={openMenu} />
                        )}
                        <img src="/svgs/logo.svg" alt="Logo N1RUSH" />
                    </div>
                    <div className={styles.menu_icons}>
                        <div>
                            <img src="/svgs/paper-plane.svg" alt="send" />
                            <a className={styles.visible}>Contato</a>
                        </div>
                        <span className={styles.rule}>|</span>
                        <div>
                            <img src="/svgs/search-solid.svg" alt="search" />
                            <a className={styles.visible}>Buscar</a>
                        </div>
                        <span className={styles.rule}>|</span>
                        <div className={styles.bag} onClick={bagFineshed}>
                            <img src="/svgs/shopping-bag-solid.svg" alt="bag" />
                            <a>{props.item}</a>
                        </div>
                    </div>
                </div>
                {menuMobile &&
                    <>
                        <div className={styles.menu_mobile}>
                            <div>
                                <div>
                                    <h2>Luta</h2>
                                    <ul>
                                        <li><a href="#" className={styles.selected}>Mortal Kombat</a></li>
                                        <li><a href="#">Smash Bros</a></li>
                                        <li><a href="#">Killer Instict</a></li>
                                        <li><a href="#">DBZ Kakarot</a></li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <h2>Ação / Aventura</h2>
                                    <ul>
                                        <li><a href="#">GTA V</a></li>
                                        <li><a href="#">Tomb Raider</a></li>
                                        <li><a href="#">HALO</a></li>
                                        <li><a href="#">Call of Duty</a></li>
                                    </ul>
                                </div>
                                <hr />
                                <div>
                                    <h2>Corrida</h2>
                                    <ul>
                                        <li><a href="#">NEED For SPEED</a></li>
                                        <li><a href="#">Forza Horizon</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.menu_desktop}>
                            <div>
                                <div>
                                    <div>
                                        <h2>Luta</h2>
                                        <ul>
                                            <li><a href="#" className={styles.selected}>Mortal Kombat</a></li>
                                            <li><a href="#">Smash Bros</a></li>
                                            <li><a href="#">Killer Instict</a></li>
                                            <li><a href="#">DBZ Kakarot</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h2>Ação / Aventura</h2>
                                        <ul>
                                            <li><a href="#">GTA V</a></li>
                                            <li><a href="#">Tomb Raider</a></li>
                                            <li><a href="#">HALO</a></li>
                                            <li><a href="#">Call of Duty</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <h2>Corrida</h2>
                                        <ul>
                                            <li><a href="#">NEED For SPEED</a></li>
                                            <li><a href="#">Forza Horizon</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            </header>
        </>
    )
}