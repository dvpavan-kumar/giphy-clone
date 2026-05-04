import React, { useEffect } from "react";
import { GifState } from "../context/gif-context";
import Gif from "../components/gif";
import FilterGif from "../components/filter-gif";

const Home = () => {
  const { giphy, gifs, setGifs, filter } = GifState();
  console.log(filter);
  const fetchTrendingGifs = async () => {
    try {
      const { data } = await giphy.trending({
        limit: 20,
        type: filter,
        rating: "g",
      });
      setGifs(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);
  console.log("gifs:", gifs);
  return (
    <div>
      <img
        src="/banner.gif"
        alt="earth banner"
        className="mt-2 rounded w-full"
      />

      <FilterGif/>

      <div className="columns-2 md:columns-3 lg:columns-4 xl:column-5 gap-2 ">
        {gifs.map((gif) => {
          return <Gif key={gif?.id} gif={gif} />;
        })}
      </div>
    </div>
  );
};

export default Home;
