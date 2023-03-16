import React from "react";
import styles from "./ActionButton.module.scss";
export default function ActionButton({ name }) {
  const handleSubmit = () => {
    name == "Book a Free Trial"
      ? (window.location.href = "https://dopaclass.com")
      : "";
  };
  return (
    <button onClick={handleSubmit} className={styles.action_button}>
      {name}
    </button>
  );
}
