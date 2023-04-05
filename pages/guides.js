import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { notion } from "../notion-config";
import { BiRightArrow } from "react-icons/bi";
const Guides = ({ response }) => {
  const [blog, setBlogs] = useState([]);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center border-b-2 boder-solid border-slate-400 mx-[5rem] mt-[8rem]">
        <h1 className="text-3xl font-semibold">Guides</h1>
        <p className="mt-2 pb-2">
          Resources to help you setup your{" "}
          <span className="font-bold">Desk Setups</span>{" "}
        </p>
      </div>
      <main className="guide-main-div">
        <div className="flex flex-col flex-wrap gap-y-8">
          {response.results.map((item) => {
            return (
              <div
                key={item.id}
                className="pl-[2rem] flex items-center gap-x-2"
              >
                <i className="iconoir-arrow-right-circle text-3xl"></i>

                <h1 className="text-zinc-800 hover:text-zinc-400 text-[1.75rem] pl-4 font-semibold hover:text-gray-600 max-[480px]:text-2xl">
                  <a
                    href={item.properties.URL.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.properties.Name.title[0].plain_text}
                  </a>
                </h1>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};
export async function getServerSideProps(context) {
  const response = await notion.databases.query({
    database_id: "3f92115be15943ff8648c3a560e48acd",
  });
  return {
    props: {
      response,
    }, // will be passed to the page component as props
  };
}

export default Guides;
