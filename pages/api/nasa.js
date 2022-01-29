const dotenv = require("dotenv");
import Axios from "axios";
dotenv.config();

export default async (req, res) => {
  const { date } = req.body;
  const NASA_API_KEY = process.env.NASA_API_KEY;

  const requestOptions = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const resp = await Axios.get(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${NASA_API_KEY}`,
    requestOptions
  );
  console.log(resp);
  const { hdurl, title, explanation } = resp.data;
  res.status(200).json({
    img_url: hdurl,
    title: title,
    description: explanation
  });
};
