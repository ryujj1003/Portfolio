import logo from "../../assets/resume.png";
import styles from "./ResumeImage.module.css";

export default function ResumeImage() {
  return <img className={styles.image} src={logo} alt="이력서" />;
}
