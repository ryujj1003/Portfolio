import styles from "./login.module.css";

const Login = (props) => {
  const { changeLogged, id, pwd, changeId, changePwd } = props;

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h3 align="center">로그인</h3>
        <section className={styles.main}>
          <div className={styles["input-field"]}>
            <label>아이디 </label>
            <input
              className={styles.input}
              type="text"
              size="8"
              value={id}
              onChange={changeId}
            />
          </div>
          <div className={styles["input-field"]}>
            <label>비밀번호</label>
            <input
              className={styles.input}
              type="password"
              size="8"
              value={pwd}
              onChange={changePwd}
            />
          </div>
        </section>
        <button
          className={styles.button}
          type="button"
          onClick={changeLogged}
        >
          로그인
        </button>
      </form>
    </div>
  );
};
export default Login;
