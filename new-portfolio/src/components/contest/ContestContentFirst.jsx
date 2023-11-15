import styles from "./ContestContentItem.module.css";

export default function ContestContentFirst() {
  return (
    <div className={styles.item}>
      <div className={styles.box}>
        <div className={styles.text}>
          <h1>K-HACKATHON</h1>
          <br></br>
          <br></br>
          <p>자율주행 배달로봇 플랫폼 벡엔드 개발 담당</p>
        </div>
      </div>
      <div className={styles.img1}></div>
    </div>
  );
}
