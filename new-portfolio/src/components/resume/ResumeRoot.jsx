import ResumeImage from "./ResumeImage";
import ResumeText from "./ResumeText";
import styles from "./ResumeRoot.module.css";

export default function ResumeRoot() {
  return (
    <div id="resume">
      <header></header>
      <main className={styles.main}>
        <ResumeText />
        <ResumeImage />
      </main>
    </div>
  );
}
