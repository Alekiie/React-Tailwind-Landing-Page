import React from "react";


const NewLetter = () => {
  return (
    <div className="w-full py-16 px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
            <div className="lg:col-span-2 my-4">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
                    Want tips & Tricks to optimize your flow?
                </h1>
                <p>Sign up to our newsletter and stay up-to date.</p>
            </div>
            <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">

            <input type="email" placeholder="Enter email" className="p-3 rounded-md flex w-full text-black outline-none"/>
            <button className="bg-[#00f9da] font-bold text-black ml-4 mx-auto px-6 py-3 my-6 rounded-md w-[200px]">Notify Me</button>
            </div>
            <p>We care about the privacy of your data. Read our <span className="text-[#00f9da] underline">Privacy Policy</span></p>
            </div>
      </div>
    </div>
  );
};

export default NewLetter;
