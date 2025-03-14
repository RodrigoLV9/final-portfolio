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
  }, [charIndex, isDeleting, index]);
    return(
        <div className={styles.heroInfo}>
            <div className={styles.heroInfo__text}>
                <h2>{language ? 'Hola, yo soy' : 'Hi, i am'}</h2>
                <h1>RODRIGO LV</h1>
                <h3 className={styles.typing}>{text}</h3>
                {
                  language ? 
                  <p><span className={styles.word_animation1}>Desarrollador de software</span> con más de <span className={styles.word_animation2}>3 años de experiencia</span> como freelancer en <span className={styles.word_animation3}>frontend y backend</span>. Especializado en desarrollo frontend, creando interfaces modernas y eficientes. Desde <span className={styles.word_animation4}>Buenos Aires, Argentina.</span></p>
                  :
                  <p><span className={styles.word_animation1}>Software developer</span> with more than <span className={styles.word_animation2}>3 years of experience</span> as a freelancer in <span className={styles.word_animation3}>frontend and backend</span>. Specialized in frontend development, creating modern and efficient interfaces. From <span className={styles.word_animation4}>Buenos Aires, Argentina.</span></p>
                }
            </div>
            <div className={styles.heroInfo__links}>
                <a href="#">
                    <LinkedinIcon/>
                </a>
                <a href="#">
                    <GithubIcon/>
                </a>
                <a href="#">
                    <InstagramIcon/>
                </a>
                <a href="#">
                    <FacebookIcon/>
                </a>
                <a href="#">
                    <GmailIcon/>
                </a>
            </div>
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
            
        </div>
    )
}
