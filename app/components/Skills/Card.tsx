"use client"
import {useState} from 'react'
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
    const [rotateX, setRotateX] = useState<string | number>(0);
    const [rotateY, setRotateY] = useState<string | number>(0);
    const handleMouseMove = (e:React.MouseEvent) => {
        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const rotateX = ((y / height) * 30 - 15).toFixed(2);
        const rotateY = ((x / width) * 30 - 15).toFixed(2);
        setRotateX(rotateX);
        setRotateY(rotateY);
    };
    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };
    return(
        <div className={styles.card}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
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