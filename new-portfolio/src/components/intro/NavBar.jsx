import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={styles.header}>
      <div className={styles["nav-bar"]}>
        <h1>RJJ Portfolio</h1>
        <ul className={styles["nav-menu"]}>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contest">Contest</a>
          </li>
          <li>
            <a href="#career">Career</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
