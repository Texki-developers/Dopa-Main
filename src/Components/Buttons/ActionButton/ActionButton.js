import React from 'react'
import styles from './ActionButton.module.scss'
export default function ActionButton({name}) {
  return (
   <button className={styles.action_button}>
    {name}
   </button>
  )
}
