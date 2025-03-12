import styles from '../../styles/Hero.module.css'
import Image from 'next/image'
export default function HeroImage(){
    return(
        <div className={styles.hero__containerImage}>
            <Image className={styles.hero__image} src='/programmer3.png' alt='programmer-image' width={300} height={300}/>
        </div>
    )
}