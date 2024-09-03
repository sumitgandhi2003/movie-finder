import React from "react";
import { useState } from "react";
import { useFetchData } from "../utility/useFetchData";
import MovieCard from "../MovieCard/MovieCard";
import Input from "../Input/Input";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const data = useFetchData(searchInput);
  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  return (
    <div className="mt-6  grid gap-6 p-3">
      <div className="w-full flex flex-wrap gap-2 justify-center">
        <Input
          searchInput={searchInput}
          placeholder={"Search"}
          handleChange={handleChange}
        />
        <button className=" p-2 bg-blue-900 text-white rounded">Search</button>
      </div>
      <div className=" flex flex-wrap p-2 gap-2 justify-center">
        {data?.Search?.length > 0 ? (
          data?.Search?.map((item) => {
            return (
              <Link to={"/movies/" + item?.imdbID} key={item?.imdbID}>
                <MovieCard item={item} />
              </Link>
            );
          })
        ) : searchInput === "" ? (
          <div className="text-red-600">Input required</div>
        ) : (
          <div className="text-red-600">Data Not Found</div>
        )}
      </div>
    </div>
  );
};

export default Body;
