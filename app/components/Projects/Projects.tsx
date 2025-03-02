import CardProject from './CardProject'
import styles from '../../styles/Projects.module.css'
export default function Projects(){
    return(
        <section className={styles.containerProjects}>
            <h2>Projects</h2>
            <div className={styles.projects}>
                <CardProject/>
                <CardProject/>
                <CardProject/>
                <CardProject/>
            </div>
        </section>
    )
}