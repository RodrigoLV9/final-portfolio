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
            <button
                className={styles.controls__idiom}
                onClick={handleLanguage}
                aria-label={language ? 'Switch to English' : 'Cambiar a espanol'}
            >
                <span className={styles.controls__flag}>
                    {
                        language ? <Image src='/spanish.png' alt='spanish' width={24} height={16}/>
                        :
                        <Image src='/english.png' alt='english' width={24} height={16}/>
                    }
                </span>
                <span className={styles.controls__text}>{language ? 'ES' : 'EN'}</span>
            </button>
        </div>
    )
}