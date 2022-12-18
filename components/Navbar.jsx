import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  <Head></Head>;
  return (
    <nav className="flex py-8 justify-around items-center">
      <Link href={"/"}>
        <h1 className="text-3xl  font-semibold">Deskspiration</h1>
      </Link>
      <a
        href="https://twitter.com/hussain__mt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitter className="text-2xl dark:text-slate-100" />
      </a>
    </nav>
  );
};

export default Navbar;
