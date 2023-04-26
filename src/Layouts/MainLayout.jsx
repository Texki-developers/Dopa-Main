import Footer from "@/Components/Footer/Footer";
import MainNavbar from "@/Components/MainNavbar/MainNavbar";
import Head from "next/head";
import styles from "./MainLayout.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import Popup from "@/Components/popupLayout/Popup";
import { useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Form from "@/Components/Form/Form";
import { useRouter } from "next/router";

export default function MainLayout({ children }) {
  // let popupRef = useRef();
  // const handlePopup = (type) => {
  //   if (type == 1) {
  //     popupRef.current.style.display = "flex";
  //   } else {
  //     popupRef.current.style.display = "none";
  //     localStorage.setItem("ipop", true);
  //   }
  // };

  // function handleSessionClose() {
  //   localStorage.removeItem("ipop");
  // }

  // const router = useRouter();

  // useEffect(() => {
  //   // let popStat = localStorage.getItem("ipop");
  //   // if (router.pathname === "/" && !popStat) {
  //   //   handlePopup(1);
  //   // }
  //   window.addEventListener("beforeunload", handleSessionClose);
  //   return () => {
  //     window.removeEventListener("beforeunload", handleSessionClose);
  //   };
  // }, []);

  return (
    <>
      <div
        onClick={() =>
          (window.location.href = `${process.env.NEXT_PUBLIC_WHATSAPP}`)
        }
        className={styles.enquiry_popup}
      >
        <IoLogoWhatsapp color="#25D366" />
      </div>
      {/* <Popup refs={popupRef} action={handlePopup} type={1}>
        <h1 style={{ marginBottom: "1.5rem" }}>Enquiry form</h1>
        <Form />
      </Popup> */}
      <Head>
      <title>Best NEET Coaching center in Kerala | DOPA Coaching</title>
      <meta name="description" content="DOPA  is an initiative of a group of doctors from Calicut Medical College, located in Kerala. Who provides top premium coaching services for preparing for the NEET Exam." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="RKvR80ZgxDSmi8-OyiMqt6EN0YzItjXgf6z-Nzpeenk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />

      {children}
      <Footer />
    </>
  );
}
