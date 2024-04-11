import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="bg-gray-800 py-4 h-max">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">Movies Finder</div>
        <div className="flex items-center">
          <div className="md:flex hidden">
            <Link to={"/"} className="text-white mx-4">
              <div>Home</div>
            </Link>
            <Link to={"/"} className="text-white mx-4">
              <div>About</div>
            </Link>
            <Link to={"/contact"} className="text-white mx-4">
              <div>Contact Us</div>
            </Link>
          </div>
          <div className="md:hidden">
            <i
              className="text-4xl text-white fa-solid fa-bars cursor-pointer"
              onClick={(e) => {
                setShowLinks(!showLinks);

                e.target.classList.contains("fa-bars")
                  ? e.target.classList.replace("fa-bars", "fa-xmark")
                  : e.target.classList.replace("fa-xmark", "fa-bars");
              }}
            ></i>
          </div>
        </div>
      </div>
      {showLinks && (
        <div className="md:hidden bg-gray-800 absolute top-16 left-0 w-full">
          <div className="flex flex-col items-start py-4">
            <Link to={"/"} className="text-white mx-4 my-2">
              <div>Home</div>
            </Link>
            <Link to={"/"} className="text-white mx-4 my-2">
              <div>About</div>
            </Link>
            <Link to={"/contact"} className="text-white mx-4 my-2">
              <div>Contact Us</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
