"use client"
import {useState, useEffect} from 'react'
import { FaInstagram as InstagramIcon } from "react-icons/fa";
import { FaGithub as GithubIcon,FaLinkedin as LinkedinIcon } from "react-icons/fa";
import { FaFacebookSquare as FacebookIcon } from "react-icons/fa";
import { SiGmail as GmailIcon } from "react-icons/si";
import { HiOutlineDownload as DownloadIcon } from "react-icons/hi";
import styles from '../../styles/Hero.module.css'
import { useLanguage } from '@/app/Contexts/LanguageContext';
const wordsEN=['Fullstack developer', 'Software developer','Frontend developer','Freelancer','Backend Developer','Available to work']
const wordsES = ['Desarrollador Fullstack', 'Desarrollador de software', 'Desarrollador frontend', 'Freelancer', 'Desarrollador backend', 'Disponible para trabajar'];

export default function HeroInfo(){
  const {language}=useLanguage()
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const words=language ? wordsES :wordsEN

  useEffect(() => {
    setText("");
    setIndex(0);
    setIsDeleting(false);
    setCharIndex(0);
  }, [language]);

  useEffect(() => {
    const currentWord = words[index] || "";
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index, words]);
    return(
        <div className={styles.heroInfo}>
            <p className={styles.heroInfo__badge}>{language ? 'Disponible para nuevos proyectos' : 'Open for new projects'}</p>
            <div className={styles.heroInfo__text}>
                <h2>{language ? 'Hola, soy' : 'Hi, I am'}</h2>
                <h1>RODRIGO LV</h1>
                <h3 className={styles.typing}><span>{text}</span></h3>
                {
                  language ? 
                  <p><span className={styles.word_animation1}>Desarrollador de software</span> con más de <span className={styles.word_animation2}>3 años de experiencia</span> construyendo productos web en <span className={styles.word_animation3}>frontend y backend</span>. Enfoque fuerte en interfaces claras, rápidas y escalables. Desde <span className={styles.word_animation4}>Buenos Aires, Argentina.</span></p>
                  :
                  <p><span className={styles.word_animation1}>Software developer</span> with more than <span className={styles.word_animation2}>3 years of experience</span> building web products across <span className={styles.word_animation3}>frontend and backend</span>. Strong focus on clear, fast and scalable interfaces. From <span className={styles.word_animation4}>Buenos Aires, Argentina.</span></p>
                }
            </div>
            <div className={styles.heroInfo__links}>
                <a href="https://www.linkedin.com/in/rodrigo-villafuerte-482614355/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
                    <LinkedinIcon/>
                </a>
                <a href="https://github.com/RodrigoLV9" target='_blank' rel='noopener noreferrer' aria-label='GitHub'>
                    <GithubIcon/>
                </a>
                <a href="https://www.instagram.com/rodrigolv099/" target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
                    <InstagramIcon/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100077749125227" target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
                    <FacebookIcon/>
                </a>
                <a href="mailto:rodrigolv.975@gmail.com" target='_blank' rel='noopener noreferrer' aria-label='Gmail'>
                    <GmailIcon/>
                </a>
            </div>
            <div className={styles.heroInfo__actions}>
              {
                language ?
                <a href='/CV-ES.pdf' download='CV-ES.pdf' className={styles.heroInfo__button}>
                  <DownloadIcon className={styles.heroInfo__button_icon}/>
                  <p>Descargar CV</p>
                </a>
                :
                <a href='/CV-EN.pdf' download='CV-EN.pdf' className={styles.heroInfo__button}>
                  <DownloadIcon className={styles.heroInfo__button_icon}/>
                  <p>Download CV</p>
                </a>
              }

              <a href='#contact' className={styles.heroInfo__buttonGhost}>
                {language ? 'Contactame' : 'Contact me'}
              </a>
            </div>
            
        </div>
    )
}
