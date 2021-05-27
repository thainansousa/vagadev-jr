import styles from './home.module.scss'

import Header from "../components/Header";
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Home() {

  const [cart, setCart] = useState(0)
  const [banner, setBanner] = useState(1)


  function buy() {
    setCart(cart + 1)
  }
  function back() {
    if (banner === 2) {
      setBanner(1)
    }
  }
  function next() {
    if (banner === 1) {
      setBanner(2)
    }
  }
  return (
    <div className={styles.container}>
      <Header item={cart} />
      <div className={styles.banner_container}>
        {banner == 1 ? (
          <div>
            <img src="/img/principal_banner_desktop.jpg" alt="banner 01" className={styles.banner_desktop} />
            <img src="/img/principal_banner_mobile.jpg" alt="banner 01" className={styles.banner_mobile} />
            <div className={styles.info_banner_container}>
              <div className={styles.info_banner}>
                <h2>Mortal Kombat</h2>
                <div>
                  <h1>R$ 299</h1>
                  <span>,99</span>
                </div>
                <p>
                  Mortal Kombat X combina uma apresentação cinemática única com uma jogabilidade totalmente nova.
                  Os jogadores podem escolher pela primeira vez diversas variantes de cada personagem, afetando
                  tanto a estratégia como o estilo de luta.
            </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <img src="/img/principal_banner_desktop_02.jpg" alt="banner 02" className={styles.banner_desktop} />
            <img src="/img/principal_banner_mobile_02.jpg" alt="banner 02" className={styles.banner_mobile} />
            <div className={styles.info_banner_container}>
              <div className={styles.info_banner}>
                <h2>Red Dead Redemption 2</h2>
                <div>
                  <h1>R$ 199</h1>
                  <span>,99</span>
                </div>
                <p>
                  A história se passa em 1899 em uma representação ficcional do oeste, meio-oeste e sul dos
                  Estados Unidos e acompanha o fora da lei Arthur Morgan, que precisa lidar com o declínio do Velho Oeste
                  e sobreviver à perseguição de forças governamentais, gangues rivais e outros adversários.
            </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.navegation_container}>
        <div className={styles.game}>
          {banner === 1 ? (
            <span>Mortal Kombat</span>
          ) : (
            <span>Red Dead Redemption 2</span>
          )}
        </div>
        <div className={styles.navegation}>
          <div>
            <span>{banner}</span>
            <span>/</span>
            <span>2</span>
          </div>
          <img src="/svgs/angle-left-solid.svg" alt="back" onClick={back} />
          <img src="/svgs/angle-right-solid.svg" alt="next" onClick={next} />
        </div>
      </div>
      <section className={styles.games_container}>
        <div className={styles.middle_banner}>
          <img src="/img/zelda_banner.jpg" alt="" />
          <div className={styles.middle_banner_info}>
            <p>The Legend of Zelda - Breath of th wild</p>
          </div>
        </div>
        <div className={styles.middle_banner}>
          <img src="/img/sekiro_banner.jpg" alt="" />
          <div className={styles.middle_banner_info}>
            <p>SEKIRO - Shadows die twice</p>
          </div>
        </div>
      </section>
      <section className={styles.spotlight_container}>
        <div className={styles.spotlight}>
          <div>
            <h2>Produtos em destaque</h2>
          </div>
          <div className={styles.spotlight_banner_container}>
            <div className={styles.spotlight_banner}>
              <div>
                <img src="/img/outriders.jpeg" alt="" />
                <div className={styles.spotlight_banner_info}>
                  <span>Outriders</span>
                  <span>R$ 200,00</span>
                  <div>
                    <button onClick={buy}>Comprar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.spotlight_banner}>
              <div>
                <img src="/img/outriders.jpeg" alt="" />
                <div className={styles.spotlight_banner_info}>
                  <span>Outriders</span>
                  <span>R$ 200,00</span>
                  <div>
                    <button onClick={buy}>Comprar</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.spotlight_banner}>
              <div>
                <img src="/img/outriders.jpeg" alt="" />
                <div className={styles.spotlight_banner_info}>
                  <span>Outriders</span>
                  <span>R$ 200,00</span>
                  <div>
                    <button onClick={buy}>Comprar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div >
  )
}
