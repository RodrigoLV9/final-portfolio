"use client"
import { useEffect, useMemo, useState } from 'react'
import HeaderControls from './HeaderControls'
import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import { useLanguage } from '@/app/Contexts/LanguageContext'

export default function Header(){
    const { language } = useLanguage()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    const navItems = useMemo(() => [
        { id: 'home', es: 'Inicio', en: 'Home' },
        { id: 'skills', es: 'Habilidades', en: 'Skills' },
        { id: 'projects', es: 'Proyectos', en: 'Projects' },
        { id: 'contact', es: 'Contacto', en: 'Contact' },
    ], [])

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    const handleNavClick = (sectionId: string) => {
        setActiveSection(sectionId)
        closeMenu()
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean) as HTMLElement[]

        if (!sections.length) {
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

                if (visible[0]) {
                    setActiveSection(visible[0].target.id)
                }
            },
            {
                root: null,
                rootMargin: '-18% 0px -45% 0px',
                threshold: [0.1, 0.25, 0.5],
            }
        )

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [navItems])

    useEffect(() => {
        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    return(
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <a className={styles.brand} href="#home" aria-label={language ? 'Ir al inicio' : 'Go to home'}>
                    <Image
                        className={styles.headerLogo}
                        src={'/logo-portfolio.png'}
                        alt='Rodrigo LV logo'
                        width={167}
                        height={67}
                        priority
                    />
                </a>

                <nav
                    id="main-navigation"
                    className={`${styles.headerNav} ${isMenuOpen ? styles.navOpen : ''}`}
                    aria-label={language ? 'Navegacion principal' : 'Main navigation'}
                >
                    <ul className={styles.navList}>
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    onClick={() => handleNavClick(item.id)}
                                    className={activeSection === item.id ? styles.navLinkActive : ''}
                                >
                                    {language ? item.es : item.en}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.mobileControls}>
                        <HeaderControls />
                    </div>
                </nav>

                <div className={styles.rightSide}>
                    <HeaderControls />
                    <a href="#contact" className={styles.cta}>
                        {language ? 'Trabajemos juntos' : "Let's build"}
                    </a>
                </div>

                <button
                    className={styles.containerMenu}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                    aria-label={language ? 'Abrir menu' : 'Open menu'}
                >
                    <div className={`${styles.menu} ${isMenuOpen ? styles.menu_open : ''}`}></div>
                </button>
            </div>

            {isMenuOpen ? <button className={styles.backdrop} onClick={closeMenu} aria-label={language ? 'Cerrar menu' : 'Close menu'}></button> : null}
        </header>
    )
}