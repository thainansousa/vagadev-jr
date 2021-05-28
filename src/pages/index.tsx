import styles from './home.module.scss'

import Header from "../components/Header";
import Footer from '../components/Footer';
import { useContext, useState } from 'react';
import { BagContext } from '../Context/BagContext';

export default function Home() {

  const { hasFineshed, closeModal } = useContext(BagContext)

  const [cart, setCart] = useState(0)
  const [banner, setBanner] = useState(1)
  const [outriders, setOutriders] = useState(false)
  const [cyberpunk, setCyberPunk] = useState(false)
  const [honkeyKong, setHonkeyKong] = useState(false)

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
  function productOne() {
    if (outriders) {
      setOutriders(false)
      setCart(cart - 1)
    } else {
      setOutriders(true)
      setCart(cart + 1)
    }
  }
  function productTwo() {
    if (cyberpunk) {
      setCyberPunk(false)
      setCart(cart - 1)
    } else {
      setCyberPunk(true)
      setCart(cart + 1)
    }
  }
  function productThree() {
    if (honkeyKong) {
      setHonkeyKong(false)
      setCart(cart - 1)
    } else {
      setHonkeyKong(true)
      setCart(cart + 1)
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
                  {!outriders ? (
                    <div>
                      <button onClick={productOne}>Comprar</button>
                    </div>
                  ) : (
                    <div>
                      <button className={styles.purchased} onClick={productOne}>
                        Comprado!
                      <img src="/svgs/mario.png" alt="" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.spotlight_banner}>
              <div>
                <img src="/img/cyberpunk.jpg" alt="" />
                <div className={styles.spotlight_banner_info}>
                  <span>CyberPunk 2077</span>
                  <span>R$ 200,00</span>
                  {!cyberpunk ? (
                    <div>
                      <button onClick={productTwo}>Comprar</button>
                    </div>
                  ) : (
                    <div>
                      <button className={styles.purchased} onClick={productTwo}>
                        Comprado!
                      <img src="/svgs/mario.png" alt="" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={styles.spotlight_banner}>
              <div>
                <img src="/img/donkeykong.png" alt="" />
                <div className={styles.spotlight_banner_info}>
                  <span>Donkey Kong Country Tropical Freeze</span>
                  <span>R$ 200,00</span>
                  {!honkeyKong ? (
                    <div>
                      <button onClick={productThree}>Comprar</button>
                    </div>
                  ) : (
                    <div>
                      <button className={styles.purchased} onClick={productThree}>
                        Comprado!
                      <img src="/svgs/mario.png" alt="" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {hasFineshed &&
        <div className={styles.modal_Container}>
          <div className={styles.modal}>
            <div>
              <img src="/svgs/close_btn.svg" alt="" onClick={closeModal} />
            </div>
            <div>
              <h2>Pedido realizado com sucesso!</h2>
              <img src="/svgs/mario.png" alt="" />
            </div>
          </div>
        </div>
      }

      <Footer />
    </div >
  )
}
