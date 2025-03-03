import FooterTop from './FooterTop'
import FooterBottom from './FooterBottom'
import styles from '../../styles/Footer.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <FooterTop/>
            <FooterBottom/>
        </footer>
    )
}