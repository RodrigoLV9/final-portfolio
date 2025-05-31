import HeroInfo from "./HeroInfo"
import HeroImage from "./HeroImage"
import styles from '../../styles/Hero.module.css'
import { BgParticles } from "./BgParticles"
export default function Hero(){
    return(
        <section className={styles.hero} id='home'>
            <HeroInfo/>
            <HeroImage/>
            <BgParticles/>
        </section>
    )
}