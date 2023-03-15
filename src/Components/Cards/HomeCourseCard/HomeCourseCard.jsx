import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HomeCourseCard.module.scss";

export default function HomeCourseCard({ icon, alt, cardTitle, to,action }) {
  return cardTitle == "+1/+2 Neet Coaching" ? (
    <div onClick={action} className={styles["home-course-card"]}>
      <Image src={icon} alt={alt} placeholder="blur" />
      <p>{cardTitle}</p>
    </div>
  ) : (
    <Link href={to} className={styles["home-course-card"]}>
      <Image src={icon} alt={alt} placeholder="blur" />
      <p>{cardTitle}</p>
    </Link>
  );
}
