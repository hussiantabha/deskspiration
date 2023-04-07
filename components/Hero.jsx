import Link from "next/link";
import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="hero-container">
      <div className="hero-text-container  flex-col items-center min-[1000px]:pl-[2.5rem] min-[1000px]:text-[2.75rem]">
        <h1 className="text-[3.5rem] font-semibold text-primary  max-[1000px]:text-[3rem] max-[1000px]:text-center max-[850px]:text-[2.75rem] max-[768px]:text-[2.5rem]  max-[480px]:text-4xl max-[480px]:leading-relaxed">
          Find Inspiration for
          <span className="text-secondary"> Desk-setups </span>
        </h1>
        <Link
          href={"/setups"}
          type="button"
          className="mt-8 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 hover:bg-secondary hover:border-0 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Explore Setups
          <svg
            aria-hidden="true"
            class="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
      <div className="hero-img-container">
        <img src="./assets/desk8.webp" className="rounded" />
      </div>
    </main>
  );
};

export default Hero;
