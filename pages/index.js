import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Deskspiration</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.lineicons.com/3.0/lineicons.css"
        />
      </Head>
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}
