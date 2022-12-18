import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-div">
      <div>
        <p className="text-center text-[2.25rem] text-slate-800 font-bold dark:text-slate-200 max-[480px]:text-[1.5rem]">
          Explore a world of possibilities for your desk setup
        </p>
        <p className="text-center text-[2.25em] text-gray-800 font-[900] italic dark:text-slate-200 max-[480px]:text-[1.5rem]">
          &
        </p>
        <p className="text-center text-[2.25em] text-gray-800 font-bold dark:text-slate-200 max-[480px]:text-[1.5rem]">
          find inspiration for your own workspace
        </p>
      </div>
      <Link
        href={"/setups"}
        type="button"
        class="mt-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Explore Setups
      </Link>
    </section>
  );
};

export default Hero;
