import { BsFillSendFill as SendIcon } from "react-icons/bs";
import styles from '../../styles/Contact.module.css'
export default function Form(){
    return(
        <form action="" className={styles.form}>
            <div className={styles.containerInputs}>
                <div className={styles.containerInput}>
                    <label htmlFor="" className="name">Name*</label>
                    <input type="text"/>
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="" className="name">Email*</label>
                    <input type='email'/>
                </div>
            </div>
            <div className={styles.containerInputs2}>
                <div className={styles.containerInput}>
                    <label htmlFor="" className="name">Subject*</label>
                    <input type="text"/>
                </div>
                <div className={styles.containerInput}>
                    <label htmlFor="" className="name">Message*</label>
                    <textarea name="" id=""></textarea>
                </div>
            </div>
            <button className={styles.form__button}>
                <p>Send</p>
                <SendIcon/>
            </button>
        </form>
    )
}