import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const Setups = ({ data }) => {
  const [setup, setSetup] = useState([]);
  console.log(data);
  const filterItems = (category) => {
    const filter = data.filter((item) => {
      return category === "All" ? item : item.tags.includes(category);
    });
    setSetup(filter);
  };
  useEffect(() => {
    setSetup(data);
  }, []);
  const lastDate = data[0].created.split("T");
  console.log(lastDate);
  const categories = [
    "All",
    "designer",
    "engineer",
    "creator",
    "gaming",
    "students",
  ];
  return (
    <>
      <Navbar />
      <section className="flex flex-wrap justify-evenly items-center mt-[2.5rem]">
        <div>
          {categories.map((item) => {
            return (
              <button
                key={item}
                type="button"
                onClick={() => filterItems(item)}
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                {item}
              </button>
            );
          })}
        </div>
        <p className="text-neutral-500">Last Updated: {lastDate[0]}</p>
      </section>
      <main className="mt-[3rem] mb-[4rem] flex flex-wrap justify-around gap-y-[2rem]">
        {setup.map((item) => {
          return (
            <div
              key={item.link}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img className="rounded-t-lg" src={item.media[0].link} alt="" />
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
              </div>
            </div>
          );
        })}
      </main>
    </>
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