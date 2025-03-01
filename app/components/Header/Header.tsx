import HeaderControls from './HeaderControls'
import styles from '../../styles/Header.module.css'
export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.headerLogo}></div>
            <nav className={styles.headerNav}>
                <a href="">Home</a>
                <a href="">Skills</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </nav>
            <HeaderControls/>
        </header>
    )
}