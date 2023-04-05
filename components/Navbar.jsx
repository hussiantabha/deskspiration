import React from "react";
import Head from "next/head";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 px-2 py-4 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap gap-x-[5rem] gap-y-4 justify-around items-center">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold text-primary">Deskspiration</h1>
        </Link>
        <div className="flex gap-x-[2rem] items-center mt-4 max-[1150px]:mt-0 text-[1.1rem]">
          <Link href={"/setups"}>Setups</Link>
          <Link href={"/guides"}>Guides</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
