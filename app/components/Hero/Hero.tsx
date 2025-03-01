import HeroInfo from "./HeroInfo"
import HeroImage from "./HeroImage"
import styles from '../../styles/Hero.module.css'
export default function Hero(){
    return(
        <section className={styles.hero}>
            <HeroInfo/>
            <HeroImage/>
        </section>
    )
}