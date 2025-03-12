import StatsCard from "./StatsCard";
import styles from '../../styles/Stats.module.css'
const infoStats=[
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
export default function Stats() {
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
