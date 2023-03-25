import Footer from "@/Components/Footer/Footer";
import MainNavbar from "@/Components/MainNavbar/MainNavbar";
import Head from "next/head";
import styles from "./MainLayout.module.scss";
import { MdQuestionAnswer } from "react-icons/md";
import Popup from "@/Components/popupLayout/Popup";
import { useEffect, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Form from "@/Components/Form/Form";
import { useRouter } from "next/router";
export default function MainLayout({ children }) {
  let popupRef = useRef();
  const handlePopup = (type) => {
    if (type == 1) {
      popupRef.current.style.display = "flex";
    } else {
      popupRef.current.style.display = "none";
      localStorage.setItem("ipop", true);
    }
  };

  function handleSessionClose() {
    localStorage.removeItem("ipop");
  }

  const router = useRouter();
  
  useEffect(() => {
    let popStat = localStorage.getItem("ipop");
    if (router.pathname === "/" && !popStat) {
      handlePopup(1);
    }
    window.addEventListener("beforeunload", handleSessionClose);
    return () => {
      window.removeEventListener("beforeunload", handleSessionClose);
    };
  }, []);

  return (
    <>
      <AnchorLink
        href="#pop"
        onClick={() => handlePopup(1)}
        className={styles.enquiry_popup}
      >
        <MdQuestionAnswer />
      </AnchorLink>
      <Popup refs={popupRef} action={handlePopup} type={1}>
        <h1 style={{ marginBottom: "1.5rem" }}>Enquiry form</h1>
        <Form />
      </Popup>
      <Head>
        <title>Dopa</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavbar />

      {children}
      <Footer />
    </>
  );
}
