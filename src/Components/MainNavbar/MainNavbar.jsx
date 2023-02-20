import Image from 'next/image'
import React from 'react'
import style from './MainNavbar.module.scss'
import logo from '../../../public/Assets/logo.png'
import Link from 'next/link'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'

export default function MainNavbar() {
    return (
        <header className={style.mainHeader}>
            <label htmlFor="check" className={style.hamburger}>
                <input type="checkbox" id="check" />
                <span></span>
                <span></span>
                <span></span>
            </label>
            <Image src={logo} className={style.headerLogo} placeholder='blur' />
            <ul className={style.navLinks}>
                <li>
                    <Link href="">Courses</Link>
                </li>
                <li>
                    <Link href="">Results</Link>
                </li>
                <li>
                    <Link href="">Resources</Link>
                </li>
                <li>
                    <Link href="">Scholarships</Link>
                </li>
                <li>
                    <Link href="">About Us</Link>
                </li>
                <li>
                    <PrimaryButton addon={"btnBlueGradient"}>Book a Free Trial</PrimaryButton>
                </li>
                <li>
                    <PrimaryButton>Sign in</PrimaryButton>
                </li>
            </ul>
            <div className={style.btnWrapperMobile}>
                <PrimaryButton addon={"btnBlueGradient"}>Book a Free Trial</PrimaryButton>
            </div>
        </header>
    )
}
