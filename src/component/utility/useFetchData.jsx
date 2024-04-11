import { useEffect, useState } from "react";
import { CDN_URL } from "./constant";

export const useFetchData = (search = "", movieId = " ") => {
  const [moviesData, setMoviesData] = useState();
  // const URL = "https://www.omdbapi.com/?apikey=c785f880&s=";
  useEffect(() => {
    fetchData();
  }, [search]);
  console.log(search);
  const fetchData = async () => {
    const response = await fetch(
      CDN_URL +
        "apikey=" +
        process.env.REACT_APP_MOVIE_KEY +
        (search !== "" ? "&s=" + search : "&i=" + movieId)
    );
    const data = await response.json();
    setMoviesData(data);
  };

  return moviesData;
};
