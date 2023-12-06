import React from "react";
import styles from "./ActionButton.module.scss";
import { useRouter } from "next/router";
export default function ActionButton({ name }) {
  const {push} = useRouter();
  const handleSubmit = () => {
    name == "Book a Free Trial"
      ? push('/contact')
      : name ==  "Go Back to Home" ? push('/') : '';
  };
  return (
    <button onClick={handleSubmit} className={styles.action_button}>
      {name}
    </button>
  );
}
