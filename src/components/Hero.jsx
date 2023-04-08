import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center  flex flex-col justify-center">
        <p className="uppercase text-[#00f9da] font-bold p-2 text-2xl">
          Growing with Tech
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-3">
          Grow with us
        </h1>
        <div className="flex justify-center items-center gap-4">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold ">
            Fast, Flexible Financiers for
          </p>
          <Typed
            strings={["BTB", "SASS"]}
            typeSpeed={140}
            backSpeed={120}
            loop
            className="md:text-5xl sm:text-4xl text-xl text-red-500 font-bold "
          />
        </div>
        <p className="md:text-3xl text-xl font-bold text-gray-500">
          Monitor your goods until they reach you safely.
        </p>
        <button className="bg-[#00f9da] font-bold text-black mx-auto py-3 my-6 rounded-md w-[200px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
