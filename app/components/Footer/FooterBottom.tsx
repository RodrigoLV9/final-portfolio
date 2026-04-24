"use client"
import { useLanguage } from '@/app/Contexts/LanguageContext'
import styles from '../../styles/Footer.module.css'
export default function FooterBottom(){
    const {language}=useLanguage()
    const currentYear = new Date().getFullYear();
    return(
        <section className={styles.footerBottom}>
            <p>
                {language
                    ? `Copyright ${currentYear} RodrigoLV. Todos los derechos reservados.`
                    : `Copyright ${currentYear} RodrigoLV. All rights reserved.`}
            </p>
        </section>
    )
}