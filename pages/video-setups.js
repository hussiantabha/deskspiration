import Navbar from "../components/Navbar";
import { supabase } from "../supabse-config";
import toast, { Toaster } from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";

const VideoSetups = ({ data }) => {
  console.log(data);
  return (
    <>
      <Navbar />

      <main className="mt-[3rem] mb-[4rem] flex flex-wrap justify-around gap-y-[2rem]">
        {data.map(({ data }) => {
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
    </>
  );
};
export async function getStaticProps(context) {
  let { data: deskinfo, error } = await supabase
    .from("desk-info-test")
    .select("*")
    .order("id", { ascending: false });

  return {
    props: {
      data: deskinfo,
    }, // will be passed to the page component as props
  };
}
export default VideoSetups;
