import Image from "next/image";
import React from "react";
import styles from "./ResultBanner.module.scss";
import result from "../../../../../public/Assets/home/banner-face.png";
export default function ResultBanner() {
  return (
    <div className={styles.result_banner_container}>
      <div className={styles.main_content}>
        <h1>Unleashing your potential <br/> to succeed in NEET.</h1>
        <button>
                <span>
                  <strong>Join with DOPA Capsule 3.0</strong> <br /> NEET2023 Exclusive Crash Course
                </span>
              </button>
      </div>

      <div className={styles.result_image}>
        <Image src={result} />
      </div>
    </div>
  );
}
