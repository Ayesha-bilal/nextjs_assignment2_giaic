import React from "react";
import Link from "next/link";
import styles from './header.module.css'

function Header(){
    return(
        <>
        <header className={styles.header}>
            <nav className={styles.navLinks}>
                    <Link href="/">Home </Link>  
                    <Link href="/about">About Us</Link>
                    <Link href="/contact_us">Contact Us</Link>
            </nav>
        </header>
        </>
    )
}
export default Header;