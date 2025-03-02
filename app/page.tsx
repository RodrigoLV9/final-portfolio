import styles from "./page.module.css";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
export default function Home() {
  return (
    <main className={styles.page}>
      <Hero/>
      <Skills/>
    </main>
  );
}
