import styles from "./ReactRoot.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.text}>
        <div className={styles.latest}>Latest Project</div>
        <h2 className={styles.title}>React Project</h2>
        <div className={styles["small-text"]}>
          <p>카카오 클론코딩</p>
          <p>www.naver.com</p>
        </div>
      </section>
      <div className={styles.img}></div>
    </header>
  );
}
