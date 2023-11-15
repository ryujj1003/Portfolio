import AboutContentBottom from "./AboutInfoTextBottom";
import AboutContentTop from "./AboutInfoTextTop";
import styles from "./AboutInfoText.module.css";
export default function AboutInfoText() {
  return (
    <div className={styles.container}>
      <AboutContentTop />
      <AboutContentBottom />
    </div>
  );
}
