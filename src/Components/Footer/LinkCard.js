import React from 'react'
import styles from  './Footer.module.scss'

export default function LinkCard({logo,para,action}) {
  return (
    <div className={styles.footer_links}>
      {logo}  
      <div>
      <p onClick={action}>{para}</p>{(para.includes('91'))?<p onClick={()=>{window.location.href="tel:+91 9645302200"}}>+91 9645302200</p>:null}</div>
  
    </div>
  )
}
