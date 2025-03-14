import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import styles from '../../styles/Contact.module.css'
import { useLanguage } from "@/app/Contexts/LanguageContext";
export default function ContactSide(){
    const {language}=useLanguage()
    return(
        <div className={styles.contactSide}>
            <div className={styles.cardMessage}>
                <div className={styles.cardMessage__title}>
                    <h2>Whatsapp</h2>
                    <WhatsappIcon/>
                </div>
                <h4>{language ? 'Cotiza Rapido por WhatsApp' : 'Get a quick quote via WhatsApp'}</h4>
                <p>{language ? 'Escribenos ahora y cotiza tu Pagina Web':'Write to us now and get a quote for your website'}</p>
                <button className={styles.cardMessage__button}>
                    <p>{language ? 'Escribir al Whatsapp':'Write to Whatsapp'}</p>
                    <WhatsappIcon/>
                </button>          
            </div>
        </div>
    )
}