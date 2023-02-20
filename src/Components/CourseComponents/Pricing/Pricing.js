import React from "react";
import styles from "./Pricing.module.scss";

export default function Pricing({coursePlans}) {
  return (
    <div className={styles.pricing_main_container}>
      <div className={styles.pricing_header_container}>
        <p>Class11 and 12</p>
        <h1>NEET COACHING</h1>
      </div>

      <div className={styles.subject_details_wrapper}>
        <div className={styles.languages}>
          <h4>Language</h4>
          <p>English & Malayalam</p>
        </div>
        <div className={styles.subject}>
          <h4>Language</h4>
          <p>English & Malayalam</p>
        </div>
      </div>

      <h3>Course Plans</h3>

      <div className={styles.course_container}>

      </div>
    </div>
  );
}
