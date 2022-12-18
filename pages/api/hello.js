// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
export default async function handler(req, res) {
  const getRainDrop = await fetch(
    "https://api.raindrop.io/rest/v1/raindrops/29663952",
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: "Bearer a7aa168f-0af5-48a6-9cd1-fae95192b730",
      },
    }
  );
  const convertedJSON = await getRainDrop.json();
  res.status(200).json({ convertedJSON });
}
