import React from 'react'
import style from './PrimaryButton.module.scss'

export default function PrimaryButton({addon, children, bgColor, color,action}) {

  return (
    <button onClick={action} style={{backgroundColor: bgColor, color: color}} className={ `${style.btnPrimary} ${addon ? style.addon : ""}` } >
        {children}
    </button>
  )
}
