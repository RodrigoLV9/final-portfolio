import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
export default function HeroImage(){
    return(
        <div className={styles.heroVisual}>
            <div className={styles.heroVisual__ring}></div>
            <div className={styles.heroVisual__ringSecondary}></div>
            <div className={styles.hero__containerImage}>
                <span className={styles.hero__imageGlow}></span>
                <Image
                    className={styles.hero__image}
                    src='/programmer3.png'
                    alt='programmer-image'
                    width={460}
                    height={460}
                    priority
                />
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardTop}`}>
                <p>Frontend Craft</p>
                <span>React · Next.js</span>
            </div>

            <div className={`${styles.floatingCard} ${styles.floatingCardBottom}`}>
                <p>Backend Logic</p>
                <span>Node · APIs · SQL</span>
            </div>
        </div>
    )
}