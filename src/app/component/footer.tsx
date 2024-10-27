import React from "react";
import Link from "next/link";
import styles from "./footer.module.css"

function Footer(){
   return(
    <>
    <footer className={styles.footer}>
        <h6>&copy; 2024 BUGATTI Automobiles </h6>
    </footer>
    </>
   )
}

export default Footer;