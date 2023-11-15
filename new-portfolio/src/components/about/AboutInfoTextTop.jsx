import styles from "./AboutInfoTextTop.module.css";

export default function AboutContentTop() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <p className={styles["text-bold"]}>이름</p>
        <p className={styles["text-gray"]}>류재준</p>
      </div>
      <div className={styles.content}>
        <p className={styles["text-bold"]}>생년월일</p>
        <p className={styles["text-gray"]}>2001.10.03</p>
      </div>
      <div className={styles.content}>
        <p className={styles["text-bold"]}>주소지</p>
        <p className={styles["text-gray"]}>경기도 성남시</p>
      </div>
    </div>
  );
}
