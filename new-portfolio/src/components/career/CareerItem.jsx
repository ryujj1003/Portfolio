import styles from "./CareerItem.module.css";

export default function CareerItem({ year, list }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.year}>{year}</h3>
      <ul className={styles.list}>
        {list?.map((item, index) => {
          return <li key={`${index}CareerItem`}>{item}</li>;
        })}
      </ul>
    </div>
  );
}
