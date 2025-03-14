"use client"
import CardProject from './CardProject'
import styles from '../../styles/Projects.module.css'
import {projects} from '../../data/projects'
import { useLanguage } from '@/app/Contexts/LanguageContext'
export default function Projects(){
    const {language}=useLanguage()
    return(
        <section className={styles.containerProjects} id='projects'>
            <h2>{language ? 'Proyectos' : 'Projects'}</h2>
            <div className={styles.projects}>
                {
                    projects.map((item,index)=>(
                        <CardProject key={index} title={item.title} description={item.description} image={item.image} tags={item.tags}
                        demo={item.demo_link} github={item.github_link}/>
                    ))
                }
            </div>
        </section>
    )
}