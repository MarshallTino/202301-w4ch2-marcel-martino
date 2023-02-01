import { useEffect, useState } from "react";
import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import SearchForm from "./components/SearchForm/SearchForm";
import "./index.css";
import { GifUrl } from "./types";

const category = "dogs";
const url = `https://api.giphy.com/v1/gifs/random?api_key=WYmkCWh9ucS7a749J7Ry7MFQQCrQaX8J&tag=${category}&rating=g`;

function App() {
  const [gifURL, setGifURL] = useState<string>("");

  const getGif = async (url: string) => {
    const response = await fetch(url);
    const returnGif = (await response.json()) as GifUrl;

    const gif = returnGif.data.images.fixed_width_still.url;
    setGifURL(gif);
  };

  useEffect(() => {
    getGif(url);
  }, []);

  return (
    <div className="container">
      <SearchForm />
      <ImageDisplay src={gifURL} />
      <ErrorDisplay />
    </div>
  );
}

export default App;
