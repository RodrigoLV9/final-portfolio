"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../../styles/Skills.module.css'
interface Skill {
    name: string;
    url: string;
}
interface CardProps {
    title:string,
    subtitle:string,
    data: Skill[];
}
export default function Card({title,subtitle,data}:CardProps){
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isInteractive, setIsInteractive] = useState(false);

    useEffect(() => {
        const media = window.matchMedia('(pointer: fine)');
        const updateInteractivity = () => setIsInteractive(media.matches);
        updateInteractivity();

        media.addEventListener('change', updateInteractivity);
        return () => media.removeEventListener('change', updateInteractivity);
    }, []);

    const handleMouseMove = (e:React.MouseEvent) => {
        if (!isInteractive) return;

        const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        const nextRotateX = (y / height) * 18 - 9;
        const nextRotateY = (x / width) * 18 - 9;

        setRotateX(nextRotateX);
        setRotateY(nextRotateY);
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
            aria-label={`${title} skills card`}
        >
            <div className={styles.card__header}>
                <h3>{title}</h3>
                <span className={styles.card__count}>{data.length}</span>
            </div>
            <p className={styles.card__subtitle}>{subtitle}</p>
            <ul className={styles.card__items}>
                {
                    data.map((item,index)=>(
                        <li className={styles.card__items_item} key={`${item.name}-${index}`}>
                            <p>{item.name}</p>
                            <Image src={item.url} alt={item.name} width={35} height={35}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}