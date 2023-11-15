import styles from "./ProjectMid.module.css";

import NodeProject from "./NodeProject/NodeProject";
import ViewProject from "./ViewProject/ViewProject";

export default function ProjectMid() {
  return (
    <div className={styles.mid}>
      <ViewProject />
      <NodeProject />
    </div>
  );
}
