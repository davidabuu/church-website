import React from "react";

const Subscribe = () => {
  return (
    <form className="flex flex-col md:flex-row items-center  justify-around bg-[#1e3a76] p-20 text-white">
      <h2 className="text-3xl mb-4">Be Inspired!</h2>
      <input
        className="border-2 placeholder:text-white placeholder:font-bold p-2 mb-4 bg-[#1e3a76] outline-none border-[#aa9055] w-[100%]  md:w-96 lg:w-1/2 xl:w-1/3"
        type="email"
        required
        placeholder="Enter your email address*"
      />
      <button className="text-2xl cursor-pointer p-2  hover:bg-[#aa9055] hover:text-white transition duration-300 rounded">
        Subscribe
      </button>
    </form>
  );
};

export default Subscribe;
