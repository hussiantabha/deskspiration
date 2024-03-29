import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Featured from "../components/Featuresd";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Deskspiration</title>
        <meta
          name="description"
          content="find inspiration for you next desk setup"
        />
        <meta
          name="google-site-verification"
          content="u4xhT09-n1DV0O9nlU_4r-jtRkl5IwfOF2h_86pAWXI"
        />
        <link rel="icon" href="/computer.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Featured />
      <Footer />
    </div>
  );
}
