'use client'
import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Navbar with marquee and brand */}
      <div className="marquee-container bg-[#0f4c5c]">
        <div className="marquee-content">
          <span className="sm:text-base text-sm font-extralight font-sans text-neutral-100 hover:text-gray-200">
            Sbt -E- Commerce-Website
          </span>
        </div>
      </div>

      {/* Navbar with links */}
      <div className="bg-black">
        <nav className="text-base">
          {/* Hamburger icon for mobile view */}
          <div className="flex justify-between items-center px-4 sm:hidden">
           
            <button
              onClick={toggleMenu}
              className="text-neutral-500 hover:text-gray-100 focus:outline-none"
            >
              {/* Hamburger icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>

          {/* Links for desktop and mobile view */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } sm:flex flex-col sm:flex-row  px-4 sm:px-0 sm:ml-2 justify-around`}
          >
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="/">Home</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="/menscollections">Men</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="/womencollections">Women</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="/jewllerycollections">Jewllery</Link>
            </li>
            <li className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100">
              <Link href="/makeup">Makeup</Link>
            </li>
          </ul>

          {/* Search bar */}
          <div className="flex justify-center items-center text-center py-1 sm:ml-20 sm:flex sm:justify-center px-4 sm:px-0 ">
            <input
              className=" justify-center flex rounded-lg m-2 sm:m-2 lg:px-11 xl:px-11 sm:rounded-xl bg-neutral-200 hover:bg-gray-100 dark:text-neutral-900 placeholder:text-[12px] outline-none text-center"
              type="search"
              placeholder="Shopping"
            />
            <input
              className="text-neutral-500 dark:text-neutral-300 hover:text-gray-100 m-2"
              type="button"
              value="Search"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
