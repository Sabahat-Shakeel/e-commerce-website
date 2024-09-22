import React from "react";
const Main = () => {
  return (
    <div>
      <main className="bg-[#d8e2dc] content-center h-72 lg:h-screen">
       
        <h3 className="text-gray-400 -translate-y-16 text-[6px] font-serif underline cursor-pointer hover:underline-offset-2 lg:text-xs lg:-translate-y-36 lg:pb-2 ml-[2px] ">
          Email : sbt01@gmail.com
        </h3>

        {/* <img className="h-40" src="/sbt.png" alt="" /> */}
        <div className="">
        <h1 className="flex justify-center font-[Poppins] font-extralight text-2xl  lg:text-7xl ">
          LONG WEEKEND{" "}
        </h1>
        <h1 className=" font-extrabold flex justify-center text-2xl lg:text-7xl">
          SALE 30 - 60 % OFF{" "}
        </h1>

        <h1 className="flex justify-center font-extrabold text-2xl lg:text-7xl">
          EXTRA 20% OFF{" "}
        </h1>
        </div>
        <p className="flex justify-center font-light text-[6px] lg:text-base lg:pt-2 ">SITEWIDE</p>
        <p className="flex justify-center font-light text-[6px] lg:text-base lg:pb-4  ">YOUR ORDER</p>
        <div className="text-center">
          <button className="inline-block hover:scale-105 text-[10px] px-2  ml-2 shadow-yellow-400 bg-[#001d3d] rounded-br-3xl rounded-t-3xl text-white font-medium hover:opacity-95 lg:text-base lg:px-4 lg:py-2">
            Login
          </button>
          <button className="inline-block hover:scale-105 text-[10px] px-1  ml-2 shadow-yellow-400 bg-[#001d3d] rounded-br-3xl rounded-t-3xl text-white font-medium hover:opacity-95 lg:text-[15px] lg:px-4 lg:py-2  ">
            Sign Up
          </button>
          </div>
        
      </main>
    </div>
  );
};
export default Main;
