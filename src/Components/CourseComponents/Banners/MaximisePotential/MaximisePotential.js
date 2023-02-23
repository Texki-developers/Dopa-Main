import React from "react";
import styles from "./MaximisePotential.module.scss";

import ActionButton from "@/Components/Buttons/ActionButton/ActionButton";

export default function MaximisePotential({ icon, para, btn, bg ,width}) {
  return (
    <div  className={styles.maximise_potential} style={{ background: `${bg}`,border: btn == "Book a Free Trial"? 'none' :  '1px solid #000000' }}>
      <img className={btn == "Book a Free Trial" ? styles.banner_image :''} src={icon.src}  alt="DopaNeetPotential" />
      <h2
        dangerouslySetInnerHTML={{ __html: para.replace(/\n/g, "<br>") }}
      ></h2>
      <ActionButton name={btn} />
    </div>
  );
}
