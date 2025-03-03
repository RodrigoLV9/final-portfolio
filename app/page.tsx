import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
export default function Home() {
  return (
    <main className={styles.page}>
      <Hero/>
      <Skills/>
      <Projects/>
      <Footer/>
    </main>
  );
}
