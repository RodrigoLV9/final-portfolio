"use client"
import SkillsCards from "./SkillsCards";
import styles from '../../styles/Skills.module.css'
import { useLanguage } from "@/app/Contexts/LanguageContext";
export default function Skills(){
    const {language}=useLanguage()
    return(
        <section className={styles.skills} id='skills'>
            <header className={styles.skills__header}>
                <h2>{language ? 'Habilidades' : 'Skills'}</h2>
                <p>
                    {language
                        ? 'Tecnologias y herramientas que uso para crear productos web modernos, escalables y de alto rendimiento.'
                        : 'Technologies and tools I use to craft modern, scalable and high-performance web products.'}
                </p>
            </header>
            <SkillsCards/> 
        </section>
    )
}