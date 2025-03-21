"use client"
import { RiNextjsLine as NextIcon } from "react-icons/ri";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaCss3 as CssIcon } from "react-icons/fa";
import styles from '../../styles/Footer.module.css'
import Image from 'next/image'
import { useLanguage } from "@/app/Contexts/LanguageContext";
export default function FooterTop(){
    const {language}=useLanguage()
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
                <p>{language ? 'Todo gran proyecto comienza con un sueño':'Every great project begins with a dream'}</p>
            </div>
            <div className={styles.right}>
                <div className={styles.right__item}>
                    <h4>{language ? 'Navegación':'Navegation'}</h4>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className={styles.right__item}>
                    <h4>{language ? 'Redes sociales':'Social networks'}</h4>
                    <ul>
                        <li><a href="https://github.com/RodrigoLV9" target='_blank'>Github</a></li>
                        <li><a href="https://www.linkedin.com/in/rodrigo-villafuerte-482614355/" target='_blank'>Linkedin</a></li>
                        <li><a href="https://www.instagram.com/rodrigolv099/" target='_blank'>Instagram</a></li>
                        <li><a href="https://www.facebook.com/profile.php?id=100077749125227" target='_blank'>Facebook</a></li>
                    </ul>
                </div>
                <div className={styles.right__item}>
                    <h4>{language ? 'Creado con:' : 'Created with:'}</h4>
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