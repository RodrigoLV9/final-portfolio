"use client"
import CardProject from './CardProject'
import styles from '../../styles/Projects.module.css'
import {projectsES, projectsEN} from '../../data/projects'
import { useLanguage } from '@/app/Contexts/LanguageContext'
export default function Projects(){
    const {language}=useLanguage()
    const projects=language ? projectsES : projectsEN
    const sectionEyebrow = language ? 'Portafolio seleccionado' : 'Selected portfolio'
    const sectionTitle = language ? 'Trabajos recientes que mezclan producto, interfaz y lógica' : 'Recent work blending product thinking, interface, and logic'
    const sectionDescription = language
        ? 'Cada proyecto prioriza una experiencia clara, una identidad visual definida y una implementación cuidada.'
        : 'Each project prioritizes a clear experience, a defined visual identity, and careful implementation.'

    const getTypeLabel = (type:string | undefined) => {
        if (type === 'full-stack') {
            return language ? 'Full stack' : 'Full stack'
        }

        if (type === 'frontend') {
            return language ? 'Frontend' : 'Frontend'
        }

        return language ? 'Proyecto' : 'Project'
    }

    return(
        <section className={styles.containerProjects} id='projects'>
            <div className={styles.header}>
                <span className={styles.headerBadge}>{sectionEyebrow}</span>
                <h2>{language ? 'Proyectos' : 'Projects'}</h2>
                <p>{sectionTitle}</p>
                <p>{sectionDescription}</p>
            </div>
            <div className={styles.projects}>
                {
                    projects.map((item,index)=>(
                        <CardProject key={index} title={item.title} description={item.description} image={item.image} tags={item.tags}
                        demo={item.demo_link} github={item.github_link} type={getTypeLabel(item.type)}/>
                    ))
                }
            </div>
        </section>
    )
}