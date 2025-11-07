import Footer from "@/Components/Footer/Footer";
import MainNavbar from "@/Components/MainNavbar/MainNavbar";
import Head from "next/head";
import styles from "./MainLayout.module.scss";
import { IoLogoWhatsapp } from "react-icons/io";
import Popup from "@/Components/popupLayout/Popup";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Form from "@/Components/Form/Form";
import { useRouter } from "next/router";
import StickyBanner from "@/Components/StickyBanner/StickyBanner";

export default function MainLayout({ children }) {
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleBannerVisibility = (visible) => {
    setIsBannerVisible(visible);
  };

  return (
    <>
      <Head>
        <title>Best NEET Coaching center in Kerala | DOPA Coaching</title>
        <meta name="description" content="DOPA is an initiative of a group of doctors from Calicut Medical College, located in Kerala. Who provides top premium coaching services for preparing for the NEET Exam." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="RKvR80ZgxDSmi8-OyiMqt6EN0YzItjXgf6z-Nzpeenk" />
        <link rel="icon" href="/favicon.png" />
      </Head>
{/*       
      <StickyBanner onVisibilityChange={handleBannerVisibility} /> */}
      <MainNavbar />
      
      <main className={`${styles.mainContent} ${isBannerVisible ? styles.withBanner : ''}`}>
        {children}
      </main>
      
      <div
        onClick={() => (window.location.href = `${process.env.NEXT_PUBLIC_WHATSAPP}`)}
        className={styles.enquiry_popup}
      >
        <IoLogoWhatsapp color="#25D366" />
      </div>
      
      <Footer />
    </>
  );
}
