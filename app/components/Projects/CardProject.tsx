import { AiOutlineGlobal as WebIcon } from "react-icons/ai";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { RiNextjsLine as NextIcon } from "react-icons/ri";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaCss3 as CssIcon } from "react-icons/fa";
import { SiMongodb as MongoIcon} from "react-icons/si";
import styles from '../../styles/Projects.module.css'
export default function CardProject(){
    return(
        <div className={styles.card}>
            <div className={styles.image}></div>
            <ul className={styles.tags}>
                <li>
                    <NextIcon/>
                    <p>Next</p>
                </li>
                <li>
                    <ReactIcon/>
                    <p>React</p>
                </li>
                <li>
                    <CssIcon/>
                    <p>Css</p>
                </li>
                <li>
                    <MongoIcon/>
                    <p>MongoDB</p>
                </li>
            </ul>
            <h4>Weather App</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur aspernatur atque quo quia molestias officiis quae? Minima perspiciatis libero laboriosam ullam, repellat molestias magni culpa at facilis voluptate hic illo.</p>
            <div className={styles.button}>
                <button className={styles.button__demo}>
                    <WebIcon className={styles.button_icon}/>
                    <p>Demo</p>
                </button>
                <button className={styles.button__github}>
                    <GithubIcon className={styles.button_icon}/>
                    <p>Github</p>
                </button>
            </div>
        </div>
    )
}