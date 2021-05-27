import styles from './home.module.scss'

import Header from "../components/Header";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner_container}>
        <Header />
        <img src="/img/principal_banner_mobile.jpg" alt="banner 01" className={styles.banner} />
        <div className={styles.info_banner_container}>
          <div className={styles.info_banner}>
            <h2> Mortal Kombat</h2>
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
      <div className={styles.navegation_container}>
        <div className={styles.game}>
          <span>Mortal Kombat</span>
        </div>
        <div className={styles.navegation}>
          <div>
            <span>1</span>
            <span>/</span>
            <span>2</span>
          </div>
          <img src="/svgs/angle-left-solid.svg" alt="back" />
          <img src="/svgs/angle-right-solid.svg" alt="next" />
        </div>
      </div>
      <section className={styles.spotlight_container}>
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

        <div className={styles.spotlight}>
          <div>
            <h2>Produtos em destaque</h2>
          </div>
          <div className={styles.spotlight_banner}>
            <div>
              <img src="/img/outriders.jpeg" alt="" />
              <div className={styles.spotlight_banner_info}>
                <span>Outriders</span>
                <span>R$ 200,00</span>
                <div>
                  <button>Comprar</button>
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
