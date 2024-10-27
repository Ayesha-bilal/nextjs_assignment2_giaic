import React from 'react';
import Link from 'next/link';
import Header from '../component/header';
import Footer from '../component/footer';
import Hero from '../component/hero';
import styles from './about.module.css';
function about(){
    return (
        <div>
            <Header></Header>
            <h3>About</h3>
            <p>We are The Japenses Car</p>
            <Hero></Hero>
            <Footer></Footer>
        </div>
    )
}


export default about;