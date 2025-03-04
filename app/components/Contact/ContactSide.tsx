import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import styles from '../../styles/Contact.module.css'
import Image from 'next/image'
export default function ContactSide(){
    return(
        <div className={styles.contactSide}>
            <Image
                className={styles.contactSide__logo}
                src={'/contact-image.png'}
                alt='contact-image'
                width={250}
                height={250}
            />
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