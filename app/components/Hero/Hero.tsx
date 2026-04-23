import HeroInfo from "./HeroInfo"
import HeroImage from "./HeroImage"
import styles from '../../styles/Hero.module.css'
import { BgParticles } from "./BgParticles"
export default function Hero(){
    return(
        <section className={styles.hero} id='home'>
            <div className={styles.heroBackdrop} aria-hidden='true'>
                <span className={`${styles.blob} ${styles.blobOne}`}></span>
                <span className={`${styles.blob} ${styles.blobTwo}`}></span>
                <span className={`${styles.blob} ${styles.blobThree}`}></span>
            </div>
            <BgParticles/>
            <div className={styles.heroLayout}>
                <HeroInfo/>
                <HeroImage/>
            </div>
        </section>
    )
}