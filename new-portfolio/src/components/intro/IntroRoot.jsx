import NavBar from "./NavBar";
import MainBanner from "./MainBanner";
import styles from "./IntroRoot.module.css";

export default function IntroRoot() {
  return (
    <div
      id="home"
      className={styles.container}
    >
      <NavBar className={styles.navbar} />
      <MainBanner className={styles.mainbanner} />
    </div>
  );
}
