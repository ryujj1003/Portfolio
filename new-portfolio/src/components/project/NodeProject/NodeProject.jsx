import styles from "./NodeProject.module.css";

export default function NodeProject() {
  return (
    <header className={styles.header}>
      <section className={styles.text}>
        <h2 className={styles.title}>Node Project</h2>
        <div className={styles["small-text"]}>
          <p>서버 코딩</p>
          <p>www.someapi.com</p>
        </div>
      </section>
      <div className={styles.img}></div>
    </header>
  );
}
