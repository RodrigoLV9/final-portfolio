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
                <p>Desarrollador de software con más de 3 años de experiencia como freelancer en frontend y backend. Especializado en desarrollo frontend, creando interfaces modernas y eficientes. Desde Buenos Aires, Argentina.</p>
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
