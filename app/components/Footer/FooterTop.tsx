import { RiNextjsLine as NextIcon } from "react-icons/ri";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaCss3 as CssIcon } from "react-icons/fa";
import styles from '../../styles/Footer.module.css'
import Image from 'next/image'
export default function FooterTop(){
    return(
        <section className={styles.footerTop}>
            <div className={styles.left}>
                <Image
                    className={styles.left__logo}
                    src={'/logo-portfolio.png'}
                    alt='logo'
                    width={167}
                    height={67}
                />
                <p>Todo gran proyecto comienza con un sueño</p>
            </div>
            <div className={styles.right}>
                <div className={styles.right__item}>
                    <p>Navegacion</p>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.right__item}>
                    <p>Redes Sociales</p>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Tiktok</a></li>
                    </ul>
                </div>
                <div className={styles.right__item}>
                    <p>Creado con:</p>
                    <ul className={styles.right__item_create}>
                        <li>
                            <NextIcon/>
                            <p>NextJS</p>
                        </li>
                        <li>
                            <ReactIcon/>
                            <p>React</p>
                        </li>
                        <li>
                            <CssIcon/>
                            <p>Css</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}