import React, { useRef } from "react";
import styles from "./popup.module.scss";
import {AiOutlineClose} from 'react-icons/ai'
export default function Popup({ children,action,refs }) {

  return (
    <div ref={refs} className={styles.popup_container}>
      <div onClick={()=>action(0)} className={styles.popup_close}>
        <AiOutlineClose/>
      </div>
      {children}
    </div>
  );
}
