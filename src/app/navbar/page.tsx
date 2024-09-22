import React from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <div className="">
      {/* <h1 className="font-extrabold text-pink-600 text-opacity-80 py-2 ">sbt-brand</h1> */}
      <div className="marquee-container  bg-[#0f4c5c]">
        <div className="marquee-content  ">
          <span className="sm:text-base  text-[9px] font-extralight font-sans text-neutral-100 hover:text-gray-200 ">
            Sbt -E- Commerce-Website
          </span>
        </div>
      </div>
      <div className="bg-black  ">
  
        <nav className=" text-xs   ">
          <ul className="flex lg:justify-center ml-2 gap-2 sm:text-base sm:mr-40 sm:pt-2 sm:flex lg:flex xl:flex 2xl:flex   ">
            <li className=" text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="/">Home</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="/menscollections">Men</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="womencollections">Women</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100 cursor-pointer ">
              <Link href="/jewllerycollections">Jewllery</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100 cursor-pointer ">
              <Link href="/makeup">Makeup</Link>
            </li>
          </ul>

          <div className="flex ml-11 justify-center sm:ml-20 sm:flex sm:justify-end ">
            <input
              className="rounded-lg m-2 sm:placeholder:px-14 sm:py-[10px] sm:m-2 lg:px-11 xl:px-11 sm:rounded-xl bg-neutral-200 hover:bg-gray-100 dark:text-neutral-900  placeholder:text-[12px] outline-none placeholder-slate-400 text-center sm:-translate-y-3  sm:ml-44"
              type="search"
              placeholder="Shopping"
              id=""
            />
            <input
              className="text-neutral-500  dark:text-neutral-300  hover:text-gray-100 sm:-translate-y-3 "
              type="button"
              value="Search"
            />
            {/* <div className=" p-0 sm:flex sm:justify-end lg:flex lg:justify-end xl:flex xl:justify-end"> */}
            <Image
              className=" flex justify-end sm:h-9 sm:flex  sm:mr-2 sm:-translate-y-1/4 sm hover:opacity-75 cursor-pointer rounded-md px-1 border-neutral-400 h-[16px] ml-8 -translate-y-3 sm:translate-  sm:ml-11  "
              src="/shop.png"
              alt="cart"
              defaultValue={"cart"}
            />

            {/* </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Navbar;
