import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
export default function Home() {
  return (
    <main className={styles.page}>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  );
}
