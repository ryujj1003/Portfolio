import React from "react";
import CareerItem from "./CareerItem";

import styles from "./CareerRoot.module.css";

const DATA = [
  {
    year: "2023",
    list: ["우아한 테크 코스 7기 시작", "봉사활동"],
  },
  {
    year: "2024",
    list: ["우아한 테크 코스 7기 종료", "당근 인턴"],
  },
  {
    year: "2025",
    list: ["(주)네이버 프론트엔드 개발자 취업"],
  },
];

export default function CareerRoot() {
  return (
    <div
      id="career"
      className={styles.main}
    >
      <h1 className={styles.title}>Career</h1>
      {DATA.map((item, index) => {
        return (
          <React.Fragment key={`${index}CareerRoot`}>
            <CareerItem
              year={item.year}
              list={item.list}
            />
            <div className={styles.divider} />
          </React.Fragment>
        );
      })}
      <p>ing...</p>
    </div>
  );
}
