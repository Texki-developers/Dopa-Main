import React from "react";
import styles from "./Landing.module.scss";
import { MdOutlineDone } from "react-icons/md";

export default function Landing({ image, bg, head, para }) {
  return (
    <div className={styles.dopa_landing}>
      <div className={styles.dopa_bg}>
        <img src={bg.src} alt="" />
      </div>
      <div className={styles.dopa_landing__wrapper}>
        <div>
          <h1
            className={head == "CAPSULE 3.0" ? styles.mainHead : ""}
            dangerouslySetInnerHTML={{ __html: head.replace(/\n/g, "<br>") }}
          ></h1>
          {head == "CAPSULE 3.0" ? <h2>NEET 2023 CRASH COURSE</h2> : ""}
          {para &&
            para?.map((items) => (
              <div className={styles.online_mentor_para}>
                <div className={styles.online_mentor_para_inside}>
                  <MdOutlineDone style={{ fontSize: "2rem" }} />
                  <p>{items}</p>
                </div>
              </div>
            ))}
        </div>
        <div className={styles.dopa_students}>
          <img src={image.src} alt="" />
        </div>
      </div>
    </div>
  );
}
