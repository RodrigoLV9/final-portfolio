"use client"
import SkillsCards from "./SkillsCards";
import styles from '../../styles/Skills.module.css'
import { useLanguage } from "@/app/Contexts/LanguageContext";
export default function Skills(){
    const {language}=useLanguage()
    return(
        <section className={styles.skills} id='skills'>
            <h2>{language ? 'Habilidades':'Skills'}</h2>
            <SkillsCards/> 
        </section>
    )
}