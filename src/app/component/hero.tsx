import React from "react";
import Link from "next/link";
import styles from './hero.module.css'

function Hero(){
    return(
        <>
        <section className={styles.hero}>
            <h1>Welcome to the official page of Bughtti   <i>(A premium car brand)</i></h1>
            
        </section>
        </>
    )
}
export default Hero;