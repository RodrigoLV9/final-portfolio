import SkillsCards from "./SkillsCards";
import styles from '../../styles/Skills.module.css'
export default function Skills(){
    return(
        <section className={styles.skills}>
            <h2>Skills</h2>
            <SkillsCards/> 
        </section>
    )
}