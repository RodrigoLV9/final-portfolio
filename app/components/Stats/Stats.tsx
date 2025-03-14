"use client"
import StatsCard from "./StatsCard";
import styles from '../../styles/Stats.module.css'
import { useLanguage } from "@/app/Contexts/LanguageContext";
const infoStatsES=[
    {
        'name':'Años de Experiencia',
        'number':'+3'
    },
    {
        'name':'Tecnologias dominadas',
        'number':'+24'
    },
    {
        'name':'Proyectos personales',
        'number':'7'
    },
    {
        'name':'Certificaciones finalizadas',
        'number':'12'
    }
]
const infoStatsEN = [
    {
        'name': 'Years of Experience',
        'number': '+3'
    },
    {
        'name': 'Technologies Mastered',
        'number': '+24'
    },
    {
        'name': 'Personal Projects',
        'number': '7'
    },
    {
        'name': 'Completed Certifications',
        'number': '12'
    }
];

export default function Stats() {
    const {language}=useLanguage()
    const infoStats=language ? infoStatsES : infoStatsEN
  return (
    <section className={styles.stats}>
        {
            infoStats.map((item,index)=>(
                <StatsCard key={index} name={item.name} number={item.number}/>
            ))
        }
    </section>
  )
}
