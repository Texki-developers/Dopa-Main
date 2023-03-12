import React, { useEffect, useState } from "react";
import styles from "./CourseFeatures.module.scss";

export default function CourseFeatures({ data, type }) {
  const [isMobile, setMobile] = useState(false);
  const [isTab, setTab] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }

    if (window.innerWidth < 736) {
      setTab(true);
    } else {
      setTab(false);
    }
  }, []);
  return (
    <div className={styles.course_features_wrapper}>
      {data &&
        data?.map((item) => (
          <div
            style={{
              flexDirection: type == 1 && "column",
              gap: type == 1 && "0.1rem",
            }}
            className={styles.course_features_content}
          >
            <img src={item.image.src} alt="DopaVideoLectures" />
            <h4
              style={{ fontSize: type == 1 && isTab && "0.6rem" }}
              dangerouslySetInnerHTML={{
                __html: item.title.replace(/\n/g, "<br>"),
              }}
            ></h4>
          </div>
        ))}
    </div>
  );
}
