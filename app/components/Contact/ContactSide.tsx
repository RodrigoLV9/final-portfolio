import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
export default function ContactSide(){
    return(
        <div className="contactSide">
            <div className="contactSide__image"></div>
            <div className="cardMessage">
                <h4>Cotiza Rapido por WhatsApp</h4>
                <p>Escribenos ahora y cotiza tu Pagina Web</p>
                <button>
                    <p>Escribir al WhatsApp</p>
                    <WhatsappIcon/>
                </button>          
            </div>
        </div>
    )
}