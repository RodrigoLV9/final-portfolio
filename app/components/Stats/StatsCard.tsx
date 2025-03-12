import styles from '../../styles/Stats.module.css'
interface StatsCardProps{
    name:string,
    number:string
}
export default function StatsCard({name,number}:StatsCardProps) {
  return (
    <div className={styles.statsCard}>
        <p className={styles.statsCard__number}>{number}</p>
        <p className={styles.statsCard__name}>{name}</p>
    </div>
  )
}
