import React from 'react'
import { GiConfirmed } from "react-icons/gi";
import styles from './Thankyou.module.scss'
import ActionButton from '../Buttons/ActionButton/ActionButton';
export default function Thankyou() {
  return (
    <div className={styles.thankyou_container}>
        <div className={styles.main_thankyou}>
        <GiConfirmed/>
        <h1> Thank You!</h1>
        <p> You're All Set</p>
        <ActionButton name="Go Back to Home"/>
        </div>
    
    </div>
  )
}
