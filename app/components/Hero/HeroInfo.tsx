import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaGithub as GithubIcon,FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaFacebookSquare as FacebookIcon } from "react-icons/fa";
import { SiGmail as GmailIcon } from "react-icons/si";
import { HiOutlineDownload as DownloadIcon } from "react-icons/hi";
import styles from '../../styles/Hero.module.css'
export default function HeroInfo(){
    return(
        <div className={styles.heroInfo}>
            <div className={styles.heroInfo__text}>
                <h2>Hey, i am</h2>
                <h1>RODRIGO LV</h1>
                <h3>Fullstack developer</h3>
                <p><span className={styles.word_animation1}>Desarrollador de software</span> con más de <span className={styles.word_animation2}>3 años de experiencia</span> como freelancer en <span className={styles.word_animation3}>frontend y backend</span>. Especializado en desarrollo frontend, creando interfaces modernas y eficientes. Desde <span className={styles.word_animation4}>Buenos Aires, Argentina.</span></p>
            </div>
            <div className={styles.heroInfo__links}>
                <a href="#">
                    <LinkedinIcon/>
                </a>
                <a href="#">
                    <GithubIcon/>
                </a>
                <a href="#">
                    <InstagramIcon/>
                </a>
                <a href="#">
                    <FacebookIcon/>
                </a>
                <a href="#">
                    <GmailIcon/>
                </a>
            </div>
            <button type="button" className={styles.heroInfo__button}>
                <DownloadIcon className={styles.heroInfo__button_icon}/>
                <p>Download CV</p>
            </button>
        </div>
    )
}
