import { useEffect, useState } from "react";
import { Html } from "next/document";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Setups = ({ data }) => {
  const [setup, setSetup] = useState([]);
  console.log(data);
  const filterItems = (category) => {
    const filter = data.filter((item) => {
      return category === "all" ? item : item.tags.includes(category);
    });
    setSetup(filter);
  };
  useEffect(() => {
    setSetup(data);
  }, []);
  const lastDate = data[0].created.split("T");
  const categories = [
    {
      name: "All",
      value: "all",
    },
    {
      name: "PM/Designer",
      value: "designer",
    },
    {
      name: "Developers",
      value: "engineer",
    },
    {
      name: "Creator",
      value: "creator",
    },
    {
      name: "Students",
      value: "students",
    },
    {
      name: "Home-office",
      value: "office",
    },
    // "All",
    // "designer",
    // "engineer",
    // "creator",
    // "gaming",
    // "students",
    // "office",
  ];
  const another = data[0];
  return (
    <div className="px-[0.75rem] pb-8">
      <Toaster position="top-center" reverseOrder={false} />
      <Head>
        <title>Setups</title>
        <meta
          name="description"
          content="find inspiration for you next desk setup"
        />
        <link rel="icon" href="/working.ico" />
      </Head>
      <Navbar />
      <section className="flex flex-wrap justify-evenly items-center gap-y-[2rem] mt-[2.5rem] ">
        <div className="flex flex-wrap justify-center">
          {categories.map((item) => {
            return (
              <button
                key={item.value}
                type="button"
                onClick={() => filterItems(item.value)}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {item.name}
              </button>
            );
          })}
        </div>
        <div className="flex justify-center">
          <p className="text-blue-900 font-semibold">
            Last Updated: {lastDate[0]}
          </p>
        </div>
      </section>
      <main className="mt-[3rem] mb-[4rem] flex flex-wrap justify-around gap-y-[2rem]">
        {setup.map((item) => {
          return (
            <div
              key={item.link}
              className="relative max-w-sm bg-violet-50 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 self-start	"
            >
              {/* <a>
                <Image
                  className="img-child"
                  src={item.media[0].link}
                  fill="true"
                />
              </a> */}
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="imgew"
              >
                <LazyLoadImage
                  src={item.media.length > 0 ? item.media[0].link : item.cover}
                  alt={item.excerpt}
                  effect="opacity"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.domain === "twitter.com" && item.excerpt}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  View
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    navigator.clipboard.writeText(item.link);
                    toast.success("Successfully Copied 🚀");
                  }}
                  className=" inline-flex items-center ml-[1rem] px-3 py-2 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                >
                  Copy Link
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};
export async function getServerSideProps(context) {
  const getRainDrop = await fetch(
    "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=100",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${process.env.RAINDROP_API_KEY}`,
      },
    }
  );
  const data = await getRainDrop.json();

  return {
    props: {
      data: data.items,
    }, // will be passed to the page component as props
  };
}
export default Setups;

//a card component
{
  /* <div
          key={data[0].link}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href={data[0].link} target="_blank" rel="noopener noreferrer">
            <Image
              className="rounded-t-lg"
              src={data[0].media[0].link}
              fill="false"
              // width={"fill"}
              // height="fill"
            />
            <img className="rounded-t-lg" src={item.media[0].link} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data[0].title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {data[0].domain === "twitter.com" && item.excerpt}
            </p>
            <a
              href={data[0].link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div> */
}
