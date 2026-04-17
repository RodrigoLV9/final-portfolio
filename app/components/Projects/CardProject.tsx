import { AiOutlineGlobal as WebIcon } from "react-icons/ai";
import { FaGithub as GithubIcon } from "react-icons/fa";
import { RiNextjsLine as NextIcon } from "react-icons/ri";
import { FaReact as ReactIcon } from "react-icons/fa";
import { FaHtml5 as HtmlIcon } from "react-icons/fa";
import { SiTypescript as TsIcon } from "react-icons/si";
import { FaCss3 as CssIcon } from "react-icons/fa";
import { SiAstro as AstroIcon } from "react-icons/si";
import { FaNodeJs as NodeIcon } from "react-icons/fa";
import { SiExpress as ExpressIcon } from "react-icons/si";
import { SiMongodb as MongoIcon} from "react-icons/si";
import styles from '../../styles/Projects.module.css'
import Image from 'next/image'
interface CardProjectProps{
    title:string | undefined,
    description:string | undefined,
    image:string | undefined,
    tags:string[] | undefined,
    demo:string | undefined,
    github:string | undefined,
    type:string | undefined,
}
const icons:{[key:string]:React.ElementType}={
    'Html':HtmlIcon,
    'Css':CssIcon,
    'Astro':AstroIcon,
    'React':ReactIcon,
    'Next':NextIcon,
    'Ts':TsIcon,
    'Node':NodeIcon,
    'Express':ExpressIcon,
    'MongoDB':MongoIcon,
}
export default function CardProject({title='saf',description,image='saf',tags,demo,github,type}:CardProjectProps){
    return(
        <article className={styles.card}>
            <div className={styles.media}>
                <Image src={image} alt={title} className={styles.image} width={1200} height={675}/>
                <span className={styles.typeBadge}>{type}</span>
            </div>
            <div className={styles.content}>
                <h4>{title}</h4>
                <p className={styles.description}>{description}</p>
                <ul className={styles.tags}>
                    {
                        tags?.map((tag,index)=>{
                            const IconComponent=icons[tag]
                            return(
                                <li key={index}>
                                    {
                                        IconComponent && <IconComponent/>
                                    }
                                    <p>{tag}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className={styles.button}>
                    <a href={demo} className={styles.button__demo} target="_blank" rel="noreferrer">
                        <WebIcon className={styles.button_icon}/>
                        <p>Demo</p>
                    </a>
                    <a href={github} className={styles.button__github} target="_blank" rel="noreferrer">
                        <GithubIcon className={styles.button_icon}/>
                        <p>Github</p>
                    </a>
                </div>
            </div>
        </article>
    )
}