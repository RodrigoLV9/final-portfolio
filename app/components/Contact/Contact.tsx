"use client"
import Form from './Form'
import ContactSide from './ContactSide'
import styles from '../../styles/Contact.module.css'
import { useLanguage } from '@/app/Contexts/LanguageContext'
export default function Contact(){
    const {language}=useLanguage()
    return(
        <section className={styles.containerContact} id='contact'>
            <div className={styles.contactHeading}>
                <span className={styles.contactHeading__badge}>{language ? 'Hablemos' : "Let's talk"}</span>
                <h2 className={styles.contactHeading__title}>{language ? 'Contacto' : 'Contact'}</h2>
                <p className={styles.contactHeading__subtitle}>
                    {language
                        ? 'Cuéntame tu idea y te ayudo a convertirla en una web clara, rápida y profesional.'
                        : 'Tell me your idea and I will help you turn it into a clear, fast, and professional website.'}
                </p>
            </div>
            <div className={styles.contact}>
                <Form/>
                <ContactSide/>
            </div>
        </section>
    )
}