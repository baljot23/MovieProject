import styled from "styled-components";
import { Link } from "react-router-dom";
import Form from "./Form";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-black opacity-80 flex h-24">
      <div
        width={100}
        height={100}
        className="cursor-pointer object-contain mr-10 text-xl mt-7 text-white"
      >
        <a
          href="/"
          width={100}
          height={100}
          className="cursor-pointer object-contain ml-5 mr-5 mt-7 text-2xl text-white"
        >
          Entertainment
        </a>

        <a href="/" className="mr-5 ml-5 ">
          HOME
        </a>
        <a href="/Movies" className="mr-5 ">
          MOVIES
        </a>
        <a href="/TvShows" className="mr-5">
          TV SHOWS
        </a>
        <a href="/MyList" className="mr-96">
          MY LIST
        </a>
      </div>
      <div className="ml-80  mt-7 text-white flex">
        <div className="mr-5 mt-1 text-white ml-96">
          <FaSearch className="hidden h-6 w-6 sm:inline" />
        </div>
        <a href="/" className="text-xl ">
          Profile Icon
        </a>
      </div>
    </div>
  );
};

export default Header;
