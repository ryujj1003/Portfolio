import styles from "./ViewProject.module.css";

export default function ViewProject() {
  return (
    <header className={styles.header}>
      <section className={styles.text}>
        <h2 className={styles.title}>Vue Project</h2>
        <div className={styles["small-text"]}>
          <p>트위터 클론코딩</p>
          <p>www.twitter.com</p>
        </div>
      </section>
      <div className={styles.img}></div>
    </header>
  );
}
