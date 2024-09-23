import React from "react";
const Main = () => {
  return (
    <div>
      <main className="bg-[#d8e2dc] content-center h-screen lg:h-screen">
       
      

       
        <div className="">
        <h1 className="flex justify-center font-[Poppins] font-normal text-4xl  lg:text-7xl ">
          LONG WEEKEND{" "}
        </h1>
        <h1 className=" font-extrabold flex justify-center pt-5 text-3xl lg:text-7xl">
          SALE  <span className="text-cyan-900 ml-2"> 30 - 60</span>  % OFF{" "}
        </h1>

        <h1 className="flex justify-center font-extrabold text-4xl pt-5 lg:text-7xl">
          EXTRA <span className="text-cyan-900 ml-2">20%</span> OFF{" "}
        </h1>
        </div>
        <p className="flex justify-center font-medium pt-2 text-sm lg:text-base lg:pt-2 ">SITEWIDE</p>
        <p className="flex justify-center font-medium text-sm lg:text-base lg:pb-4  ">YOUR ORDER</p>
        <div className="text-center pt-2">
          <button className="inline-block hover:scale-105 text-sm px-2 ml-2 shadow-yellow-400 bg-[#001d3d] sm:rounded-br-3xl sm:rounded-t-3xl text-white font-medium hover:opacity-95 lg:text-base lg:px-4 lg:py-2 rounded  ">
            Login
          </button>
          <button className="inline-block hover:scale-105 text-sm px-2  ml-2 shadow-yellow-400 bg-[#001d3d] sm:rounded-br-3xl sm:rounded-t-3xl text-white font-medium hover:opacity-95 lg:text-[15px] lg:px-4 lg:py-2 rounded  ">
            Sign Up
          </button>
          </div>
        
      </main>
    </div>
  );
};
export default Main;
