import React from "react";
import styles from "./ActionButton.module.scss";
import { useRouter } from "next/router";
export default function ActionButton({ name }) {
  const handleSubmit = () => {
    const router = useRouter();
    name == "Book a Free Trial"
      ? router.push('/contact')
      : "";
  };
  return (
    <button onClick={handleSubmit} className={styles.action_button}>
      {name}
    </button>
  );
}
