import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import styles from '../../styles/Contact.module.css'
export default function ContactSide(){
    return(
        <div className={styles.contactSide}>
            <div className={styles.contactSide__image}></div>
            <div className={styles.cardMessage}>
                <h4>Cotiza Rapido por WhatsApp</h4>
                <p>Escribenos ahora y cotiza tu Pagina Web</p>
                <button className={styles.cardMessage__button}>
                    <p>Escribir al WhatsApp</p>
                    <WhatsappIcon/>
                </button>          
            </div>
        </div>
    )
}