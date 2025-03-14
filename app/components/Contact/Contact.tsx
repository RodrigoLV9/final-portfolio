"use client"
import Form from './Form'
import ContactSide from './ContactSide'
import styles from '../../styles/Contact.module.css'
import { useLanguage } from '@/app/Contexts/LanguageContext'
export default function Contact(){
    const {language}=useLanguage()
    return(
        <section className={styles.containerContact} id='contact'>
            <h2>{language ? 'Contacto' : 'Contact'}</h2>
            <div className={styles.contact}>
                <Form/>
                <ContactSide/>
            </div>
        </section>
    )
}