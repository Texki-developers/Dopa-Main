import React from "react";
import styles from "./Missioncard.module.scss";

export default function Missioncard({ logo, head, para, mainHead }) {
  return (
    <div className={styles.mission_card_container}>
      <div className={styles.mission_card_header}>
        <h2>{head}</h2>
        <img src={logo.src} alt={logo.blurDataURL} />
      </div>
      <div className={styles.mission_head_container}>
        <h1>{mainHead}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
}
