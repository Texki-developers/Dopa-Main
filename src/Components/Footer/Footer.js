import React from "react";
import styles from "./Footer.module.scss";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiFacebook, FiPhone, FiSend, FiYoutube } from "react-icons/fi";
import { BiMapAlt } from "react-icons/bi";
import Logo from '../../../public/Assets/dopa-Logo.png'
import LinkCard from "./LinkCard";

export default function Footer() {
  return (
    <div id="aboutus" className={styles["dopa-footer_container"]}>
      <div className={styles['footer-logo-container-mobile']}>
      <div className={styles['footer-mobile-links-wrapper']}>
      <div className={styles['footer-dopa_deatails-mobile']}>
        <LinkCard para ="K.M. Apartment, Rahmaniya school, Near Medical College, Kozhikode, Kerala 673008 " logo={<BiMapAlt className={styles["map"]} style={{ fontSize: "5rem" }} />} />
        <LinkCard action={()=>{
          window.location.href = "tel:+91 9645 202 200"
        }} para =" +91 9645 202 200 " logo={<FiPhone className={styles["phone"]} style={{ fontSize: "2rem" }} />}/>
        <LinkCard action={(e) => {
                window.location.href = "mailto:dopaprep@gmail.com";
                e.preventDefault();
            }} para="dopaprep@gmail.com" logo={<FiSend className={styles["mail"]} style={{ fontSize: "2rem" }} />} /> 
      </div>

      <div className={styles["footer-social_media-mobile"]}>
        <p>Connect with us.</p>
        <div className={styles["social-icons"]}>
        <FiYoutube onClick={()=>window.location.href="https://youtube.com/c/DOPACoaching"} style={{ fontSize: "2rem" }}  />
          <AiOutlineInstagram onClick={()=>window.location.href="https://www.instagram.com/dopacoaching/?ig"}  style={{ fontSize: "2rem" }}  />
          <FiFacebook onClick={()=>window.location.href="https://www.facebook.com/dopacoaching/"} style={{ fontSize: "1.8rem",marginLeft:'-0.5rem' }}  />
          <FaWhatsapp  onClick={()=>window.location.href="https://wa.me/message/6XK5M76P6FZVG1"} style={{ fontSize: "2rem",marginLeft:'-0.3rem' }} />
        </div>
      </div>
      </div>
   

      <div className={styles["logo-wrapper-mobile"]}>  
        <img src={Logo.src}  alt="" />
        <div className={styles["logo_description"]}>
          <h2>DOCTORS OWN PREP ACADEMY</h2>
          <p>“BY DOCTORS, FOR DOCTORS TO BE”</p>
          <span>www.mydopaclass.com</span>
        </div>
        </div>
        
      <p className={styles["dopa-copyright-mobile"]}>Copyright © 2021-2022 DOPA Coaching All rights reserved.</p>
      </div>

    
      <div className={styles["footer-logo_container"]}>
        <div className={styles["logo-wrapper"]}>
        
        <img src={Logo.src} alt="" />
        <div className={styles["logo_description"]}>
          <h2>DOCTORS OWN PREP ACADEMY</h2>
          <p>“BY DOCTORS, FOR DOCTORS TO BE”</p>
          <span>www.mydopaclass.com</span>
        </div>
        </div>
      <div className={styles["footer-social_media"]}>
        <p>Connect with us.</p>
        <div className={styles["social-icons"]}>
          <FiYoutube onClick={()=>window.location.href="https://youtube.com/c/DOPACoaching"} style={{ fontSize: "2rem" }}  />
          <AiOutlineInstagram onClick={()=>window.location.href="https://www.instagram.com/dopacoaching/?ig"}  style={{ fontSize: "2rem" }}  />
          <FiFacebook onClick={()=>window.location.href="https://www.facebook.com/dopacoaching/"} style={{ fontSize: "1.8rem",marginLeft:'-0.5rem' }}  />
          <FaWhatsapp  onClick={()=>window.location.href="https://wa.me/message/6XK5M76P6FZVG1"} style={{ fontSize: "2rem",marginLeft:'-0.3rem' }} />
        </div>
      </div>
      </div>


      <div className={styles["footer-dopa_deatails"]}>
        <LinkCard para ="K.M. Apartment, Rahmaniya school, Near Medical College, Kozhikode, Kerala 673008 " logo={<BiMapAlt className={styles["map"]} style={{ fontSize: "3.5rem" }} />} />
        <LinkCard action={()=>{window.location.href = "tel:+91 9645 202 200"}} para =" +91 9645 202 200 " logo={<FiPhone className={styles["phone"]} style={{ fontSize: "2rem" }} />}/>
        <LinkCard  action={(e) => {
                window.location.href = "mailto:dopaprep@gmail.com";
                e.preventDefault();
            }} para="dopaprep@gmail.com" logo={<FiSend className={styles["mail"]} style={{ fontSize: "2rem" }} />} /> 
      </div>

      <p className={styles["dopa-copyright"]}>Copyright © 2021-2022 DOPA Coaching All rights reserved.</p>
    </div>
  );
}
