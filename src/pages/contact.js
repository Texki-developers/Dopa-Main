import Form from "@/Components/Form/Form";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import styles from "@/styles/contact.module.scss";

export default function contact() {

  return (
    <MainLayout>
      <div className={styles.contact_container}>
        <div
          style={{ 
            
            width: "30rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h1 style={{ color: "#1987a4", marginTop: "1.5rem" }}>Contact Us</h1>
          <Form />
        </div>
      </div>
    </MainLayout>
  );
}
