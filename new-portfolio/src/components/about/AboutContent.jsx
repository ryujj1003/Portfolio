import AboutInfoText from "./AboutInfoText";
import AboutTitle from "./AboutTitle";
import styles from "./AboutContent.module.css";

export default function AboutContent() {
  return (
    <section className={styles.container}>
      <AboutTitle />
      <AboutInfoText />
    </section>
  );
}
