import Image from "next/image";
import Link from "next/link";
import about from "./about/page";
import ConatctUs from "./contact_us/page";
import Header from "./component/header";
import Footer from "./component/footer";
import Hero from "./component/hero";

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero></Hero>
    </main>
    <Footer></Footer>
    </>
  ) 
}
