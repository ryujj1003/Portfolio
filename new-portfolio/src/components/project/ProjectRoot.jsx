import BottomProject from "./BottomProject/BottomProject";
import ProjectMid from "./ProjectMid";
import styles from "./ProjectRoot.module.css";
import ReactRoot from "./ReactProject/ReactRoot";

export default function ProjectRoot() {
  return (
    <div
      id="project"
      className={styles.main}
    >
      <ReactRoot />
      <div className={styles.divider} />
      <ProjectMid />
      <div className={styles.divider} />
      <BottomProject />
    </div>
  );
}
