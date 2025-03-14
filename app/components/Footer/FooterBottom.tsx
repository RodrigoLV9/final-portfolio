"use client"
import { useLanguage } from '@/app/Contexts/LanguageContext'
import styles from '../../styles/Footer.module.css'
export default function FooterBottom(){
    const {language}=useLanguage()
    return(
        <section className={styles.footerBottom}>
            {
                language ? '@ 2025 RodrigoLV. Todos los derechos reservados.'
                :
                '@ 2025 RodrigoLV. All rights reserved.'
            }
            
        </section>
    )
}