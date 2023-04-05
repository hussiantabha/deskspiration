import React, { useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import { RxPencil2 } from "react-icons/rx";
import { GiFlexibleLamp } from "react-icons/gi";
import Link from "next/link";
import { supabase } from "../supabse-config";
import { Toaster, toast } from "react-hot-toast";

const Featured = () => {
  const [email, setEmail] = useState("");
  const featuredSetups = [
    {
      title: "",
      link: "",
      cover:
        // "https://preview.redd.it/6j89us0ogd6a1.jpg?auto=webp&s=d80cec545b74fd4baead76f4f353c308eb53e0b5",
        // "https://preview.redd.it/0jry2dufwi7a1.png?width=960&crop=smart&auto=webp&s=d58dcbce9a87acd8ee9c2f4f19e2bba75bd71b84",
        "https://preview.redd.it/f3zmlp1yne5a1.jpg?width=960&crop=smart&auto=webp&s=697eae2adcb6b3f6628b73d010e3c19c2bfa3dd0",
      desc: "Made for Gaming",
    },
    {
      title: "",
      link: "",
      cover:
        "https://preview.redd.it/16h6rubvju5a1.jpg?auto=webp&s=8250ac621459c57c6cb5c3a1ef3c44f8a359c7a1",
      desc: "",
    },
    {
      title: "",
      link: "",
      cover:
        "https://preview.redd.it/x45huco3l85a1.jpg?width=960&crop=smart&auto=webp&s=e29a8ec13639bb4dfd3e39d5180a2686e69e0bfb",
      desc: "",
    },
  ];
  const essential = [
    {
      element: "<RxPencil2 />",
      icon: "pencil",
      title: "Pen Paper",
      desc: "Pen and paper can stimulate creativity and help you brainstorm and generate new ideas.  Writing with a pen and paper can be a relaxing and therapeutic activity.",
    },
    {
      element: "<RiPlantFill />",
      icon: "plant",
      title: "Plants",
      desc: "Bringing a touch of nature to desk setup with fake plant.It's not only a refreshing addition to the space, but it also helps beautify the space and improves focus while working",
    },
    {
      element: "< GiFlexibleLamp/>",
      icon: "lamp",
      title: "Lamp",
      desc: "Desk lamp can help reduce eye strain and improve visibility while working. Look for a lamp with a flexible neck so you can adjust the light to your needs.",
    },
  ];
  const supabaseForm = async () => {
    const { data, error } = await supabase.from("email").insert([{ email }]);
    if (data === null) {
      setEmail("");
      toast.success("Successfully Submitted🚀");
    } else {
      toast.error("Something went wrong!");
    }
  };
  return (
    <section className="featured-section">
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="text-[2rem] text-center text-primary font-semibold underline decoration-slate-400 underline-offset-4">
        Featured Setups
      </h1>
      <div className="flex flex-wrap gap-y-[2rem] justify-around mt-[3rem] px-4">
        {featuredSetups.map((item) => {
          return (
            <div
              key={item.cover}
              class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img class="rounded-t-lg" src={item.cover} alt="" />
              </a>
              <div class="p-5">
                {/* <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p> */}
                <Link
                  href="/setups"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-secondary rounded-lg hover:bg-[#2675B0] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View Setups
                  <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
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
            </div>
          );
        })}
      </div>
      <section className="featured-section">
        <h1 className="text-[2rem] text-center font-semibold text-primary underline decoration-slate-400 underline-offset-4">
          Desk Essentials
        </h1>
        <div className="mt-[3rem] flex flex-wrap gap-y-[2rem] justify-evenly px-4">
          {essential.map((item) => {
            return (
              <div
                key={item.title}
                class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
              >
                {item.icon === "plant" ? (
                  <RiPlantFill className="text-[2rem] mb-8 text-neutral-700" />
                ) : item.icon === "pencil" ? (
                  <RxPencil2 className="text-[2rem] mb-8 text-neutral-700" />
                ) : (
                  <GiFlexibleLamp className="text-[2rem] mb-8 text-neutral-700" />
                )}
                <a href="#">
                  <h5 class="mb-2 text-2xl text-primary font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h1 className="text-[2rem] mb-[4rem] text-center text-primary font-semibold underline decoration-slate-400 underline-offset-4">
          Get Updates
        </h1>
        <div className="min-w-[300px] w-[30%]">
          <label
            for="email-address-icon"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <div class="relative mb-4">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="email-address-icon"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="hussain@deskspiration.xyz"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <button
            onClick={supabaseForm}
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </section>
    </section>
  );
};

export default Featured;
