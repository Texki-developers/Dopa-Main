import React, { useRef } from "react";
import styles from "./popup.module.scss";
import {AiOutlineClose} from 'react-icons/ai'
export default function Popup({ children,action,refs,type }) {

  let containerstyle = type ===1 ? `${styles.popup_enquiry_container} ${styles.popup_container}` : `${styles.popup_container}`
  return (
    <div id="pop" ref={refs} style={{width: type === 1 && '40rem',top: type === 1 && '33rem', height: type ===1 && 'fit-content' }}  className={containerstyle}>
      <div onClick={()=>action(0)} className={styles.popup_close}>
        <AiOutlineClose/>
      </div>
      {children}
    </div>
  );
}
