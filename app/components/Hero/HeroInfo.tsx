import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { FaFacebookSquare as FacebookIcon } from "react-icons/fa";
import { SiGmail as GmailIcon } from "react-icons/si";
import { HiOutlineDownload as DownloadIcon } from "react-icons/hi";
import styles from '../../styles/Hero.module.css'
export default function HeroInfo(){
    return(
        <div className={styles.heroInfo}>
            <div className={styles.heroInfo__text}>
                <h1>HEY, I AM RODRIGO LV</h1>
                <h3>Fullstack developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, cumque? Facere eum porro sed quae quos velit aliquid dolorem! Delectus provident impedit veritatis eveniet facere animi laborum! Recusandae, esse possimus!</p>
            </div>
            <div className={styles.heroInfo__links}>
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
