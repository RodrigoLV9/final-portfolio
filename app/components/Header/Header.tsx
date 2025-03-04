import HeaderControls from './HeaderControls'
import styles from '../../styles/Header.module.css'
import Image from 'next/image'
export default function Header(){
    return(
        <header className={styles.header}>
            <Image
                className={styles.headerLogo}
                src={'/logo-portfolio.png'}
                alt='logo'
                width={167}
                height={67}
            />
            {/* <div className={styles.headerLogo}></div> */}
            <nav className={styles.headerNav}>
                <a href="#">Home</a>
                <a href="#">Skills</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>
            <HeaderControls/>
        </header>
    )
}