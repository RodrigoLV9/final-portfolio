"use client"
import {useState} from 'react'
import HeaderControls from './HeaderControls'
import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import { useLanguage } from '@/app/Contexts/LanguageContext'
export default function Header(){
    const {language}=useLanguage()
    const [isMenu, setIsMenu]=useState<boolean | undefined>(false)
    const handleMenu=()=>{
        setIsMenu(prev=>!prev)
        
    }
    return(
        <header className={styles.header}>
            <Image
                className={styles.headerLogo}
                src={'/logo-portfolio.png'}
                alt='logo'
                width={167}
                height={67}
            />
            <nav className={`${styles.headerNav} ${isMenu ? styles.nav_enabled : styles.nav_disabled}`}>
                <a href="#home">{language ? 'Inicio' : 'Home'}</a>
                <a href="#skills">{language ? 'Habilidades' : 'Skills'}</a>
                <a href="#projects">{language ? 'Proyectos' : 'Projects'}</a>
                <a href="#contact">{language ? 'Contacto' : 'Contact'}</a>
            </nav>
            <HeaderControls/>
            {/* <button className={`${styles.containerMenu} ${isMenu ? styles.menu_disabled : styles.menu_enabled}`} onClick={handleMenu}>
                <div className={styles.menu}></div>
            </button> */}
            <button className={styles.containerMenu} onClick={handleMenu}>
                <div className={`${styles.menu} ${isMenu ? styles.menu_open : ''}`}></div>
            </button>
        </header>
    )
}