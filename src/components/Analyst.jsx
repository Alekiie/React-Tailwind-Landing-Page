import React from "react";
import Laptop from '../assets/laptop.png'

const Analyst = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img
          src={Laptop}
          className="w-[400px] mx-auto my-4"
          alt='/'
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00dfa9] font-bold uppercase">
            Data Analytics DashBoard
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            corrupti inventore optio, velit tenetur molestias, nobis facere
            iusto tempora, eveniet similique doloribus voluptas quae soluta!
            Quasi dicta ex soluta consectetur.
          </p>
          <button className="text-[#00f9da] font-bold bg-black mx-auto py-3 my-6 rounded-md w-[200px]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analyst;
