import styles from "./BottomProject.module.css";

export default function BottomProject() {
  return (
    <header className={styles.header}>
      <section className={styles.text}>
        <h2 className={styles.title}>Proxy Project</h2>
        <div className={styles["small-text"]}>
          <p>프록시 프로젝트</p>
          <p>www.someapi.com</p>
        </div>
      </section>
      <div className={styles.img}></div>
    </header>
  );
}
