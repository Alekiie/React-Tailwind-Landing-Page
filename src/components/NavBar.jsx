import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  //toggle menu and close function
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center h-24 mx-auto px-4 max-w-[1240px] text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase cursor-pointer">
        Jukaki
      </h1>
      <ul className=" hidden md:flex cursor-pointer  ">
        <li className="p-4 ">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 border-r w-[60%] border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden"
            : "fixed left-[-150px] md:hidden"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase m-4">
          JUkaki
        </h1>

        <ul className=" uppercase cursor-pointer">
          <li className="p-4 border-b border-b-gray-600">Home</li>
          <li className="p-4 border-b border-b-gray-600">Company</li>
          <li className="p-4 border-b border-b-gray-600">Resources</li>
          <li className="p-4 border-b border-b-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
