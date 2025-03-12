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
            <nav className={styles.headerNav}>
                <a href="#home">Home</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
            <HeaderControls/>
        </header>
    )
}