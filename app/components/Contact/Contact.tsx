import Form from './Form'
import ContactSide from './ContactSide'
import styles from '../../styles/Contact.module.css'
export default function Contact(){
    return(
        <section className={styles.containerContact} id='contact'>
            <h2>Contact</h2>
            <div className={styles.contact}>
                <Form/>
                <ContactSide/>
            </div>
        </section>
    )
}