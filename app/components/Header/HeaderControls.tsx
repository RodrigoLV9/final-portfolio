"use client"
import Image from 'next/image';
/* import { GoSun as SunIcon} from "react-icons/go"; */
import styles from '../../styles/Header.module.css'
import { useLanguage } from '@/app/Contexts/LanguageContext';
export default function HeaderControls(){
    const {language,setLanguage}=useLanguage()
    const handleLanguage=()=>{
        setLanguage(!language)
    }
    return(
        <div className={styles.controls} >
            {/* <button className={styles.controls__button}>
                <SunIcon/>
            </button> */}
            <button className={styles.controls__idiom} onClick={handleLanguage}>
                {
                    language ? <Image src='/spanish.png' alt='spanish' width={40} height={25}/>
                    :
                    <Image src='/english.png' alt='english' width={40} height={25}/>
                }
            </button>
        </div>
    )
}