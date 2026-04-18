import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import styles from '../../styles/Contact.module.css'
import { useLanguage } from "@/app/Contexts/LanguageContext";
export default function ContactSide(){
    const {language}=useLanguage()
    return(
        <div className={styles.contactSide}>
            <svg width="0" height="0">
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#25D366" />
                        <stop offset="100%" stopColor="#128C7E" />
                    </linearGradient>
                </defs>
            </svg>
            <div className={styles.cardMessage}>
                <div className={styles.cardMessage__eyebrow}>
                    <span className={styles.cardMessage__statusDot}></span>
                    <p>{language ? 'Respuesta en minutos' : 'Replies in minutes'}</p>
                </div>
                <div className={styles.cardMessage__title}>
                    <WhatsappIcon/>
                    <h2>Whatsapp</h2>
                </div>
                <h4>{language ? 'Cotiza Rapido por WhatsApp' : 'Get a quick quote via WhatsApp'}</h4>
                <p className={styles.cardMessage__description}>{language ? 'Escribenos ahora y cotiza tu Pagina Web':'Write to us now and get a quote for your website'}</p>
                <button className={styles.cardMessage__button} type="button" aria-label={language ? 'Escribir al Whatsapp' : 'Write to Whatsapp'}>
                    <span>{language ? 'Escribir al Whatsapp':'Write to Whatsapp'}</span>
                    <WhatsappIcon/>
                </button>          
            </div>
        </div>
    )
}