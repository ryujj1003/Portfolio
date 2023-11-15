import ContestTitle from "./ContestTitle";
import ContestContent from "./ContestContent";
import styles from "./ContestRoot.module.css";

export default function ContestRoot() {
  return (
    <div id="contest">
      <div className={styles.main}>
        <ContestTitle />
        <ContestContent />
      </div>
    </div>
  );
}
