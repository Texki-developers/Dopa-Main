import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "./MainNavbar.module.scss";
import logo from "../../../public/Assets/logo.png";
import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";

export default function MainNavbar() {
  const [activeMObileSubMenu, setActiveMobileSubMenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);

  const handleActivationOfMobileMenu = (id) => {
    if (window.innerWidth <= 768) {
      setActiveMobileSubMenu(activeMObileSubMenu ? false : id);
    }
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return (
    <header className={style.mainHeader}>
      <label htmlFor="check" className={style.hamburger}>
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <Link href='/'>
        <Image src={logo} className={style.headerLogo} placeholder="blur" />
      </Link>
      {windowWidth && (
        <ul className={style.navLinks}>
          <li>
            <span
              onClick={() => {
                handleActivationOfMobileMenu(1);
              }}
              className={
                style.arrow_link +
                " " +
                (activeMObileSubMenu === 1 ? style.arrow_link_active : "")
              }
            >
              Courses
            </span>
            <ul
              className={style.sublinks_list}
              style={{
                display:
                  windowWidth < 500 && activeMObileSubMenu === 1
                    ? "block"
                    : windowWidth < 500
                    ? "none"
                    : "",
              }}
            >
              <li>
                <Link href="/courses/neet">Dopa Neet</Link>
              </li>
              <li>
                <Link href="/courses/repeaters">Dopa Repeaters</Link>
              </li>
              <li>
                <Link href="/courses/dopaSchool">Dopa School</Link>
              </li>
              <li>
                <Link href="/courses/foundation">Dopa Foundation</Link>
              </li>
              <li>
                <Link href="/courses/capsule">Dopa Capsules</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/results">Results</Link>
          </li>
          {/* <li>
            <Link href="">Resources</Link>
          </li>
          <li>
            <Link href="">Scholarships</Link>
          </li>
          <li>
            <Link href="">About Us</Link>
          </li> */}
          <li>
            <PrimaryButton addon={"btnBlueGradient"}>
              Book a Free Trial
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton>Sign in</PrimaryButton>
          </li>
        </ul>
      )}
      <div className={style.btnWrapperMobile}>
        <PrimaryButton addon={"btnBlueGradient"}>
          Book a Free Trial
        </PrimaryButton>
      </div>
    </header>
  );
}
