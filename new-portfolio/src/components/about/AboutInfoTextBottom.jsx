import styles from "./AboutInfoTextBottom.module.css";

export default function AboutContentBottom() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles["text-bold"]}>연락처</p>
        <p className={styles["text-gray"]}>010-1234-5678</p>
      </div>
      <div className={styles.content}>
        <p className={styles["text-bold"]}>이메일</p>
        <p className={styles["text-gray"]}>ryujj1003@gmail.com</p>
      </div>
      <div className={styles.content}>
        <p className={styles["text-bold"]}>학력</p>
        <p className={styles["text-gray"]}>가천대학교</p>
      </div>
    </div>
  );
}
