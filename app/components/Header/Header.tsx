"use client"
import HeaderControls from './HeaderControls'
import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import { useLanguage } from '@/app/Contexts/LanguageContext'
export default function Header(){
    const {language}=useLanguage()
    return(
        <header className={styles.header}>
            <Image
                className={styles.headerLogo}
                src={'/logo-portfolio.png'}
                alt='logo'
                width={167}
                height={67}
            />
            <nav className={styles.headerNav}>
                <a href="#home">{language ? 'Inicio' : 'Home'}</a>
                <a href="#skills">{language ? 'Habilidades' : 'Skills'}</a>
                <a href="#projects">{language ? 'Proyectos' : 'Projects'}</a>
                <a href="#contact">{language ? 'Contacto' : 'Contact'}</a>
            </nav>
            <HeaderControls/>
        </header>
    )
}