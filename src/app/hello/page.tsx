import React from "react";

const Main = () => {
  return (
    <div>
      <main className="bg-[#d8e2dc] flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-[Poppins] font-semibold text-4xl sm:text-4xl lg:text-6xl">
            LONG WEEKEND
          </h1>
          <h1 className="font-extrabold pt-4 text-4xl sm:text-3xl lg:text-5xl">
            SALE <span className="text-cyan-900">30 - 60%</span> OFF
          </h1>
          <h1 className="font-extrabold pt-4 text-4xl sm:text-3xl lg:text-5xl">
            EXTRA <span className="text-cyan-900">20%</span> OFF
          </h1>
        </div>

        <p className="font-medium text-center pt-2 text-sm sm:text-base lg:pt-4">
          SITEWIDE
        </p>
        <p className="font-medium text-center text-sm sm:text-base">
          YOUR ORDER
        </p>

        <div className="flex justify-center space-x-4 pt-6">
          <button className="hover:scale-105 px-4 py-2 text-xs sm:text-sm lg:text-base bg-[#001d3d] text-white rounded-md shadow-md transition-transform duration-300">
            Login
          </button>
          <button className="hover:scale-105 px-4 py-2 text-xs sm:text-sm lg:text-base bg-[#001d3d] text-white rounded-md shadow-md transition-transform duration-300">
            Sign Up
          </button>
        </div>
      </main>
    </div>
  );
};

export default Main;
