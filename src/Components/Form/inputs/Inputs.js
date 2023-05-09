import React from 'react'
import styles from './Inputs.module.scss'
export default function Inputs({name,register}) {
  return (
    <div className={styles["dopa-inputs_container"]}>
        <label>{name}</label>
        <input {...register(name,{required: name=== 'Name' && name==="class" && name ==="Whatsapp Number" ? true :false,})} name={name} placeholder={name === 'Name' || name==='School' ? `Enter your ${name}`:  name==='What you think is your best quality?' ? ``: name.includes('Number') ? "Enter Your number" : `Type your ${name}`} type={name.includes('Number') ? "number": "text"}/>
    </div>
  )
}
