import Link from "next/link";
import Header from "../component/header";
import Footer from "../component/footer";
import Hero from '../component/hero';
import styles from './contact.module.css'
function ConatctUs(){
    return(
        <>
        <Header></Header>
        <h3>Contact Us</h3>
        <a href="https://www.instagram.com/bugatti/" className={styles.anchor}>Instagram Page Link</a>
        <Hero></Hero>
        <Footer></Footer>
        </>
    )
}

export default ConatctUs;