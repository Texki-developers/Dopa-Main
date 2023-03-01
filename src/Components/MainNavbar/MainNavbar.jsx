import Image from 'next/image'
import React, { useState } from 'react'
import style from './MainNavbar.module.scss'
import logo from '../../../public/Assets/logo.png'
import Link from 'next/link'
import PrimaryButton from '../Buttons/PrimaryButton/PrimaryButton'

export default function MainNavbar() {
    const [activeMObileSubMenu, setActiveMobileSubMenu] = useState(null)
    
    const handleActivationOfMobileMenu = (id) => {
        if(window.innerWidth <= 768){
            setActiveMobileSubMenu(activeMObileSubMenu ? false : id)
        }
    }
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
                    <span onClick={() => handleActivationOfMobileMenu(1)} className={style.arrow_link+" "+(activeMObileSubMenu === 1 ? style.arrow_link_active: '')}>Courses</span>
                    <ul className={style.sublinks_list} style={{display: activeMObileSubMenu === 1 ? "block" : 'none'}}>
                        <li>
                            <Link href='/'>Dopa Capsules</Link>
                        </li>
                        <li>
                            <Link href='/'>Dopa Capsules</Link>
                        </li>
                        <li>
                            <Link href='/'>Dopa Capsules</Link>
                        </li>
                        <li>
                            <Link href='/'>Dopa Capsules</Link>
                        </li>
                    </ul>
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
