import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "./MainNavbar.module.scss";
import logo from "../../../public/Assets/logo.png";
import Link from "next/link";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import { useRouter } from "next/router";
import { MdOutlineFiberNew } from "react-icons/md";
export default function MainNavbar() {
  const [activeMObileSubMenu, setActiveMobileSubMenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);

  const { push } = useRouter();
  const handleActivationOfMobileMenu = (id) => {
    if (window.innerWidth <= 768) {
      setActiveMobileSubMenu(activeMObileSubMenu ? false : id);
    }
  };

  const handleInnerExpansion = (event) => {
    console.log(event);
  };

  const handleRedirectToNeet = (data) => {
    localStorage.setItem("class", data);
    push(`/courses/neet`);
  };

  const handleRedirectToFound = (data) => {
    localStorage.setItem("class", data);
    push(`/courses/foundation`);
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
      <Link href="/">
        <Image src={logo} className={style.headerLogo} placeholder="blur" />
      </Link>
      {windowWidth && (
        <ul className={style.navLinks}>
          <li>
            <Link href="/dopa-integrated-school">Integrated School</Link>
          </li>
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
              Centers
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
                <Link href="/dopa-kottakkal">Kottakkal</Link>
              </li>
              <li>
                <Link href="/dopa-calicut">Calicut</Link>
              </li>
              <li>
                <Link href="/dopa-thrissur-campus">Thrissur</Link>
              </li>
            </ul>
          </li>

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
              <li onClick={handleInnerExpansion}>
                <a style={{ pointerEvents: "none" }}>+1/+2 NEET COACHING</a>
                <ul className={style.link_expand}>
                  <li>
                    <p
                      className={style.class_link}
                      onClick={() => handleRedirectToNeet("plusOne")}
                    >
                      +1
                    </p>
                  </li>
                  <li>
                    <p
                      className={style.class_link}
                      onClick={() => handleRedirectToNeet("plusTwo")}
                    >
                      +2
                    </p>
                  </li>
                  <li>
                    <p
                      className={style.class_link}
                      onClick={() => handleRedirectToNeet("plusOne&plustwo")}
                    >
                      +1 & +2
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/courses/repeaters">DOPA REPEATERS</Link>
              </li>
              {/* <li onClick={handleInnerExpansion}>
                <a style={{ pointerEvents: "none" }}>DOPA FOUNDATION</a>
                <ul className={style.link_expand}>
                  <li>
                    <p
                      className={style.class_link}
                      onClick={() => handleRedirectToFound("8")}
                    >
                      8th
                    </p>
                  </li>
                  <li>
                    <p
                      className={style.class_link}
                      onClick={() => handleRedirectToFound("9")}
                    >
                      9th
                    </p>
                  </li>
                  <li>
                    <p
                      className={style.class_link}
                      onClick={() => handleRedirectToFound("10")}
                    >
                      10th
                    </p>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link href="/courses/capsule">DOPA CAPSULE</Link>
              </li>
              <li>
                <Link href="/courses/tuition-with-foundation">
                  DOPA Foundation
                </Link>
              </li>
              <li>
                <Link href="/courses/tuition-with-entrance">DOPA Entrance</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/results-of-dopa">Results</Link>
          </li>
          <li>
            <Link href="/dopa-faculties">Our Team</Link>
          </li>
          <li>
            <Link href="/about-dopa">About Us</Link>
          </li>
          <li>
            <Link href="/dopa-contact">Contact Us</Link>
          </li>
          {/* <li onClick={() => push("/contact")}>
            <PrimaryButton addon={"btnBlueGradient"}>
              Book a Free Trial
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton>Sign in</PrimaryButton>
          </li> */}
        </ul>
      )}
      {/* <div
        onClick={() => (window.location.href = "https://dopaclass.com")}
        className={style.btnWrapperMobile}
      >
        <PrimaryButton addon={"btnBlueGradient"}>
          Book a Free Trial
        </PrimaryButton>
      </div> */}
    </header>
  );
}
