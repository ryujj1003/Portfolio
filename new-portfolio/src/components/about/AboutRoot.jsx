import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import styles from "./AboutRoot.module.css";

export default function AboutRoot() {
  return (
    <div
      id="about"
      className={styles.container}
    >
      <AboutContent />
      <AboutImage />
    </div>
  );
}
