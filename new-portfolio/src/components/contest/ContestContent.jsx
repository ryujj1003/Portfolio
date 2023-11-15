import ContestContentFirst from "./ContestContentFirst";
import ContestContentSecond from "./ContestContentSecond";
import ContestContentThird from "./ContestContentThird";
import styles from "./ContestContent.module.css";

export default function ContestContent() {
  return (
    <div className={styles.main}>
      <ContestContentFirst />
      <ContestContentSecond />
      <ContestContentThird />
    </div>
  );
}
