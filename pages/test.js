import Image from "next/image";

const Test = ({ data }) => {
  return (
    <>
      {/* {data.map((item) => {
        return (
          <div className="relative max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <div>
              <Image src={item.media[0].link} fill="true" objectFit="contain" />
            </div>
            <div>
              <p>some text here</p>
            </div>
          </div>
        );
      })} */}
    </>
  );
};
// export async function getServerSideProps(context) {
//   const getRainDrop = await fetch(
//     "https://api.raindrop.io/rest/v1/raindrops/29663814?perpage=100",
//     {
//       method: "GET",
//       headers: {
//         "Content-type": "application/json",
//         authorization: `Bearer ${process.env.RAINDROP_API_KEY}`,
//       },
//     }
//   );
//   const data = await getRainDrop.json();

//   return {
//     props: {
//       data: data.items,
//     }, // will be passed to the page component as props
//   };
// }
export default Test;
