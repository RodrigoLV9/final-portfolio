import Image from 'next/image'
import styles from '../../styles/Skills.module.css'
interface Skill {
    name: string;
    url: string;
}
interface CardProps {
    title:string,
    data: Skill[];
}
export default function Card({title,data}:CardProps){
    return(
        <div className={styles.card}>
            <h3>{title}</h3>
            <div className={styles.card__items}>
                {
                    data.map((item,index)=>(
                        <div className={styles.card__items_item} key={index}>
                            <p>{item.name}</p>
                            <Image src={item.url} alt={item.name} width={35} height={35}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}