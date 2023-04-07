import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import toast, { Toaster } from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Setups = ({ data }) => {
  const [setup, setSetup] = useState([]);
  const [deskInfo, setDeskInfo] = useState([]);
  // filter setups on different tags
  const filterItems = (category) => {
    const filter = deskInfo.filter((item) => {
      return category === "all" ? item : item.data.tags.includes(category);
    });
    setSetup(filter);
  };
  // fetches data from server
  const getData = async () => {
    const data = await fetch("./api/data");
    if (data.status === 200) {
      const convertedJSON = await data.json();
      setDeskInfo(convertedJSON.desk);
      setSetup(convertedJSON.desk);
    }
  };

  useEffect(() => {
    getData();
    // setSetup(data);
  }, []);
  const lastDate =
    setup.length === 0 ? "loading" : setup[0].data.created.split("T")[0];
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
  ];
  return (
    <div className="px-[0.75rem] pb-8 mt-[10rem]">
      <Toaster position="top-center" reverseOrder={false} />
      <Head>
        <title>Setups</title>
        <meta
          name="description"
          content="find inspiration for you next desk setup"
        />
        <link rel="icon" href="/computer.ico" />
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
            Last Updated: {lastDate}
          </p>
        </div>
      </section>
      <main className="mt-[3rem] mb-[4rem] flex flex-wrap justify-around gap-y-[2rem]">
        {setup.length === 0
          ? [1, 2, 3].map((item) => {
              return (
                <div
                  key={item}
                  role="status"
                  className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                >
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                    <svg
                      className="w-12 h-12 text-gray-200 dark:text-gray-600"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  <div className="flex items-center mt-4 space-x-3">
                    <svg
                      className="text-gray-200 w-14 h-14 dark:text-gray-700"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>
              );
            })
          : setup.map(({ data }) => {
              return (
                <div
                  key={data.link}
                  className="relative max-w-sm bg-violet-50 border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 self-start	"
                >
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="imgew"
                  >
                    <LazyLoadImage
                      // src={data.media.length > 0 ? data.media[0].link : data.cover}
                      src={data.cover}
                      alt={data.excerpt}
                      effect="opacity"
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-[1.25rem] font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.title}
                      </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {data.domain === "twitter.com" && data.excerpt}
                    </p>
                    <a
                      href={data.link}
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
                        navigator.clipboard.writeText(data.link);
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
// export async function getServerSideProps(context) {
//   const getRainDrop = await fetch(
//     // "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=100",
//     // "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=50",
//     "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=50&sort=-sort&page=0",
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         authorization: `Bearer ${process.env.RAINDROP_API_KEY}`,
//       },
//     }
//   );
//   const getRainDrop2 = await fetch(
//     // "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=100",
//     // "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=50",
//     "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=50&sort=-sort&page=1",
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         authorization: `Bearer ${process.env.RAINDROP_API_KEY}`,
//       },
//     }
//   );
//   const getRainDrop3 = await fetch(
//     // "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=100",
//     // "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=50",
//     "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=50&sort=-sort&page=2",
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         authorization: `Bearer ${process.env.RAINDROP_API_KEY}`,
//       },
//     }
//   );
//   const data0 = await getRainDrop.json();
//   const data1 = await getRainDrop2.json();
//   const data2 = await getRainDrop3.json();

//   // let { data: deskInfo, error } = await supabase
//   //   .from("desk-info")
//   //   .select("*")
//   //   .order("id", { ascending: false });

//   return {
//     props: {
//       data: [...data0.items, ...data1.items, ...data2.items],
//       // data: [...data0.items, ...data1.items, ...data2.items],
//     }, // will be passed to the page component as props
//   };
// }
export default Setups;
<<<<<<< Updated upstream

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
