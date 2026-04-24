"use client"
import { RiNextjsLine as NextIcon } from "react-icons/ri";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaCss3 as CssIcon } from "react-icons/fa";
import styles from '../../styles/Footer.module.css'
import Image from 'next/image'
import { useLanguage } from "@/app/Contexts/LanguageContext";
export default function FooterTop(){
    const {language}=useLanguage()
    const currentYear = new Date().getFullYear();
    return(
        <section className={styles.footerTop}>
            <div className={styles.footerGrid}>
                <div className={styles.brandBlock}>
                    <Image
                        className={styles.brandLogo}
                        src={'/logo-portfolio.png'}
                        alt='logo'
                        width={167}
                        height={67}
                    />
                    <p className={styles.brandText}>{language ? 'Todo gran proyecto comienza con un sueno.':'Every great project begins with a dream.'}</p>
                </div>

                <div className={styles.linksColumns}>
                    <div className={styles.column}>
                        <h4>{language ? 'Navegacion':'Navigation'}</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>{language ? 'Redes sociales':'Social networks'}</h4>
                        <ul>
                            <li><a href="https://github.com/RodrigoLV9" target='_blank' rel="noopener noreferrer">Github</a></li>
                            <li><a href="https://www.linkedin.com/in/rodrigo-villafuerte-482614355/" target='_blank' rel="noopener noreferrer">LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/rodrigolv099/" target='_blank' rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100077749125227" target='_blank' rel="noopener noreferrer">Facebook</a></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>{language ? 'Creado con':'Created with'}</h4>
                        <ul className={styles.techList}>
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
                                <p>CSS Modules</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className={styles.footnote}>{language ? `Disponible para nuevos proyectos - ${currentYear}`:`Open for new projects - ${currentYear}`}</p>
        </section>
    )
}